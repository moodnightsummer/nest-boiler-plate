import * as bcrypt from 'bcrypt';

export class HashUtil {
  static async createHashPassword(password: string): Promise<string> {
    console.log(password + process.env.PW_SECRET_KEY);

    return await bcrypt.hash(password + process.env.PW_SECRET_KEY, 11);
  }

  static async isHashVaild(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password + process.env.PW_SECRET_KEY, hash);
  }
}
