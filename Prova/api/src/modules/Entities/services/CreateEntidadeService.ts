
import { inject, injectable } from "tsyringe";
import { ICreateEntitieDTO } from "../dtos/ICreateEntitieDTO ";
import { IEntitieRepository } from "../repositories/IEntitieRepository";

@injectable()
export class CreateEntidadeService {
    constructor (
        @inject("EntitieRepository")
        private entitieRepository: IEntitieRepository,
    ) {}
    async execute({name, estado, bairro, cidade}: ICreateEntitieDTO): Promise<void> {
        await this.entitieRepository.create({
            name, estado, bairro, cidade
        })
    }
}
