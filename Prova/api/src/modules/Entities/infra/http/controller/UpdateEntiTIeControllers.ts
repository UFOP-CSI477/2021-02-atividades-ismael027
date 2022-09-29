import { UpdateEntidadeService } from "@modules/Entities/services/UpdateEntidadeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateEntiTIeControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, estado, bairro, cidade } = request.body;

        const updateEntidadeService = container.resolve(UpdateEntidadeService);

        await updateEntidadeService.execute({
            id, name, estado, bairro, cidade
        });

        return response.status(201).json();
    }
}
