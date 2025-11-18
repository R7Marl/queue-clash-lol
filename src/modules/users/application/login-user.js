import { comparePassword } from '../../../shared/security/password-service.js';
import { generateToken } from '../../../shared/security/token-service.js';

export class LoginUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const isValid = comparePassword(password, user.password);
    if (!isValid) {
      throw new Error('Contraseña incorrecta');
    }

    const token = generateToken(user.id);
    return { token, user };
  }
}
