const express = require("express");
const cors = require("cors");

const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

const auth = require("./middleware/auth")

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(cors());

const creative = require("./creative");

let generatedApiKey = "f5ee7799-d77a-490a-ad71-ed64f20aa49b";

let generatedToken = ""

const generateAuthToken = () => {
  const payload = { generatedApiKey };
  const secret = "mysecretkey";
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secret, options);
  return token;
};

app.get("/api/ad", auth, (req, res) => {
  res.send(creative);
});

app.post("/api/register", (req, res) => {
  const apiKey = uuid.v4();
  // generatedApiKey = apiKey;
  res.send(generatedApiKey);
});

app.post("/api/login", (req, res) => {
  const providedApiKey = req.body.apiKey;
  console.log(providedApiKey, generatedApiKey);
  if (providedApiKey !== generatedApiKey) res.status(401).send();
  // Generate a token
  const token = generateAuthToken();
  generatedToken = token;
  res.send({token});
});

app.listen("3000", () => {
  console.log("Server is up on 3000!");
});
