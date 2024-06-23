import eventService from '../service/event-service.js';

const add = async (req, res, next) => {
  try {
    const result = await eventService.add(req.body);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
const edit = async (req, res, next) => {
  try {
    const result = await eventService.edit(req.body);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await eventService.remove(id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getAll = async (req, res, next) => {
  try {
    const result = await eventService.getAll();
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const get = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await eventService.get(id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { add, edit, remove, getAll, get };
