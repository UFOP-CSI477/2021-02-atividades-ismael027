import { CreateColetasService } from "@modules/Colect/services/CreateColetasUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateColectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { entidade_id, item_id, data, quantidade } = request.body;

        const createColetasService = container.resolve(CreateColetasService);

        await createColetasService.execute({
            entidade_id, item_id, data, quantidade
        });

        return response.status(201).json();
    }
}
