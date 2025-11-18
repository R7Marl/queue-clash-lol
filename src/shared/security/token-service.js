import jwt from 'jsonwebtoken';

const TOKEN_EXPIRATION = '30d';

export const generateToken = (id) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET no configurado');
  return jwt.sign({ id }, secret, { expiresIn: TOKEN_EXPIRATION });
};
