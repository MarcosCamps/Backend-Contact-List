import { Router } from 'express';
import { userCreated, allUsers, loggedUser } from '../controllers/UserController';

const routerUser = Router();

routerUser.post('/', userCreated);
routerUser.post('/login', loggedUser)
routerUser.get('/', allUsers);

export default routerUser;