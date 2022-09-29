import { UpdateItemService } from "@modules/Items/services/UpdateItemService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, descricao } = request.body;

        const updateItemService = container.resolve(UpdateItemService);

        await updateItemService.execute({
            id,
            descricao
        });

        return response.status(201).json()
    }
}
