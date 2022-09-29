import { UpdateUserService } from "@modules/User/services/UpdateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const { id } = request.user;

        const updateUserService = container.resolve(UpdateUserService);

        updateUserService.execute(id, {name, email, password});

        return response.status(201).json();
    }
}
