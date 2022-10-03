import CodeError from '../errors/CodeError';
import { ILoggin } from '../interfaces/ILoggin';
import { IUser } from '../interfaces/IUser';
import { createUser, getAllUsers, logginUser } from '../models/userModel';

const creatingUser = async (user: ILoggin): Promise<ILoggin> => {
  const result = await createUser(user);
  return result;
};

const login = async (user: ILoggin): Promise<ILoggin[]> => {
  const result = await logginUser(user);
  return result as unknown as ILoggin[];
}

const getUser = async () => {
  const users = await getAllUsers();
  return users;
};

export { creatingUser, getUser, login };