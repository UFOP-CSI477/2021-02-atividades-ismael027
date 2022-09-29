import { ensureAuthenticate } from "@shared/infra/http/middleware/ensureAuthenticated";
import { Router } from "express";
import { CreateEntitieControllerS } from "../controller/CreateEntitieControllers";
import { DeleteEntitieControllers } from "../controller/DeleteEntitieControllers";
import { FindEntitieControllers } from "../controller/FindEntitieControllers";
import { ListAllEntitieControllers } from "../controller/ListAllEntitieControllers";
import { UpdateEntiTIeControllers } from "../controller/UpdateEntiTIeControllers";

const entitieRouter = Router();

const createEntitieController = new CreateEntitieControllerS();
const deleteEntitieController = new DeleteEntitieControllers();
const updateEntitieController = new UpdateEntiTIeControllers();
const listAllEntitieController = new ListAllEntitieControllers();
const findEntitieController = new FindEntitieControllers();

entitieRouter.get('/list', listAllEntitieController.handle);

entitieRouter.use(ensureAuthenticate);
entitieRouter.post('/create',  createEntitieController.handle);
entitieRouter.post('/delete',  deleteEntitieController.handle);
entitieRouter.get('/find',  findEntitieController.handle);
entitieRouter.put('/update',  updateEntitieController.handle);

export { entitieRouter };
