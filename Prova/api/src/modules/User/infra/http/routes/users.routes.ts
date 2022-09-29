import { ensureAuthenticate } from "@shared/infra/http/middleware/ensureAuthenticated";
import { Router } from  "express";
import { AuthenticateUserController } from "../controller/AuthenticateUserController";
import { CreateUserController } from "../controller/CreateUserController";
import { DeleteUserController } from "../controller/DeleteUserController";
import { UpdateUserController } from "../controller/UpdateUserController";
import { UserInformationController } from "../controller/UserInformationController";


const usersRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const userInformationController = new UserInformationController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post('/create', createUserController.handle);
usersRoutes.post("/sessions", authenticateUserController.handle);

usersRoutes.use(ensureAuthenticate);
usersRoutes.delete("/delete",  deleteUserController.handle)
usersRoutes.put("/update",  updateUserController.handle)
usersRoutes.post("/info",  userInformationController.handle)


export { usersRoutes };

