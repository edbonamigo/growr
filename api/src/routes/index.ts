import { Router } from 'express';
import sensorsRouter from './sensors.routes';

const routes = Router();

routes.use('/sensors', sensorsRouter);

export default routes;
