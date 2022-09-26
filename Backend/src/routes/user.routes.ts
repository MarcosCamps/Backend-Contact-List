import { Router } from 'express';
import { User, allUsers, userDelete, userUpdate } from '../controllers/UserController';

const routerUser = Router();

routerUser.post('/', User);
routerUser.get('/', allUsers);
routerUser.delete('/:id', userDelete);
routerUser.put('/:id', userUpdate)

export default routerUser;