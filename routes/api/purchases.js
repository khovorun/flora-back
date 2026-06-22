import { Router } from 'express';
import * as ctrl from '../../controllers/purchasesController.js';
import checkBody from '../../middleware/checkBody.js';
import { createPurchaseSchema } from '../../schemas/purchaseSchemas.js';

const router = Router();

router.get('/', ctrl.getAll);
router.post('/', checkBody(createPurchaseSchema), ctrl.addOne);

export default router;
