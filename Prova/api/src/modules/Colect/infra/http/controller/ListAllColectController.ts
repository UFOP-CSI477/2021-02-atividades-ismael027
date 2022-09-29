import { ListAllColetasService } from "@modules/Colect/services/ListAllColetasService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListAllColectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateColetasService = container.resolve(ListAllColetasService);

        const coletas = await updateColetasService.execute();

        return response.status(201).json(coletas);
    }
}
