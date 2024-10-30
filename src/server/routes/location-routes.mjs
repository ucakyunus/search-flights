import { Router } from 'express';
import { getLocations } from '../controllers/location-controller.mjs';

const router = Router();

router.get('/', getLocations);

export default router;
