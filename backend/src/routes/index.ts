import { Router } from 'express';
import { router as linksRouter } from './links';
import { router as usersRouter } from './users';

const router = Router();

router.use('/links', linksRouter);
router.use('/users', usersRouter);

export { router };