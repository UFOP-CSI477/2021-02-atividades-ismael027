
import { ICreateUsersDTO } from "@modules/User/dtos/ICreateUsersDTO";
import { IUsersRepository } from "@modules/User/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";


export class UsersRepository implements IUsersRepository {
    private repository: Repository<Users>;

    constructor() {
        this.repository = getRepository(Users);
    }

    async create({name, email, password}: ICreateUsersDTO): Promise<void> {
       const user = this.repository.create({
           name,
           email,
           password,
       })

       await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<Users> {
        return this.repository.findOne({where: {email}});
    }
    async findById(id: string): Promise<Users> {
        return this.repository.findOne({where: {id}});
    }
    async update(user: Users): Promise<void> {
        await this.repository.save(user);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

