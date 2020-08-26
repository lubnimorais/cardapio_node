import ICreateMenuDTO from '../dtos/ICreateMenuDTO';
import Menu from '../infra/typeorm/schemas/Menu';

export default interface IMenuRepository {
    findMenuByCustomer(customer_name: string): Promise<Menu | undefined>;
    create(data: ICreateMenuDTO): Promise<Menu>;
    save(menu: Menu): Promise<Menu>;
}
