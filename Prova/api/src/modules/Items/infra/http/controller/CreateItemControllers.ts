import { CreateItemService } from "@modules/Items/services/CreateItemService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { descricao } = request.body;

        const createItemService = container.resolve(CreateItemService);

        await createItemService.execute({
            descricao
        });

        return response.status(201).json()
    }
}
