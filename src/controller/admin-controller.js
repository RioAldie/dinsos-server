import adminService from '../service/admin-service.js';

const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await adminService.register(req.body);

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
};
