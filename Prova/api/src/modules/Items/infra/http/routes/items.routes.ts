import { ensureAuthenticate } from "@shared/infra/http/middleware/ensureAuthenticated";
import { Router } from "express";
import { CreateItemController } from "../controller/CreateItemControllers";
import { DeleteItemController } from "../controller/DeleteItemControllers";
import { FindItemController } from "../controller/FindItemControllers";
import { ListAllItemController } from "../controller/ListAllItemControllers";
import { UpdateItemController } from "../controller/UpdateItemControllers";


const itemsRouter = Router();

const createItemController = new CreateItemController();
const deleteItemController = new DeleteItemController();
const updateItemController = new UpdateItemController();
const listAllItemController = new ListAllItemController();
const findItemController = new FindItemController();
itemsRouter.get('/list', listAllItemController.handle);

itemsRouter.use(ensureAuthenticate);

itemsRouter.post('/create',  createItemController.handle);
itemsRouter.post('/delete',  deleteItemController.handle);
itemsRouter.get('/find',  findItemController.handle);
itemsRouter.put('/update',  updateItemController.handle);

export { itemsRouter };
