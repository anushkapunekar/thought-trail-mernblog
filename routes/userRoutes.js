import express from 'express';
// import {test} from '../controllers/userController.js';
import { test, updateUser , deleteUser , signout , getUser , getUsers} from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyUser.js';

const router  = express.Router();

router.get('/test' , test );
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId' ,verifyToken , deleteUser);
router.post('/signout' , signout);
router.get('/getusers', verifyToken , getUsers);
router.get('/:userId' , getUser);

export default router;