import { Router } from 'express';

import MenusController from '../controllers/MenusController';

const menusRouter = Router();

const menuController = new MenusController();

menusRouter.get('/:customer_name', menuController.show);
menusRouter.post('/', menuController.create);
menusRouter.put('/:customer_name', menuController.update);

export default menusRouter;
