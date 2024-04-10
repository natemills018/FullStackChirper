import { Router } from 'express';
import clientsRouter from './clients';
import tweetsRouter from './tweets';

// our APi Router
const router = Router();

router.use('/tweets', tweetsRouter);

router.use('/clients', clientsRouter);

export default router;