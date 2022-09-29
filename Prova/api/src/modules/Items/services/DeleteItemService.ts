
import { IColectRepository } from "@modules/Colect/repositories/IColectRepository";
import { inject, injectable } from "tsyringe";
import { IItemsRepository } from "../repositories/IItemsReposiotry";

@injectable()
export class DeleteItemService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,

        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,
    ) {}
    async execute(id: string): Promise<void> {
        const coletas = await this.colectRepository.findByItem(id);

        for(const coleta of coletas) {
            await this.colectRepository.delete(coleta.id);
        }

        await this.itemsRepository.delete(id);
    }
}
