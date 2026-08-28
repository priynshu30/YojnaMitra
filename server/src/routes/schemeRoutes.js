import express from 'express';
import { getSchemes, getSchemeDetails, getCategories, getStates } from '../controllers/schemeController.js';

const router = express.Router();

router.get('/', getSchemes);
router.get('/categories', getCategories);
router.get('/states', getStates);
router.get('/:slug', getSchemeDetails);

export default router;
