import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IColectRepository } from "../repositories/IColectRepository";

@injectable()
export class DeleteColetasService {
    constructor (
        @inject("ColectRepository")
        private colectRepository: IColectRepository,
    ) {}
    async execute(id: string): Promise<void> {
        const coleta = await this.colectRepository.findById(id);

        if(!coleta) {
            throw new AppError('Não existe coleta cadastrada!', undefined, 'Colect');
        }

        await this.colectRepository.delete(id);
    }
}
