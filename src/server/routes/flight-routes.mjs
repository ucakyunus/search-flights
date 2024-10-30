import { Router } from 'express';
import { validateFlights, getFlights } from '../controllers/flight-controller.mjs';

const router = Router();

router.get('/validate', validateFlights);
router.get('/', getFlights);

export default router;
