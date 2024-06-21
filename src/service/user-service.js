import { ResponseError } from '../error/response-error.js';
import { tokenGenerated } from '../middleware/token.middleware.js';
import { User } from '../models/models.js';
import {
  getUserValidation,
  loginUserValidation,
  registerUserValidation,
} from '../validation/user-validation.js';

import { validate } from '../validation/validation.js';
import bcrypt from 'bcrypt';

const register = async (request) => {
  console.log(request);
  const user = validate(registerUserValidation, request);

  // check user exist
  const countUser = await User.findOne({
    username: user.username,
  });

  if (countUser) {
    throw new ResponseError(400, 'user already exist!');
  }

  user.password = await bcrypt.hash(user.password, 10);

  const newuser = await User(user);

  await newuser.save();

  return newuser;
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await User.findOne({
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
  const token = {
    _id: user._id,
    role: 'user',
  };
  const tokenCreated = tokenGenerated(token);
  await User.findOneAndUpdate(
    { username: user.username },
    { token: tokenCreated },
    { new: true, select: 'token' }
  );
  const data = {
    username: user.username,
    token: tokenCreated,
    email: user.email,
    userId: user._id,
  };

  return data;
};
const get = async (username) => {
  username = validate(getUserValidation, username);

  const user = await User.findOne({ username: username }).select(
    'username email role'
  );

  if (!user) {
    throw new ResponseError(404, 'user is not found');
  }

  return user;
};

const getAll = async () => {
  const users = await User.find().select(
    '_id username email age role'
  );

  return users;
};

export default { register, login, get, getAll };
