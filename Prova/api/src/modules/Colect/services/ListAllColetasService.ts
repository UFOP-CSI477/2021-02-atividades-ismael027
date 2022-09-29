
import { inject, injectable } from "tsyringe";
import { Colect } from "../infra/typeorm/entities/Colect";
import { IColectRepository } from "../repositories/IColectRepository";

@injectable()
export class ListAllColetasService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,
    ) {}
    async execute(): Promise<Colect[]>{
        const coletas = await this.colectRepository.listAll();

        return coletas;
    }
}
