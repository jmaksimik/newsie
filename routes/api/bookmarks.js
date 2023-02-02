import express from 'express';
const router = express.Router();
import bookmarksCtrl from '../../controllers/bookmarks.js';

router.post('/', bookmarksCtrl.create);

export default router