import { colectRouter } from "@modules/Colect/infra/http/routes/colect.routes";
import { entitieRouter } from "@modules/Entities/infra/http/routes/entities.routes";
import { itemsRouter } from "@modules/Items/infra/http/routes/items.routes";
import { usersRoutes } from "@modules/User/infra/http/routes/users.routes";
import { Router } from "express";

const router = Router();

router.use('/colect', colectRouter);
router.use('/entitie', entitieRouter);
router.use('/items', itemsRouter);
router.use('/user', usersRoutes);

export default router;
