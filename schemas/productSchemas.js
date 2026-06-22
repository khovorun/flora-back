import Joi from 'joi';

export const createProductSchema = Joi.object({
  title: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Назва не може бути порожньою',
    'any.required': 'Назва обов\'язкова',
  }),
  description: Joi.string().min(5).max(500).required().messages({
    'string.empty': 'Опис не може бути порожнім',
    'any.required': 'Опис обов\'язковий',
  }),
  price: Joi.number().integer().min(0).required().messages({
    'any.required': 'Ціна обов\'язкова',
    'number.base': 'Ціна повинна бути числом',
  }),
  photoURL: Joi.string().uri().optional(),
  favorite: Joi.boolean().optional(),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().min(2).max(100),
  description: Joi.string().min(5).max(500),
  price: Joi.number().integer().min(0),
  photoURL: Joi.string().uri().optional(),
  favorite: Joi.boolean(),
}).min(1).messages({
  'object.min': 'Тіло запиту повинно містити хоча б одне поле',
});

export const patchFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'Поле favorite обов\'язкове',
    'boolean.base': 'Favorite повинно бути булевим значенням',
  }),
});
