import * as express from 'express';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server started at https://localhost:${port}`);
});
