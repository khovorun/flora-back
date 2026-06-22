import * as feedbackService from '../services/feedbackService.js';

export const getAll = async (req, res, next) => {
  try {
    const items = await feedbackService.findAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const addOne = async (req, res, next) => {
  try {
    const item = await feedbackService.createOne(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};
