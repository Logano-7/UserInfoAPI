import express from "express";
import cors from "cors";
import config from "./config";
import apiRoutes from "./routes/index";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use("/api", apiRoutes);
app.listen(config.port, () =>
  console.log(`Server listening on port ${config.port}...`)
);
