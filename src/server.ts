import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { connectDb } from "./mongodb";
import { cartItemsRouter } from "./routers/cart-items-router";
import { cartsRouter } from "./routers/carts-router";
import { categoriesRouter } from "./routers/categories-router";
import { ordersRouter } from "./routers/orders-router";
import { productsRouter } from "./routers/products-router";
import { usersRouter } from "./routers/users-router";

config();
const { PORT } = process.env;

const app = express();

const CORS_CONFIG = {
  origin: true,
  credentials: true,
};
app.use(cors(CORS_CONFIG));
app.use(cookieParser());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/shopping-carts", cartsRouter);
app.use("/cart-items", cartItemsRouter);
app.use("/orders", ordersRouter);

startServer();

async function startServer() {
  await connectDb();
  app.listen(PORT, () => console.log(`server is up at ${PORT}`));
}
