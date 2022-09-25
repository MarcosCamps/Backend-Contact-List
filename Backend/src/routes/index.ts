import { Router } from 'express';

import routerUser from './user.routes';
import routerContact from './contact.routes';

const routes = Router();

routes.use('/user', routerUser);
routes.use('/contact', routerContact);

export default routes;