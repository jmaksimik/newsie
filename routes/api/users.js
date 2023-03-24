import express from 'express';
const router = express.Router();
import usersCtrl  from '../../controllers/users.js';

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.put('/update', usersCtrl.update);


/*---------- Protected Routes ----------*/




export default router;