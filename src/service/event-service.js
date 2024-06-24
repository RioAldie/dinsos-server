import { ResponseError } from '../error/response-error.js';
import { Event } from '../models/models.js';
import {
  createEventValidation,
  deleteEventValidation,
  editEventValidation,
  getEventValidation,
} from '../validation/eventValidation.js';

import { validate } from '../validation/validation.js';

const add = async (request) => {
  const event = validate(createEventValidation, request);

  event.createAt = new Date().toISOString();

  const newEvent = await Event(event);

  await newEvent.save();

  return newEvent;
};

const getAll = async () => {
  const events = await Event.find();

  return events;
};

const edit = async (request) => {
  const eventRequest = validate(editEventValidation, request);

  const event = await Event.findOne({
    _id: eventRequest._id,
  });

  if (!event) {
    throw new ResponseError(401, 'Event tidak ditemukan');
  }

  event.title = eventRequest.title;
  event.detail = eventRequest.detail;
  event.date = eventRequest.date;
  event.time = eventRequest.time;
  event.location = eventRequest.location;
  event.peserta = eventRequest.peserta;
  event.audience = eventRequest.audience;

  await event.save();

  return event;
};

const remove = async (id) => {
  id = validate(deleteEventValidation, id);

  const event = await Event.findOneAndDelete({
    _id: id,
  });

  if (!event) {
    throw new ResponseError(404, 'event is not found');
  }

  return { message: ' delete success' };
};
const get = async (id) => {
  id = validate(getEventValidation, id);

  const event = await Event.findOne({ _id: id });

  if (!event) {
    throw new ResponseError(404, 'event is not found');
  }

  return event;
};

export default { add, edit, remove, getAll, get };
