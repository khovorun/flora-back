import Purchase from '../models/Purchase.js';

export const findAll = async () => {
  return Purchase.findAll({ order: [['createdAt', 'DESC']] });
};

export const createOne = async (data) => {
  return Purchase.create(data);
};
