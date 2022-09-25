import { IUser } from '../interfaces/IUser';
import { createUser, getAllUsers, deleteUser } from '../models/userModel';

const creatingUser = async (user: IUser): Promise<IUser> => {
  const result = await createUser(user);
  return result;
};

const getUser = async () => {
  const users = await getAllUsers();
  return users;
};

const deletingUser = async (id: number) => {
  const userDelete = await deleteUser(id);
  return userDelete;
}

export { creatingUser, getUser, deletingUser };