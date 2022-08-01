import { Router } from "express";
import { createUsersController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) => {
    return createUsersController.handle(request, response);
});

export { router }