import { app } from './main';

import helmet from 'helmet';
import compression = require('compression');
import morgan = require('morgan');

app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server started at http://localhost:${port}`);
});
