import express from 'express';
import 'express-async-errors';
import routes from './routes';
import cors from 'cors';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(errorMiddleware)


export default app;
