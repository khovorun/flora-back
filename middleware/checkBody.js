import AppError from '../helpers/AppError.js';

const checkBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return next(new AppError(400, error.details.map((d) => d.message).join(', ')));
  }
  next();
};

export default checkBody;
