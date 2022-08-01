import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepositoy";
import { ICreateUserRequest } from "./CreateUserDTO";
import { IMailProvider } from '../../providers/IMailProvider';

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequest) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Gustavo Cabreira',
                email: 'gustavo.softdev@gmail.com'
            },
            subject: 'Seja bem-vindo ao meu app!',
            body: "<p>Sua conta foi criada com sucesso!</p>"
        });
    }
}