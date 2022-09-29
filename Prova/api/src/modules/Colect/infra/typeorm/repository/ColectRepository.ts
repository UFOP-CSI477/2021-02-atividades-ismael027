import { ICreateColectDTO } from "@modules/Colect/dtos/ICreateColectDTO";
import { IColectRepository } from "@modules/Colect/repositories/IColectRepository";

import { getRepository, Repository } from "typeorm";
import { Colect } from "../entities/Colect";


export class ColectRepository implements IColectRepository {
    private repository: Repository<Colect>;

    constructor() {
        this.repository = getRepository(Colect);
    }


    async create({item_id, entidade_id, data, quantidade}: ICreateColectDTO): Promise<void> {
      const coleta = this.repository.create({
          item_id,
          entidade_id,
          data,
          quantidade
      })

      await this.repository.save(coleta);
  }

    async findByEntitie(entidade_id: string): Promise<Colect[]> {
        return await this.repository.find({entidade_id});

    }

    async findByItem(item_id: string): Promise<Colect[]> {
        return this.repository.find({item_id});
    }

    async listAll(): Promise<Colect[]> {
      return this.repository.find()

  }

    async update(colect: Colect): Promise<void> {
        await this.repository.save(colect);
    }


    async findById(id: string): Promise<Colect> {
        return this.repository.findOne({where: {id}});


    }


    async delete(id: string): Promise<void> {
      await this.repository.delete(id);
  }

}
