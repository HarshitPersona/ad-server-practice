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
const eventTypeRouter = require("./routers/eventType");
const eventRouter = require("./routers/eventType");
const placementRouter = require("./routers/placement");

app.use(apiRoute, publisherRouter);
app.use(apiRoute, assetRouter);
app.use(apiRoute, adRouter);
app.use(apiRoute, eventTypeRouter);
app.use(apiRoute, eventRouter);
app.use(apiRoute, placementRouter);

module.exports = app;
