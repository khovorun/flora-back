import Joi from 'joi';

export const createPurchaseSchema = Joi.object({
  bouquet: Joi.object({
    id: Joi.number().integer().required(),
    title: Joi.string().required(),
    price: Joi.number().integer().required(),
  }).required(),
  quantity: Joi.number().integer().min(1).required(),
  total: Joi.string().required(),
  customer: Joi.object({
    name: Joi.string().min(2).required(),
    phone: Joi.string().min(7).required(),
    address: Joi.string().min(5).required(),
    comment: Joi.string().allow('').optional(),
  }).required(),
});
