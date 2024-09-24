import jwt from 'jsonwebtoken';
import {errorHandler} from './error.js'; 
export const verifyToken =(req ,res , next)=>{
    const token =req.cookies.access_token;
    if (!token) {
        return next(errorHandler(401, 'Unauthorised'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err && err.name === 'TokenExpiredError') {
            return next(errorHandler(401, 'Token has expired, please login again.'));
        }
        if (err) {
            return next(errorHandler(401, 'Unauthorised'));
        }
        req.user = user;
        next();
    });
};