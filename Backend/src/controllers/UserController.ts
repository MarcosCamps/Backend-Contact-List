import { Request, Response } from 'express';
import { creatingUser, getUser, deletingUser, updatingUser, findedUser }  from '../services/UserService';

const User = async (req: Request, res: Response) => {
  const user = await creatingUser(req.body);
  return res.status(201).json(user);
};

const returnUser = async (req: Request, res: Response) => {
   await findedUser(req.body);
  return res.status(200).json({token: 'true'});
}

const allUsers = async (_req: Request, res: Response) => {
  const products = await getUser();
  res.status(200).json(products);
};

const userDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deletingUser(Number(id));
  return res.status(204).end();
};

const userUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateU = await updatingUser(req.body, Number(id));
  return res.status(200).json(updateU);
}

export { User, allUsers, userDelete, userUpdate, returnUser };