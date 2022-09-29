import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticateUserService } from "@modules/User/services/AuthenticateUserService";

export class AuthenticateUserController {
    async handle (request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUserService = container.resolve(AuthenticateUserService);

        const token = await authenticateUserService.execute({
            email, password
        })

        return response.json(token);
    }
}
