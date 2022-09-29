
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
    name?: string;
    email?: string;
    password?: string;
}

@injectable()
export class UpdateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(id: string, {name, email, password}: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(id);

        if(!user) {
            return
        }

        if (email) {
            const emailAlready = await this.usersRepository.findByEmail(email);

            if (emailAlready) {
                return
            }

            user.email = email;
        }

        if (password) {
            const passwordHash = await hash(password, 8);

            user.password = passwordHash;
        }

        if (name) {
            user.name = name;
        }

        await this.usersRepository.update(user);
    }
}
