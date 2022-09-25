import { Router } from 'express';

import routerUser from './user.routes';

const routes = Router();

routes.use('/user', routerUser);

export default routes;