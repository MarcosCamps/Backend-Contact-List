import CodeError from '../errors/CodeError';
import { IUser } from '../interfaces/IUser';
import { createContact, getAllContacts, deleteContact, updateContact, getAllContactsById } from '../models/contactModel';

const creatingContacts = async (userContact: IUser): Promise<IUser> => {
    const { userId } = userContact;
    if (!userId) {
      throw new CodeError('UserId not informed', 400);
    }
    const [result] = await createContact(userContact);
    return { id: result.insertId, ...userContact}
  };

  const getContacts = async () => {
    const users = await getAllContacts();
    return users;
  };

  const getContactsById = async (id: number) => {
    const userId = await getAllContactsById(id);
    console.log(userId);
    return userId;
  }

  const deletingContact = async (id: number) => {
    const contacts = await getAllContacts();
    const exists = contacts.some((contact) => contact.id === id)
    if (!exists) {
      throw new CodeError('Contact not found', 404);
    }
    const userDelete = await deleteContact(id);
    return userDelete;
  }

  const updatingContact = async (user: IUser, id: number) => {
    const contacts = await getAllContacts();
    const exists = contacts.some((contact) => contact.id === id)
    if (!exists) {
      throw new CodeError('Contact not found', 404);
    }
    const userUpdate = await updateContact(user, id);
    return userUpdate;
  }

  export { creatingContacts, getContacts, deletingContact, updatingContact, getContactsById };