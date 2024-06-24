import { ResponseError } from '../error/response-error.js';
import { Post } from '../models/models.js';
import {
  createPostValidation,
  deletePostValidation,
  editPostValidation,
  getPostValidation,
} from '../validation/post-validation.js';

import { validate } from '../validation/validation.js';

const add = async (request) => {
  const post = validate(createPostValidation, request);

  post.createAt = new Date().toISOString();
  post.status = 'active';

  const newpost = await Post(post);

  await newpost.save();

  return newpost;
};

const getAll = async () => {
  const posts = await Post.find();

  return posts;
};

const edit = async (request) => {
  const postRequest = validate(editPostValidation, request);

  const post = await Post.findOne({
    _id: postRequest._id,
  });

  if (!post) {
    throw new ResponseError(401, 'post tidak ditemukan');
  }

  post.title = postRequest.title;
  post.content = postRequest.content;
  post.writer = postRequest.writer;
  post.status = postRequest.status;

  await post.save();

  return post;
};

const remove = async (id) => {
  id = validate(deletePostValidation, id);

  const post = await Post.findOneAndDelete({
    _id: id,
  });

  if (!post) {
    throw new ResponseError(404, 'post is not found');
  }

  return { message: ' delete success' };
};
const get = async (id) => {
  id = validate(getPostValidation, id);

  const post = await Post.findOne({ _id: id });

  if (!post) {
    throw new ResponseError(404, 'post is not found');
  }

  return post;
};

export default { add, edit, remove, getAll, get };
