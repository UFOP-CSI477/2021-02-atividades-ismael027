
import { ColectRepository } from "@modules/Colect/infra/typeorm/repository/ColectRepository";
import { IColectRepository } from "@modules/Colect/repositories/IColectRepository";
import { EntitiesRepository } from "@modules/Entities/infra/typeorm/repository/EntitiesRepository";
import { IEntitieRepository } from "@modules/Entities/repositories/IEntitieRepository";
import { ItemsRepository } from "@modules/Items/infra/typeorm/repository/ItemsRepository";
import { IItemsRepository } from "@modules/Items/repositories/IItemsReposiotry";
import { UsersRepository } from "@modules/User/infra/typeorm/repository/UsersRepository";
import { IUsersRepository } from "@modules/User/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IEntitieRepository>('EntitieRepository', EntitiesRepository);
container.registerSingleton<IItemsRepository>('ItemsRepository', ItemsRepository);
container.registerSingleton<IColectRepository>('ColectRepository', ColectRepository);
