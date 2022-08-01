import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositoy";

export class PostgreUsersRepository implements IUsersRepository {

    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        return await this.users.find(user => user.email === email);
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}