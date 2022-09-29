import { DeleteItemService } from "@modules/Items/services/DeleteItemService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteItemService = container.resolve(DeleteItemService);

        await deleteItemService.execute(
            id
        );

        return response.status(201).json()
    }
}
