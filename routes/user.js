import express from 'express'
import {createUSER,getusersdatals,UpdateUser,DeleteUser, getallusers, special} from '../controllers/user.js'
// import { Users } from '../models/users.js';
// import  Router  from 'express';
const router = express.Router();
router.get("/all",getallusers);
router.get("/userID/special",special );
router.post("/new",createUSER);
router.get("/userID/:id",getusersdatals);
router.put("/userID/:id",UpdateUser);
router.delete("/userID/:id",DeleteUser);
export default router