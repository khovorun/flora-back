import AppError from '../helpers/AppError.js';

const notFoundHandler = (req, res, next) => {
  next(new AppError(404, `Маршрут ${req.method} ${req.originalUrl} не знайдено`));
};

export default notFoundHandler;
