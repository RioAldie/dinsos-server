import postService from '../service/post-service.js';

const add = async (req, res, next) => {
  try {
    const result = await postService.add(req.body);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
const edit = async (req, res, next) => {
  try {
    const result = await postService.edit(req.body);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await postService.remove(id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const getAll = async (req, res, next) => {
  try {
    const result = await postService.getAll();
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
    const result = await postService.get(id);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { add, edit, remove, getAll, get };
