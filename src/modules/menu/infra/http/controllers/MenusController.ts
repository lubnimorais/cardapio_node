import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateMenuService from '../../../services/CreateMenuService';
import ListMenuByCustomerService from '../../../services/ListMenuByCustomerService';
import UpdateMenuService from '../../../services/UpdateMenuService';

export default class MenusController {
    public async show(request: Request, response: Response): Promise<Response> {
        const { customer_name } = request.params;

        const listMenuByCustomer = container.resolve(ListMenuByCustomerService);

        const menu = await listMenuByCustomer.execute(customer_name);

        return response.json(menu);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            customer_name,
            categories,
            products,
            extra_products,
        } = request.body;

        const menuService = container.resolve(CreateMenuService);

        const menu = await menuService.execute({
            customer_name,
            categories,
            products,
            extra_products,
        });

        return response.json(menu);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { customer_name } = request.params;
        const { categories, products, extra_products } = request.body;

        const updateService = container.resolve(UpdateMenuService);

        const menu = await updateService.execute({
            customer_name,
            categories,
            products,
            extra_products,
        });

        return response.json(menu);
    }
}
