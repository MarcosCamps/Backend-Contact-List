import { Router } from 'express';
import { Contacts, allContacts, contactDelete } from '../controllers/ContactController';

const routerContact = Router();

routerContact.post('/', Contacts);
routerContact.get('/', allContacts);
routerContact.delete('/:id', contactDelete);

export default routerContact;