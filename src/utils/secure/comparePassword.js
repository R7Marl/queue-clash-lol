import bcrypt from 'bcrypt';

const comparePassword = (password, hash) => {
    const isMatch = bcrypt.compareSync(password, hash);
    return isMatch;
}

export default comparePassword;