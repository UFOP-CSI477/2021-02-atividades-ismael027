import { FindColetasService } from "@modules/Colect/services/FindColetasService";
import { Request, Response } from "express";
import { container } from "tsyringe";



export class FindColectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const findColetasService = container.resolve(FindColetasService);

        const coleta = await findColetasService.execute(
            id
        );

        return response.status(201).json(coleta);
    }
}
