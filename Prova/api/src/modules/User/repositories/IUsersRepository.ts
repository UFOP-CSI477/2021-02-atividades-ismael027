import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { Users } from "../infra/typeorm/entities/Users";


export interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void>;
    update(user: Users): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Users>;
    findByEmail(email: string): Promise<Users>;
}
