import { DeleteEntidadeService } from "@modules/Entities/services/DeleteEntidadeService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteEntitieControllers {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deleteEntidadeService = container.resolve(DeleteEntidadeService);

        await deleteEntidadeService.execute(
            id
        );

        return response.status(201).json();
    }
}
