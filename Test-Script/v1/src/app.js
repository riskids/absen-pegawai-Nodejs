const express = require("express");
const helmet = require("helmet");
const config = require("./config/index.js");
const loaders = require("./loaders/index.js");
const { UserRoutes, EpresenceRoutes } = require("./api-routes/index.js");

config();
loaders();

const app = express();
app.use(express.json());
app.use(helmet());

app.listen(8000, () => {
  app.use("/epresence", EpresenceRoutes);
  app.use("/users", UserRoutes);
});
