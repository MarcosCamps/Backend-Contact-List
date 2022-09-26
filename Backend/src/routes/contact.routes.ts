import { Router } from 'express';
import { Contacts, allContacts, contactDelete, contactUpdate } from '../controllers/ContactController';

const routerContact = Router();

routerContact.post('/', Contacts);
routerContact.get('/', allContacts);
routerContact.delete('/:id', contactDelete);
routerContact.put('/:id', contactUpdate)

export default routerContact;