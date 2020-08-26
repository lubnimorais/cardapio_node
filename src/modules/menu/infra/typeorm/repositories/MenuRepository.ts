import { getMongoRepository, MongoRepository } from 'typeorm';

import IMenuRepository from 'modules/menu/repositories/IMenuRepository';
import ICreateMenuDTO from 'modules/menu/dtos/ICreateMenuDTO';
import Menu from '../schemas/Menu';

class MenuRepository implements IMenuRepository {
    private ormRepository: MongoRepository<Menu>;

    constructor() {
        this.ormRepository = getMongoRepository(Menu, 'mongo');
    }

    public async findMenuByCustomer(
        customer_name: string,
    ): Promise<Menu | undefined> {
        const menu = await this.ormRepository.findOne({
            where: { customer_name },
        });

        return menu;
    }

    public async create({
        customer_name,
        categories,
        products,
        extra_products,
    }: ICreateMenuDTO): Promise<Menu> {
        const menu = this.ormRepository.create({
            customer_name,
            categories,
            products,
            extra_products,
        });

        await this.ormRepository.save(menu);

        return menu;
    }

    public async save(menu: Menu): Promise<Menu> {
        return this.ormRepository.save(menu);
    }
}

export default MenuRepository;
