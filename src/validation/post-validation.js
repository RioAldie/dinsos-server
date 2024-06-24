import Joi from 'joi';

const createPostValidation = Joi.object({
  title: Joi.string().max(100).required(),
  content: Joi.string().optional().required(),
  writer: Joi.string().optional().required(),
  image: Joi.string().optional(),
});
const editPostValidation = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().max(100).required(),
  content: Joi.string().optional().required(),
  writer: Joi.string().optional().required(),
  image: Joi.string().optional(),
  status: Joi.string().optional().required(),
});

const deletePostValidation = Joi.string().max(100).required();
const getPostValidation = Joi.string().max(100).required();
export {
  createPostValidation,
  getPostValidation,
  deletePostValidation,
  editPostValidation,
};
