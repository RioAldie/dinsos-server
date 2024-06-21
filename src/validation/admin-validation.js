import Joi from 'joi';

const registerAdminValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  email: Joi.string().max(100).optional(),
});
const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});
const getUserValidation = Joi.string().max(100).required();
const updateUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).optional(),
  email: Joi.string().max(100).optional(),
});

export {
  registerAdminValidation,
  loginUserValidation,
  getUserValidation,
  updateUserValidation,
};
