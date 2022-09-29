import { ICreateColectDTO } from "../dtos/ICreateColectDTO";
import { Colect } from "../infra/typeorm/entities/Colect";


export interface IColectRepository {
    create(data: ICreateColectDTO): Promise<void>;
    update(colect: Colect): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Colect>;
    findByEntitie(entitie_id: string): Promise<Colect[]>;
    findByItem(item_id: string): Promise<Colect[]>;
    listAll(): Promise<Colect[]>;
}
