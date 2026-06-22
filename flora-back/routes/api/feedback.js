import { Router } from 'express';
import * as ctrl from '../../controllers/feedbackController.js';
import checkBody from '../../middleware/checkBody.js';
import { createFeedbackSchema } from '../../schemas/feedbackSchemas.js';

const router = Router();

router.get('/', ctrl.getAll);
router.post('/', checkBody(createFeedbackSchema), ctrl.addOne);

export default router;
