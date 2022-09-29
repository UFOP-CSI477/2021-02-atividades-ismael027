import { DeleteColetasService } from "@modules/Colect/services/DeleteColetasService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export class DeleteColectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteColetasService = container.resolve(DeleteColetasService);

        await deleteColetasService.execute(
            id
        );

        return response.status(201).json();
    }
}
