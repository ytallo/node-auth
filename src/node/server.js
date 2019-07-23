import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import cors from 'cors';
import healthcheck from 'healthcheck-middleware';
import config from './config';
import powerRouter from './config/router';
import './routers/TokenRouter';

const app = express();
const server = createServer(app);

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors({ allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use('/healthcheck', healthcheck());
app.use('/', powerRouter);

const start = () => {
    const port = config.get("PORT") || 8080;
    server.listen(port, () => console.log(`Server started at port ${port}`));
}

export default start;
