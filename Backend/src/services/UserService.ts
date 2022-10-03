import CodeError from '../errors/CodeError';
import { ILoggin } from '../interfaces/ILoggin';
import { IUser } from '../interfaces/IUser';
import { createUser, getAllUsers, deleteUser, updateUser, findUser } from '../models/userModel';

const creatingUser = async (user: ILoggin): Promise<ILoggin> => {
  const result = await createUser(user);
  return result;
};

const findedUser = async (user: ILoggin): Promise<ILoggin[]> => {
  const result = await findUser(user);
  return result as unknown as ILoggin[];
}

const getUser = async () => {
  const users = await getAllUsers();
  return users;
};

const deletingUser = async (id: number) => {
  const users = await getAllUsers();
    const exists = users.some((user) => user.id === id)
    if (!exists) {
      throw new CodeError('User not found', 404);
    }
  const userDelete = await deleteUser(id);
  return userDelete;
}

const updatingUser = async (user: IUser, id: number) => {
  const users = await getAllUsers();
    const exists = users.some((user) => user.id === id)
    if (!exists) {
      throw new CodeError('User not found', 404);
    }
  const userUpdate = await updateUser(user, id);
  return userUpdate;
}

export { creatingUser, getUser, deletingUser, updatingUser, findedUser };