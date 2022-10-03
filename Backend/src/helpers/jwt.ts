import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { ILoggin } from '../interfaces/ILoggin';
import CodeError from '../errors/CodeError';

const secret = process.env.JWT_SECRET || 'secret';

export default class theToken {
  static async creatingToken(body: ILoggin) {
    console.log('creatingToken');
    console.log(body);
    const token = jwt.sign(body, secret);
    console.log(token);
    return token;
  }

  static rToken(token:string) {
    const isValid = jwt.verify(token, secret);
    if (!isValid) throw new CodeError('Token must be a valid token', 401);
    return isValid;
  }
}