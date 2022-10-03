import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

const createContact = async (userContact: IUser) => {
  const { userId, name, email, telephone, whatsapp } = userContact;
  const query = `INSERT INTO ContactsManager.Contacts (id, userId, name, email, telephone, whatsapp)
  VALUES
(NULL, ?, ?, ?, ?, ?);`;
const value = [ userId, name || null, email || null , telephone || null , whatsapp || null  ];
const result = await connection.execute<ResultSetHeader>(
  query,
  value,
);
return result;
};

const getAllContacts = async () => {
  const query = 'SELECT * from ContactsManager.Contacts;';
  const [users] = await connection.execute<ResultSetHeader>(query);
  return users as unknown as IUser[];
};

const getAllContactsById = async (id: number) => {
  const query = 'SELECT * from ContactsManager.Contacts  WHERE userId=? ORDER BY name;';
  const [users] = await connection.execute<ResultSetHeader>(query, [id]);
  return users as unknown as IUser[];
};

const deleteContact = async (id: number) => {
  const query = 'DELETE FROM ContactsManager.Contacts WHERE id=?;';
  await connection.execute<ResultSetHeader>(query, [id]);
}

const updateContact = async (user: IUser, id:number) => {
  const { name, email, telephone, whatsapp } = user;
  const query = `UPDATE ContactsManager.Contacts SET name=?, email=?, telephone=?, whatsapp=? WHERE id =?;`;
  const value = [name || null, email || null , telephone || null , whatsapp || null, id ];
  await connection.execute<ResultSetHeader>(query, value);
  return true;
}

export { createContact, getAllContacts, deleteContact, updateContact, getAllContactsById };