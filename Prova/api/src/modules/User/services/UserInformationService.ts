
import { inject, injectable } from "tsyringe";
import { Users } from "../infra/typeorm/entities/Users";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class UserInformationService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute(id: string): Promise<Users> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            return
        }

        return user;
    }
}
