import Joi from 'joi';

const createEventValidation = Joi.object({
  title: Joi.string().max(100).required(),
  location: Joi.string().optional().required(),
  date: Joi.string().optional().required(),
  time: Joi.string().optional(),
  detail: Joi.string().optional(),
  audience: Joi.string().optional(),
});
const editEventValidation = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().max(100).optional(),
  location: Joi.string().optional().optional(),
  date: Joi.string().optional().optional(),
  time: Joi.string().optional(),
  detail: Joi.string().optional(),
  audience: Joi.string().optional(),
});

const deleteEventValidation = Joi.string().max(100).required();
const getEventValidation = Joi.string().max(100).required();
export {
  createEventValidation,
  getEventValidation,
  deleteEventValidation,
  editEventValidation,
};
