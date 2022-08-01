import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserController } from './CreateUserController';

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUserRepository = new PostgreUsersRepository();

const createUsersUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailtrapMailProvider
);

const createUsersController = new CreateUserController(createUsersUseCase);

export { createUsersUseCase, createUsersController }