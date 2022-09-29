import { inject, injectable } from "tsyringe";
import { ICreateItemsDTO } from "../dtos/ICreateItemsDTO";
import { IItemsRepository } from "../repositories/IItemsReposiotry";

@injectable()
export class UpdateItemService {
    constructor (
        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,
    ) {}
    async execute({id, descricao}: ICreateItemsDTO): Promise<void> {
        const item = await this.itemsRepository.findById(id);

        item.descricao = descricao;

        await this.itemsRepository.update(item);
    }
}
