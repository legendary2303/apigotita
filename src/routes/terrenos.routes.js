import { Router } from "express";
const router = Router();

import * as terrenosCtrl from '../controllers/terrenos.controller.js';


//establecer ruta products mediante el metodo GET
router.get('/', terrenosCtrl.getTerrenos);

router.post('/', terrenosCtrl.createTerreno);

router.get('/:terrenoId',terrenosCtrl.getTerrenoById);

router.get('/usuario/:userId',terrenosCtrl.getTerrenosByUser);

router.put('/:terrenoId',terrenosCtrl.updateTerrenoById);

router.delete('/:terrenoId',terrenosCtrl.deleteTerrenoById);

router.get('/calcular/:terrenoId',terrenosCtrl.calcularTerreno);

export default router;