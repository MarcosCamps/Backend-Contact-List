import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

const createContact = async (userContact: IUser) => {
  const { userId, email, telephone, whatsapp } = userContact;
  console.log(userContact);
  const query = `INSERT INTO ContactsManager.Contacts (userId, email, telephone, whatsapp)
  VALUES
(?, ?, ?, ?);`;
const value = [ userId, email || null , telephone || null , whatsapp || null  ];
const [{ insertId }] = await connection.execute<ResultSetHeader>(
  query,
  value,
);
return { id: insertId, ...userContact };
};

const getAllContacts = async () => {
  const query = 'SELECT * from ContactsManager.Contacts';
  const [users] = await connection.execute<ResultSetHeader>(query);
  return users as unknown as IUser[];
};

const deleteContact = async (id: number) => {
  const query = 'DELETE FROM ContactsManager.Contacts WHERE id=?;';
  await connection.execute<ResultSetHeader>(query, [id]);
}

const updateContact = async (user: IUser, id:number) => {
  const { email, telephone, whatsapp } = user;
  const query = `UPDATE ContactsManager.Contacts SET email=?, telephone=?, whatsapp=? WHERE id =?;`;
  const value = [ email || null , telephone || null , whatsapp || null, id ];
  await connection.execute<ResultSetHeader>(query, value);
}

export { createContact, getAllContacts, deleteContact, updateContact };