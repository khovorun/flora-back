import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';

import productsRouter from './routes/api/products.js';
import feedbackRouter from './routes/api/feedback.js';
import purchasesRouter from './routes/api/purchases.js';
import notFoundHandler from './middleware/notFoundHandler.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const apiDocs = require('./swagger.json');

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use(express.static(path.resolve(__dirname, 'public')));

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

server.get('/api/health', (req, res) => res.json({ status: 'ok' }));

server.use('/api/bouquets', productsRouter);
server.use('/api/reviews', feedbackRouter);
server.use('/api/orders', purchasesRouter);

server.use(notFoundHandler);
server.use(globalErrorHandler);

export default server;
