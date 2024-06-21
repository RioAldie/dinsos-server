import Joi from 'joi';

const registerAdminValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  email: Joi.string().max(100).optional(),
});
const loginAdminValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

export { registerAdminValidation, loginAdminValidation };
