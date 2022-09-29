import { ensureAuthenticate } from "@shared/infra/http/middleware/ensureAuthenticated";
import { Router } from "express";
import { CreateColectController } from "../controller/CreateColectController";
import { DeleteColectController } from "../controller/DeleteColectController";
import { FindColectController } from "../controller/FindColectController";
import { ListAllColectController } from "../controller/ListAllColectController";
import { UpdateColectController } from "../controller/UpdateColectController";


const colectRouter = Router();

const createColectControllers = new CreateColectController();
const deleteColectController = new DeleteColectController();
const findColectController = new FindColectController();
const listAllColectController = new ListAllColectController();
const updateColectController = new UpdateColectController();
colectRouter.get('/list', listAllColectController.handle);

colectRouter.use(ensureAuthenticate);
colectRouter.post('/create', createColectControllers.handle);
colectRouter.post('/delete',  deleteColectController.handle);
colectRouter.get('/find',  findColectController.handle);
colectRouter.put('/upload',  updateColectController.handle);

export { colectRouter };
