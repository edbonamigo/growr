import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

interface UserResponse {
  password?: string;
}

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user: UserResponse = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.json(user);
});

export default usersRouter;
