import Joi from 'joi';

export const createFeedbackSchema = Joi.object({
  text: Joi.string().min(5).max(1000).required().messages({
    'string.empty': 'Текст не може бути порожнім',
    'any.required': 'Текст обов\'язковий',
  }),
  author: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Автор не може бути порожнім',
    'any.required': 'Автор обов\'язковий',
  }),
});
