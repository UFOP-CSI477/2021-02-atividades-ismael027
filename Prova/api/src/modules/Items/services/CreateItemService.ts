
import { inject, injectable } from "tsyringe";
import { ICreateItemsDTO } from "../dtos/ICreateItemsDTO";
import { IItemsRepository } from "../repositories/IItemsReposiotry";

@injectable()
export class CreateItemService {
    constructor (
        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,
    ) {}
    async execute({descricao}: ICreateItemsDTO): Promise<void> {
        await this.itemsRepository.create({
           descricao
        })
    }
}
