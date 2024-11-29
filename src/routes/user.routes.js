import { Router } from "express";
const router = Router();

import * as userCtrl from '../controllers/user.controller.js';


//establecer ruta products mediante el metodo GET
router.get('/:userId', userCtrl.getUserById);

router.delete('/:userId', userCtrl.deleteUserById);



export default router;