
import { inject, injectable } from "tsyringe";
import { Items } from "../infra/typeorm/entities/Items";
import { IItemsRepository } from "../repositories/IItemsReposiotry";

@injectable()
export class FindItemService {
    constructor (
        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,

    ) {}
    async execute(id: string): Promise<Items> {
        const item = await this.itemsRepository.findById(id);

        return item;
    }
}
