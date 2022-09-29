import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class DeleteUserService {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            return
        }

        await this.userRepository.delete(id);
    }
}

