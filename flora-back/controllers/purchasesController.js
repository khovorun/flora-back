import * as purchasesService from '../services/purchasesService.js';

export const getAll = async (req, res, next) => {
  try {
    const items = await purchasesService.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const addOne = async (req, res, next) => {
  try {
    const { bouquet, quantity, total, customer } = req.body;

    const item = await purchasesService.createOne({
      bouquetId: bouquet.id,
      bouquetTitle: bouquet.title,
      bouquetPrice: bouquet.price,
      quantity,
      total,
      customerName: customer.name,
      customerPhone: customer.phone,
      customerAddress: customer.address,
      customerComment: customer.comment ?? '',
    });

    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};
