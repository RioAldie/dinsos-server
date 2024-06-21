import { ResponseError } from '../error/response-error.js';
import { Admin } from '../models/models.js';
import {
  loginAdminValidation,
  registerAdminValidation,
} from '../validation/admin-validation.js';
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

const login = async (request) => {
  const loginRequest = validate(loginAdminValidation, request);

  const user = await Admin.findOne({
    username: loginRequest.username,
  });

  if (!user) {
    throw new ResponseError(401, 'username or password wrong');
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(401, 'Username or password wrong');
  }

  const token = uuid().toString();
  return Admin.findOneAndUpdate(
    { username: user.username },
    { token: token },
    { new: true, select: 'token' }
  );
};

export default { register };
