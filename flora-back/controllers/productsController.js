import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import gravatar from 'gravatar';
import { v4 as uuidv4 } from 'uuid';
import * as productsService from '../services/productsService.js';
import AppError from '../helpers/AppError.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAll = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.favorite !== undefined) {
      filter.favorite = req.query.favorite === 'true';
    }

    const { _page = 1, _limit = 8 } = req.query;

    const items = await productsService.findAll(filter, {
      page: parseInt(_page, 10),
      limit: parseInt(_limit, 10),
    });

    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const item = await productsService.findById(req.params.id);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const addOne = async (req, res, next) => {
  try {
    const { title, description, price, favorite } = req.body;

    const photoURL = gravatar.url(
      `${title}${Date.now()}`,
      { s: '300', d: 'retro', r: 'pg' },
      true
    );

    const item = await productsService.createOne({
      title,
      description,
      price,
      favorite: favorite ?? false,
      photoURL,
    });

    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

export const editOne = async (req, res, next) => {
  try {
    const item = await productsService.updateOne(req.params.id, req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const removeOne = async (req, res, next) => {
  try {
    const item = await productsService.removeOne(req.params.id);
    res.json({ message: 'Букет видалено', id: item.id });
  } catch (err) {
    next(err);
  }
};

export const toggleFavorite = async (req, res, next) => {
  try {
    const item = await productsService.setFavorite(req.params.id, req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const uploadPhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new AppError(400, 'Файл зображення обов\'язковий'));
    }

    const { path: tmpPath, originalname } = req.file;
    const ext = path.extname(originalname);
    const uniqueName = `${uuidv4()}${ext}`;
    const photosDir = path.resolve(path.join(__dirname, '../../public/photos'));
    const destPath = path.join(photosDir, uniqueName);

    await fs.rename(tmpPath, destPath);

    const photoURL = `/photos/${uniqueName}`;
    const item = await productsService.setPhoto(req.params.id, photoURL);
    res.json(item);
  } catch (err) {
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(err);
  }
};
