import { Router } from 'express';
import { User, allUsers, userDelete, userUpdate, returnUser } from '../controllers/UserController';

const routerUser = Router();

routerUser.post('/', User);
routerUser.post('/login', returnUser)
routerUser.get('/', allUsers);
routerUser.delete('/:id', userDelete);
routerUser.put('/:id', userUpdate)

export default routerUser;