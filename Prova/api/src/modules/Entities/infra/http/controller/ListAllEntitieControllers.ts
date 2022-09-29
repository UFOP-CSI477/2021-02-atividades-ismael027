import { ListAllEntidadeService } from "@modules/Entities/services/ListAllEntidadeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListAllEntitieControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllEntidadeService = container.resolve(ListAllEntidadeService);

        const entidades = await listAllEntidadeService.execute();

        return response.status(201).json(entidades);
    }
}
