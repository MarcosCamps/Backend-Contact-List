import { Request, Response } from 'express';
import theToken from '../helpers/jwt';
import { creatingUser, getUser, deletingUser, updatingUser, findedUser }  from '../services/UserService';

const User = async (req: Request, res: Response) => {
  const user = await creatingUser(req.body);
  const myToken = await theToken.creatingToken(user);
  return res.status(201).json({ token: myToken});
};

const returnUser = async (req: Request, res: Response) => {
  const [user]= await findedUser(req.body);
  const myToken = await theToken.creatingToken(user);
  return res.status(200).json({token: myToken, id: user.id });
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