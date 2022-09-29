
import { Entities } from "@modules/Entities/infra/typeorm/entities/Entities";
import { Items } from "@modules/Items/infra/typeorm/entities/Items";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuidV4 } from "uuid";

@Entity("colect")
export class Colect {
    @PrimaryColumn()
    id: string;

    @Column()
    item_id: string;

    @OneToMany(() => Items, Items.name)
    @JoinColumn({name: "item_id"})
    item: Items;

    @Column()
    entidade_id: string;

    @OneToMany(() => Entities, Entities.name)
    @JoinColumn({name: "entidade_id"})
    entidade: Entities;

    @Column()
    quantidade: Number;

    @Column({ type: "date" })
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
