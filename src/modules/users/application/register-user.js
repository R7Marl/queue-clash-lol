import { User } from '../domain/user.js';
import { hashPassword } from '../../../shared/security/password-service.js';

export class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(payload) {
    const existingUser = await this.userRepository.findByEmail(payload.email);
    if (existingUser) {
      throw new Error('El correo ya está registrado');
    }

    const user = User.create({ ...payload, password: hashPassword(payload.password) });
    return this.userRepository.create(user);
  }
}
