import express from 'express';
const router = express.Router();
import tagCtrl from '../../controllers/tags.js';

router.post('/', tagCtrl.create);
router.get('/', tagCtrl.index);

export default router

