import { ICreateItemsDTO } from "../dtos/ICreateItemsDTO";
import { Items } from "../infra/typeorm/entities/Items";


export interface IItemsRepository {
    create(data: ICreateItemsDTO): Promise<void>;
    update(item: Items): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Items>;
    listAll(): Promise<Items[]>;
}
