import { Request, Response } from 'express';
import theToken from '../helpers/jwt';
import { creatingUser, getUser, login }  from '../services/UserService';

const userCreated = async (req: Request, res: Response) => {
  const user = await creatingUser(req.body);
  const myToken = await theToken.creatingToken(user);
  return res.status(201).json({ token: myToken, id: user.id});
};

const loggedUser = async (req: Request, res: Response) => {
  const [user]= await login(req.body);
  const myToken = await theToken.creatingToken(user);
  return res.status(200).json({token: myToken, id: user.id });
}

const allUsers = async (_req: Request, res: Response) => {
  const products = await getUser();
  res.status(200).json(products);
};

export { userCreated, allUsers, loggedUser };