
import { inject, injectable } from "tsyringe";
import { Colect } from "../infra/typeorm/entities/Colect";
import { IColectRepository } from "../repositories/IColectRepository";

@injectable()
export class FindColetasService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,
    ) {}
    async execute(id: string): Promise<Colect> {
        const coleta = await this.colectRepository.findById(id);

        if(!coleta) {
            return
        }

        return coleta;
    }
}
