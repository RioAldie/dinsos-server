import { Report } from '../models/models.js';
import {
  createReportValidation,
  deleteReportValidation,
  editStatusReportValidation,
  getReportValidation,
} from '../validation/report-validation.js';
import { validate } from '../validation/validation.js';

const add = async (request) => {
  const report = validate(createReportValidation, request);

  report.createAt = new Date().toISOString();
  report.status = 'Dalam Tinjauan';

  const newReport = await Report(report);

  await newReport.save();

  return newReport;
};

const getAll = async () => {
  const reports = await Report.find();

  return reports;
};

const editStatus = async (request) => {
  const reportRequest = validate(editStatusReportValidation, request);

  const report = await Report.findOne({
    _id: reportRequest._id,
  }).select('content status name _id');

  if (!report) {
    throw new ResponseError(401, 'username or password wrong');
  }

  report.status = reportRequest.newStatus;

  await report.save();

  return report;
};

const remove = async (id) => {
  id = validate(deleteReportValidation, id);

  const report = await Report.findOneAndDelete({
    _id: id,
  });

  if (!report) {
    throw new ResponseError(404, 'report is not found');
  }

  return { message: ' delete success' };
};
const get = async (id) => {
  id = validate(getReportValidation, id);

  const report = await Report.findOne({ _id: id });

  if (!report) {
    throw new ResponseError(404, 'report is not found');
  }

  return report;
};

export default { add, editStatus, remove, getAll, get };
