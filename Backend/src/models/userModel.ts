import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

const createUser = async (user: IUser) => {
  const { username } = user;
  const query = `INSERT INTO ContactsManager.Users (username)
      VALUES
    (?);`;
  const value = [ username ];
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    value,
  );
  return { id: insertId, ...user };
};

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
  const { username } = user;
  const query = `UPDATE ContactsManager.Users SET username=? WHERE id =?;`;
  const value = [ username, id ];
  await connection.execute<ResultSetHeader>(query, value);
}

export { createUser, getAllUsers, deleteUser, updateUser } ;
