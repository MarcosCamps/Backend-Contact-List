import { Router } from 'express';
import { User, allUsers, userDelete } from '../controllers/UserController';

const routerUser = Router();

routerUser.post('/', User);
routerUser.get('/', allUsers);
routerUser.delete('/:id', userDelete);

export default routerUser;