import { ICreateEntitieDTO } from "../dtos/ICreateEntitieDTO ";
import { Entities } from "../infra/typeorm/entities/Entities";

export interface IEntitieRepository {
    create(data: ICreateEntitieDTO): Promise<void>;
    update(entidade: Entities): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Entities>;
    listAll(): Promise<Entities[]>;
}
