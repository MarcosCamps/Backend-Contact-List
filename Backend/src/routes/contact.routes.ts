import { Router } from 'express';
import { contacts, allContacts, contactDelete, contactUpdate, contactsById } from '../controllers/ContactController';

const routerContact = Router();

routerContact.post('/', contacts);
routerContact.get('/', allContacts);
routerContact.get('/:id', contactsById)
routerContact.delete('/:id', contactDelete);
routerContact.put('/:id', contactUpdate)

export default routerContact;