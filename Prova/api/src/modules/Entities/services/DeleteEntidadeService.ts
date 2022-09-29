
import { IColectRepository } from "@modules/Colect/repositories/IColectRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IEntitieRepository } from "../repositories/IEntitieRepository";

@injectable()
export class DeleteEntidadeService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,

        @inject("EntitieRepository")
        private entitieRepository: IEntitieRepository,
    ) {}
    async execute(id: string): Promise<void> {
        const coletas = await this.colectRepository.findByEntitie(id);

        if(coletas.length > 0){
          throw new AppError('A entidade possui coleta registrada!', undefined, 'Entidade');
        }

        await this.entitieRepository.delete(id);
    }
}
