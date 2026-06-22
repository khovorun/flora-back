import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import AppError from '../helpers/AppError.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tmpDir = path.resolve(path.join(__dirname, '../../temp'));

const diskStorage = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|webp|gif/;
  const valid = allowed.test(path.extname(file.originalname).toLowerCase());
  if (valid) {
    cb(null, true);
  } else {
    cb(new AppError(400, 'Дозволені лише зображення (jpeg, jpg, png, webp, gif)'));
  }
};

const fileUpload = multer({
  storage: diskStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default fileUpload;
