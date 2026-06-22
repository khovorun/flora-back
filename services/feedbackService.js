import Feedback from '../models/Feedback.js';

export const findAll = async () => {
  return Feedback.findAll({ order: [['createdAt', 'DESC']] });
};

export const createOne = async (data) => {
  return Feedback.create(data);
};
