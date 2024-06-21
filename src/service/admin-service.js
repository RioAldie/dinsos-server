import { ResponseError } from '../error/response-error.js';
import { Admin } from '../models/models.js';
import { registerAdminValidation } from '../validation/admin-validation.js';
import { validate } from '../validation/validation.js';
import bcrypt from 'bcrypt';

const register = async (request) => {
  console.log(request);
  const admin = validate(registerAdminValidation, request);

  // check user exist
  const countAdmin = await Admin.findOne({
    username: admin.username,
  });

  if (countAdmin) {
    throw new ResponseError(400, 'Admin already exist!');
  }

  admin.password = await bcrypt.hash(admin.password, 10);

  const newAdmin = await Admin(admin);

  await newAdmin.save();

  return newAdmin;
};

export default { register };
