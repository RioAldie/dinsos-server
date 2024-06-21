import Joi from 'joi';

const createReportValidation = Joi.object({
  name: Joi.string().max(100).required(),
  id: Joi.string().max(100).optional(),
  price: Joi.number().required(),
  image: Joi.string().max(100).optional(),
  createAt: Joi.string().optional(),
  stock: Joi.number().optional(),
});
const getClothValidation = Joi.string().max(100).required();

export { createReportValidation, getClothValidation };
