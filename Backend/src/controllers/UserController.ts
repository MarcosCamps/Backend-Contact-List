import { Request, Response } from 'express';
import { creatingUser, getUser, deletingUser }  from '../services/UserService';

const User = async (req: Request, res: Response) => {
  const user = await creatingUser(req.body);
  return res.status(201).json(user);
};

const allUsers = async (_req: Request, res: Response) => {
  const products = await getUser();
  res.status(200).json(products);
};

const userDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deletingUser(Number(id));
  return res.status(204).end();
};

export { User, allUsers, userDelete };