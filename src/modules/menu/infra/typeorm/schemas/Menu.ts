import {
    ObjectID,
    Entity,
    ObjectIdColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('menus')
class Menu {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    customer_name: string;

    @Column()
    categories: string;

    @Column()
    products: string;

    @Column()
    extra_products: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Menu;
