
import { ICreateEntitieDTO } from "@modules/Entities/dtos/ICreateEntitieDTO ";
import { IEntitieRepository } from "@modules/Entities/repositories/IEntitieRepository";
import { getRepository, Repository } from "typeorm";
import { Entities } from "../entities/Entities";


export class EntitiesRepository implements IEntitieRepository {
    private repository: Repository<Entities>;

    constructor() {
        this.repository = getRepository(Entities);
    }
    async create({name, bairro, cidade, estado}: ICreateEntitieDTO): Promise<void> {
        const entidade = this.repository.create({
            name,
            bairro,
            cidade,
            estado
        })

        await this.repository.save(entidade);
    }

    async update(entidade: Entities): Promise<void> {
        await this.repository.save(entidade);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async findById(id: string): Promise<Entities> {
        return this.repository.findOne({ where: {id}});
    }

    async listAll(): Promise<Entities[]> {
        return this.repository.find();
    }
}
