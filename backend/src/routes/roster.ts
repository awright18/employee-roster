import { Router } from 'express';

import {
    getFromRoster,
    addToRoster,
    updateRoster,
    removeFromRoster
} from '../controllers/roster.js';

const router = Router();

router.get('/', getFromRoster);
router.post('/', addToRoster);
router.patch('/', updateRoster);
router.delete('/', removeFromRoster);

export default router;

