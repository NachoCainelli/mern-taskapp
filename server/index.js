import express from 'express';
import cors from "cors";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import {PORT} from './config.js';

import indexRoutes from './routes/index.routes.js';
import routes from './routes/tasks.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(routes);


app.listen(PORT);
console.log(`Server running on port ${PORT}`);
