import { DeleteUserService } from "@modules/User/services/DeleteUserService";
import { Request, Response} from "express";
import { container } from "tsyringe";

export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const deleteUserService = container.resolve(DeleteUserService);

        await deleteUserService.execute(id);

        return response.status(201).json();
    }
}

