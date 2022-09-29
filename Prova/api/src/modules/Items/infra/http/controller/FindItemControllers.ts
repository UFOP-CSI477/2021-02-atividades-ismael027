import { FindItemService } from "@modules/Items/services/FindItemService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FindItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findItemService = container.resolve(FindItemService);

        const item = await findItemService.execute(id);

        return response.status(201).json(item)
    }
}
