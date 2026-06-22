import { Router } from 'express';
import * as ctrl from '../../controllers/productsController.js';
import checkBody from '../../middleware/checkBody.js';
import fileUpload from '../../middleware/fileUpload.js';
import {
  createProductSchema,
  updateProductSchema,
  patchFavoriteSchema,
} from '../../schemas/productSchemas.js';

const router = Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', checkBody(createProductSchema), ctrl.addOne);
router.put('/:id', checkBody(updateProductSchema), ctrl.editOne);
router.delete('/:id', ctrl.removeOne);
router.patch('/:id/favorite', checkBody(patchFavoriteSchema), ctrl.toggleFavorite);
router.patch('/:id/photo', fileUpload.single('photo'), ctrl.uploadPhoto);

export default router;
