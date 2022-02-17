import express, { Request, Response } from "express";
import { Category } from "../collections/categories";
import { verifyJwtMiddleware } from "../helpers/verify-middleware";

export const categoriesRouter = express.Router();

categoriesRouter.get(
  "/",
  verifyJwtMiddleware,
  async (req: Request, res: Response) => {
    try {
      const categories = await Category.find();
      res.send(categories);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
);
