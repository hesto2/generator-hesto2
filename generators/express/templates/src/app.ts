import express from "express";
import { useCommonMiddleware, useNotFoundHandler } from "@hesto2/express-utils";
import routes from "./routes";

const getApp = () => {
  const app = express();

  useCommonMiddleware(app);
  app.use(routes);

  // error handler
  app.use((err: any, _req: any, res: any, next: any) => {
    if (res.headersSent) {
      return next(err);
    }
    console.error(err);
    if (err.isAxiosError) {
      res.status(err.response.status).json(err.response.data);
    }
    next(err);
  });
  useNotFoundHandler(app);
  return app;
};

export default getApp;
