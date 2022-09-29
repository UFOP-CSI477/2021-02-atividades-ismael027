import { UpdateColectService } from "@modules/Colect/services/UpdateColetasService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateColectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, entidade_id, item_id, data, quantidade } = request.body;

        const updateColetasService = container.resolve(UpdateColectService);

        await updateColetasService.execute({
            id, entidade_id, item_id, data, quantidade
        });

        return response.status(201).json();
    }
}
