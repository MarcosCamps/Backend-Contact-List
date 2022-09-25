import { IUser } from '../interfaces/IUser';
import { createContact, getAllContacts, deleteContact } from '../models/contactModel';

const creatingContacts = async (userContact: IUser): Promise<IUser> => {
    const { userId } = userContact;
    if (!userId) {
      throw new Error('UserId not informed');
    }
    const result = await createContact(userContact);
    return result;
  };

  const getContacts = async () => {
    const users = await getAllContacts();
    return users;
  };

  const deletingContact = async (id: number) => {
    const userDelete = await deleteContact(id);
    return userDelete;
  }

  export { creatingContacts, getContacts, deletingContact };