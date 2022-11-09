import { Injectable } from '@nestjs/common';
var jwt = require('jsonwebtoken');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async login() {
    try {
      let token = jwt.sign({}, "karan", { expiresIn: '1h' });
      return { token: token, message: "Token generated successfully" }
    }
    catch (err) {
      return { error: err }
    }
  }
}
