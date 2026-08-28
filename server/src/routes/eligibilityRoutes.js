import express from 'express';
import { checkEligibility } from '../controllers/eligibilityController.js';

const router = express.Router();

router.post('/check', checkEligibility);

export default router;
