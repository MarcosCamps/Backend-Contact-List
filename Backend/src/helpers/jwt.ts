// import jwt from 'jsonwebtoken';
// import 'dotenv/config';
// import { ILoggin } from '../interfaces/ILoggin';
// import CodeError from '../errors/CodeError';

// const secret = process.env.JWT_SECRET || 'secret';

// export default class Token {
//   static async creatingToken(body: ILoggin) {
//     const token = jwt.sign(body, secret);
//     return token;
//   }

//   static rToken(token:string) {
//     const isValid = jwt.verify(token, secret);
//     if (!isValid) throw new CodeError('Token must be a valid token', 401);
//     return isValid;
//   }
// }