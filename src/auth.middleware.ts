import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from "@nestjs/common";
var jwt = require('jsonwebtoken');

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const tokenFromHeader = req.headers.authorisationtoken;
        console.log(tokenFromHeader,"karan");
        try {
            jwt.verify(tokenFromHeader, process.env.MY_KEY);
            next();
        }
        catch (err) {
            throw new UnauthorizedException("Unauthorized");
        }
    }
}