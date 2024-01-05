import express from 'express';
import { updateAccept, updateAcceptToCollabUser, updateDeny, updateDenyToCollabUser } from '../Controller/adminController.js';

export const adminRoute = express.Router();
adminRoute.put('/update/accept/foodpending/:mama', updateAcceptToCollabUser);

adminRoute.put('/update/deny/foodpending/:mama', updateDenyToCollabUser);

adminRoute.put('/update/deny/collabpending/:macb', updateDeny)

adminRoute.put('/update/accept/collabpending/:macb', updateAccept)
