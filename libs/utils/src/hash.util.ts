import * as bcrypt from 'bcrypt';

export class HashUtil {
  static async createHashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password + process.env.PW_SECRET_KEY, 11);
  }
}
