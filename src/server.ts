import compression from "compression";
import express from "express";
import next from "next";
import nextI18NextMiddleware from "next-i18next/middleware";

import nextI18Next from "./i18n"

const port = process.env.PORT || 3000
const env = process.env.NODE_ENV

const app = next({ dev: env !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await nextI18Next.initPromise
  await app.prepare();
  const server = express();
  server.use(express.urlencoded({ extended: true }))
  server.use(nextI18NextMiddleware(nextI18Next));
  server.use(compression());

  // handle any other requests
  server.get("*", (req, res) => {

    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on port ${port}`);
  });
})();
