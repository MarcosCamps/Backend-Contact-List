import app from './app';

const PORT = 3020;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: http://localhost:${PORT}`,
));

export default server;
