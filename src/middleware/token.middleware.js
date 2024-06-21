import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const { SECRET_KEY } = process.env;

export const tokenGenerated = (data) => {
  const token = jwt.sign({ data }, SECRET_KEY, {
    expiresIn: '20h',
  });
  return token;
};

export const tokenVerified = (request, response, next) => {
  try {
    const token = request.headers.authorization;
    const verified = jwt.verify(token.split(' ')[1], SECRET_KEY);
    if (verified) {
      next();
    }
  } catch (error) {
    response.status(401).send({ message: error.message });
    response.end();
  }
};

export const onlyAdmin = (request, response, next) => {
  try {
    const token = request.headers.authorization;
    const verified = jwt.verify(token.split(' ')[1], SECRET_KEY);
    if (verified.data.role === 'admin') {
      next();
    } else {
      response.status(401).send('Unauthorized, forbidden');
      response.end();
    }
  } catch (error) {
    response.status(401).send({ message: error.message });
    response.end();
  }
};

export const tokenReturned = (request, response) => {
  try {
    const token = request.headers.authorization;
    const verified = jwt.verify(token.split(' ')[1], SECRET_KEY);
    return verified;
  } catch (error) {
    console.log('token is invalid');
  }
};

export const forUser = (request, response, next) => {
  try {
    const token = request.headers.authorization;
    const verified = jwt.verify(token.split(' ')[1], SECRET_KEY);
    if (verified.data.role === 'user') {
      next();
    } else {
      response
        .status(401)
        .send({ message: 'unauthorized, forbidden' });
      response.end();
    }
  } catch (error) {
    response.status(401).send({ error: error.message });
    response.end();
  }
};
