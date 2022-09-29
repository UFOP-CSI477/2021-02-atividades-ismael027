import { FindEntidadeService } from "@modules/Entities/services/FindEntidadeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FindEntitieControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findEntidadeService = container.resolve(FindEntidadeService);

        const entidade = await findEntidadeService.execute(id);

        return response.status(201).json(entidade);
    }
}
