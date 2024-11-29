import { Router } from "express";
const router = Router();

import * as cisternaCtrl from '../controllers/cisterna.controller.js';


//establecer ruta products mediante el metodo GET
router.get('/', cisternaCtrl.getCisternas);

router.post('/', cisternaCtrl.createCisterna);

router.get('/:cisternaId',cisternaCtrl.getCisternaById);

router.put('/:cisternaId',cisternaCtrl.updateCisternaById);

router.delete('/:cisternaId',cisternaCtrl.deleteCisternaById);

export default router;