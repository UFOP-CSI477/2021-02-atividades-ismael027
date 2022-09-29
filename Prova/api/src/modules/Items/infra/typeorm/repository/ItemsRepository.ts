
import { Items } from '../entities/Items';
import { getRepository, Repository } from "typeorm";
import { IItemsRepository } from '@modules/Items/repositories/IItemsReposiotry';
import { ICreateItemsDTO } from '@modules/Items/dtos/ICreateItemsDTO';

export class ItemsRepository implements IItemsRepository {
    private repository: Repository<Items>;

    constructor() {
        this.repository = getRepository(Items);
    }

    async create({descricao}: ICreateItemsDTO): Promise<void> {
        const item = this.repository.create({
            descricao
        })

        await this.repository.save(item);
    }

    async update(item: Items): Promise<void> {
        await this.repository.save(item);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Items> {
        return this.repository.findOne({where :{ id },
          })};

    async listAll(): Promise<Items[]> {
        return this.repository.find();
    }
}
