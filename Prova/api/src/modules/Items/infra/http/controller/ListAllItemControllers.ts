import { ListAllItemService } from "@modules/Items/services/ListAllItemService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export class ListAllItemController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllItemService = container.resolve(ListAllItemService);

        const items = await listAllItemService.execute();

        return response.status(201).json(items)
    }
}
