import { UserInformationService } from '@modules/User/services/UserInformationService';
import { Request, Response} from 'express';
import { container } from 'tsyringe';

export class UserInformationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const userInformationService = container.resolve(UserInformationService);

        const user = await userInformationService.execute(id);

        return response.json(user);
    }
}
