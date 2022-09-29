import { inject, injectable } from "tsyringe";

import { hash } from "bcryptjs";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import AppError from "@shared/errors/AppError";


@injectable()
export class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute({
        name,
        email,
        password
    }: ICreateUsersDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("Usuário já cadastrado!", undefined, "User");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name, email, password: passwordHash
        })
    }

}
