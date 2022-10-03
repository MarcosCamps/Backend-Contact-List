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

const logginUser = async (user: ILoggin) => {
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

export { createUser, getAllUsers, logginUser } ;
