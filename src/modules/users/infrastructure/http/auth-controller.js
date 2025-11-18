import { LoginUser } from '../../application/login-user.js';
import { RegisterUser } from '../../application/register-user.js';
import { GetUserByEmail } from '../../application/get-user-by-email.js';

export class AuthController {
  constructor(userRepository) {
    this.loginUser = new LoginUser(userRepository);
    this.registerUser = new RegisterUser(userRepository);
    this.getUserByEmail = new GetUserByEmail(userRepository);
  }

  signin = async (req, res) => {
    try {
      const result = await this.loginUser.execute(req.body);
      res.status(200).json({ login: true, token: result.token, user: result.user });
    } catch (error) {
      res.status(400).json({ login: false, message: error.message });
    }
  };

  signup = async (req, res) => {
    try {
      const user = await this.registerUser.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  findByEmail = async (req, res) => {
    try {
      const user = await this.getUserByEmail.execute(req.params.email);
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
