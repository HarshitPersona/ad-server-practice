const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const apiRoute = "/api";
const publisherRouter = require("./routers/publisher");
const assetRouter = require("./routers/asset");
const adRouter = require("./routers/ad");

app.use(apiRoute, publisherRouter);
app.use(apiRoute, assetRouter);
app.use(apiRoute, adRouter);

module.exports = app;
