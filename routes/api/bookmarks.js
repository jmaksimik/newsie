import express from 'express';
const router = express.Router();
import bookmarksCtrl from '../../controllers/bookmarks.js';

router.post('/', bookmarksCtrl.create);
router.get('/', bookmarksCtrl.index);
router.delete('/:id', bookmarksCtrl.deleteBookmark);

export default router