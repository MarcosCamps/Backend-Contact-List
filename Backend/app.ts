import express, {Request, Response} from 'express';
import 'express-async-errors';
import routes from './src/routes';

const app = express();

app.use(express.json());
// app.use(cors());
app.use(routes);
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('estou aqui')
// });

export default app;
