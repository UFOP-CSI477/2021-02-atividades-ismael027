
import { inject, injectable } from "tsyringe";
import { Entities } from "../infra/typeorm/entities/Entities";
import { IEntitieRepository } from "../repositories/IEntitieRepository";

@injectable()
export class FindEntidadeService {
    constructor (
      @inject("EntitieRepository")
      private entitieRepository: IEntitieRepository,
    ) {}
    async execute(id: string): Promise<Entities> {
        const entidade = await this.entitieRepository.findById(id);

        return entidade;
    }
}
