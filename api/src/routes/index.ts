import { Router } from 'express';
import usersRouter from './users.routes';
import sensorsRouter from './sensors.routes';
import measurementsRouter from './measurements.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sensors', sensorsRouter);
routes.use('/measurements', measurementsRouter);

export default routes;
