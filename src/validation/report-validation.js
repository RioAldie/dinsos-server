import Joi from 'joi';

const createReportValidation = Joi.object({
  title: Joi.string().max(100).required(),
  content: Joi.string().required(),
  category: Joi.string().optional(),
  address: Joi.string().optional(),
  NIK: Joi.string().required(),
  phone: Joi.string().max(100).required(),
  relation: Joi.string().optional(),
  job: Joi.string().optional(),
  location: Joi.string().optional(),
  name: Joi.string().optional(),
  suspectName: Joi.string().optional(),
  age: Joi.string().optional(),
});
const editStatusReportValidation = Joi.object({
  _id: Joi.string().required(),
  newStatus: Joi.string().required(),
});

const deleteReportValidation = Joi.string().max(100).required();
const getReportValidation = Joi.string().max(100).required();
export {
  createReportValidation,
  getReportValidation,
  deleteReportValidation,
  editStatusReportValidation,
};
