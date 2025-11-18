export class GetUserByEmail {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(email) {
    return this.userRepository.findByEmail(email);
  }
}
