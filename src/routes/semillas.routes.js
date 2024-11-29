import { Router } from "express";
const router = Router();

import * as semillasCtrl from '../controllers/semillas.controller.js';


//establecer ruta products mediante el metodo GET
router.get('/', semillasCtrl.getSemillas);

router.post('/', semillasCtrl.createSemilla);

router.get('/:semillaId',semillasCtrl.getSemillaById);

router.put('/:semillaId',semillasCtrl.updateSemillaById);

router.delete('/:semillaId',semillasCtrl.deleteSemillaById);



export default router;