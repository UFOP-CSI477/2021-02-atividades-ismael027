
import { inject, injectable } from "tsyringe";
import { ICreateEntitieDTO } from "../dtos/ICreateEntitieDTO ";
import { IEntitieRepository } from "../repositories/IEntitieRepository";

@injectable()
export class UpdateEntidadeService {
    constructor (
      @inject("EntitieRepository")
      private entitieRepository: IEntitieRepository,
    ) {}
    async execute({id, name, estado, bairro, cidade}: ICreateEntitieDTO): Promise<void> {
        const entidade = await this.entitieRepository.findById(id)

        if (!entidade) {
            return;
        }

        if (name) {
            entidade.name = name;
        }
        if (estado) {
            entidade.estado = estado;
        }
        if (bairro) {
            entidade.bairro = bairro;
        }
        if (cidade) {
            entidade.cidade = cidade;
        }

        await this.entitieRepository.update(entidade);
    }
}
