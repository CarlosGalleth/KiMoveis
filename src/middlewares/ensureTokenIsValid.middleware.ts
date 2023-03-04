import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

export const ensureTokenIsValidMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  const bearerToken = request.headers.authorization;

  if (!bearerToken) {
    throw new AppError("Token is missing.", 401);
  }

  const token = bearerToken.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    if (decoded.admin || decoded.sub === request.params.id) {
      return next();
    }

    throw new AppError("Need admin permission", 401);
  });
};
