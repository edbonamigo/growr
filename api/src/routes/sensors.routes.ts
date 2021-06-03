import { Router } from 'express';

const sensorsRouter = Router();

sensorsRouter.get('/', (request, response) => {
  return response.json({ message: 'ok' });
});

export default sensorsRouter;
