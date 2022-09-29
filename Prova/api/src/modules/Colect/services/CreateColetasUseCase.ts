
import { IEntitieRepository } from "@modules/Entities/repositories/IEntitieRepository";
import { IItemsRepository } from "@modules/Items/repositories/IItemsReposiotry";
import { inject, injectable } from "tsyringe";
import { ICreateColectDTO } from "../dtos/ICreateColectDTO";
import { IColectRepository } from "../repositories/IColectRepository";

@injectable()
export class CreateColetasService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntitieRepository")
        private entitiesRepository: IEntitieRepository,
    ) {}
    async execute({entidade_id, item_id, data, quantidade}: ICreateColectDTO): Promise<void> {
        const entidade = await this.entitiesRepository.findById(entidade_id);

        if (!entidade) {
            return
        }

        const item = await this.itemsRepository.findById(item_id);

        if (!item) {
            return
        }

        await this.colectRepository.create({
            entidade_id,
            item_id,
            data,
            quantidade
        })

    }
}
