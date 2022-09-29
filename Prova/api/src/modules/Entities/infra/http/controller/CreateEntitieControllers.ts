import { CreateEntidadeService } from "@modules/Entities/services/CreateEntidadeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateEntitieControllerS {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, estado, bairro, cidade } = request.body;

        const createEntidadeService = container.resolve(CreateEntidadeService);

        await createEntidadeService.execute({
            name, estado, bairro, cidade
        });

        return response.status(201).json();
    }
}
