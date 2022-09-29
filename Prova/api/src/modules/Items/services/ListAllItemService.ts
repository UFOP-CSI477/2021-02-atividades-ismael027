
import { inject, injectable } from "tsyringe";
import { Items } from "../infra/typeorm/entities/Items";
import { IItemsRepository } from "../repositories/IItemsReposiotry";

@injectable()
export class ListAllItemService {
    constructor (
        @inject("ItemsRepository")
        private itemsRepository: IItemsRepository,
    ) {}
    async execute(): Promise<Items[]> {
        const items = await this.itemsRepository.listAll()

        items.sort((a, b) => {
          if (a.descricao < b.descricao) {
            return -1;
          }
          if (a.descricao > b.descricao) {
            return 1;
          }
          return 0;
        });

        return items;
    }
}
