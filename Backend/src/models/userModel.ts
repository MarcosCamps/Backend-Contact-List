import { ResultSetHeader } from 'mysql2';
import { ILoggin } from '../interfaces/ILoggin';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

const createUser = async (user: ILoggin): Promise<ILoggin> => {
  const { userEmail, password } = user;
  const query = `INSERT INTO ContactsManager.Users (id, userEmail, password)
      VALUES
    (NULL, ?, ?);`;
  const value = [ userEmail, password ];
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    value,
  );
  return { id: insertId, ...user };
};

const findUser = async (user: ILoggin) => {
  console.log(findUser)
  const { userEmail, password } = user;
  const query = 'SELECT * from ContactsManager.Users WHERE userEmail=? AND password=?;';
  const value = [ userEmail, password ];
  const [users] = await connection.execute<ResultSetHeader>(query, value);
  return users as unknown as IUser[];
}

const getAllUsers = async () => {
  const query = 'SELECT * from ContactsManager.Users';
  const [users] = await connection.execute<ResultSetHeader>(query);
  return users as unknown as IUser[];
};

const deleteUser = async (id: number) => {
  const queryDelete = 'DELETE FROM ContactsManager.Contacts WHERE userId=?;';
  await connection.execute<ResultSetHeader>(queryDelete, [id]);
  const query = 'DELETE FROM ContactsManager.Users WHERE id=?;';
  await connection.execute<ResultSetHeader>(query, [id]);
}

const updateUser = async (user: IUser, id:number) => {
  const { userEmail } = user;
  const query = `UPDATE ContactsManager.Users SET userEmail=? WHERE id =?;`;
  const value = [ userEmail, id ];
  await connection.execute<ResultSetHeader>(query, value);
}

export { createUser, getAllUsers, deleteUser, updateUser, findUser } ;
