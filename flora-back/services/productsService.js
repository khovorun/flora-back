import Product from '../models/Product.js';
import AppError from '../helpers/AppError.js';

export const findAll = async (filter = {}, options = {}) => {
  const where = {};
  if (filter.favorite !== undefined) {
    where.favorite = filter.favorite;
  }

  const { page = 1, limit = 8 } = options;
  const offset = (page - 1) * limit;

  return Product.findAll({
    where,
    order: [['createdAt', 'DESC']],
    limit,
    offset,
  });
};

export const findById = async (id) => {
  const item = await Product.findByPk(id);
  if (!item) throw new AppError(404, 'Not found');
  return item;
};

export const createOne = async (data) => {
  return Product.create(data);
};

export const updateOne = async (id, data) => {
  const item = await Product.findByPk(id);
  if (!item) throw new AppError(404, 'Not found');
  await item.update(data);
  return item;
};

export const removeOne = async (id) => {
  const item = await Product.findByPk(id);
  if (!item) throw new AppError(404, 'Not found');
  await item.destroy();
  return item;
};

export const setFavorite = async (id, data) => {
  const item = await Product.findByPk(id);
  if (!item) throw new AppError(404, 'Not found');
  await item.update({ favorite: data.favorite });
  return item;
};

export const setPhoto = async (id, photoURL) => {
  const item = await Product.findByPk(id);
  if (!item) throw new AppError(404, 'Not found');
  await item.update({ photoURL });
  return item;
};
