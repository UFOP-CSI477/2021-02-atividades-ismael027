
import { inject, injectable } from "tsyringe";
import { Entities } from "../infra/typeorm/entities/Entities";
import { IEntitieRepository } from "../repositories/IEntitieRepository";

@injectable()
export class ListAllEntidadeService {
    constructor (
      @inject("EntitieRepository")
      private entitieRepository: IEntitieRepository,
    ) {}
    async execute(): Promise<Entities[]> {
        const entidades = await this.entitieRepository.listAll();

        entidades.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

        return entidades;
    }
}
