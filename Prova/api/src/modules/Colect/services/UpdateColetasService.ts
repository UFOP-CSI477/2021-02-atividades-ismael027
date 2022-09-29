
import { IEntitieRepository } from "@modules/Entities/repositories/IEntitieRepository";
import { IItemsRepository } from "@modules/Items/repositories/IItemsReposiotry";
import { inject, injectable } from "tsyringe";
import { ICreateColectDTO } from "../dtos/ICreateColectDTO";
import { IColectRepository } from "../repositories/IColectRepository";

@injectable()
export class UpdateColectService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

        @inject("EntitieRepository")
        private entitiesRepository: IEntitieRepository,
    ) {}
    async execute({id, entidade_id, item_id, data, quantidade}: ICreateColectDTO) {
        const coleta = await this.colectRepository.findById(id);

        if (!coleta) {
            return
        }

        if (entidade_id) {
            const entidade = await this.entitiesRepository.findById(entidade_id);

            if (!entidade) {
                return
            }

            coleta.entidade_id = entidade_id;
        }

        if (item_id) {
            const item = await this.itemsRepository.findById(item_id);

            if (!item) {
                return
            }

            coleta.item_id = item_id;
        }

        if (data) {
            coleta.data = data;
        }

        if (quantidade) {
            coleta.quantidade = quantidade;
        }

        await this.colectRepository.update(coleta);
    }
}
