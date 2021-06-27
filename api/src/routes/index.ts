import { Router } from 'express';
import sensorsRouter from './sensors.routes';
import measurementsRouter from './measurements.routes';

const routes = Router();

routes.use('/sensors', sensorsRouter);
routes.use('/measurements', measurementsRouter);

export default routes;
