


const jwt = require("jsonwebtoken");


require("./db/mongoose")

const app = require('./app')

const port = process.env.PORT

app.listen(port, () => {
    console.log("Server is up on " + port)
})
// const authPublisher = require("./middleware/auth")

// const { generateAuthToken, generateApiKey, generatePublisherId } = require("./utils/unique-ids")


// const creative = require("./creative");

// let generatedApiKey = "f5ee7799-d77a-490a-ad71-ed64f20aa49b";

// let generatedToken = ""



// app.get("/api/ad", authPublisher, (req, res) => {
//   res.send(creative);
// });

// app.post("/api/register", (req, res) => {
//   const publisherId = generatePublisherId();
//   const apiKey = generateApiKey()
//   // generatedApiKey = apiKey;
//   res.send(generatedApiKey);
// });

// app.post("/api/login", (req, res) => {
//   const providedApiKey = req.body.apiKey;
//   console.log(providedApiKey, generatedApiKey);
//   if (providedApiKey !== generatedApiKey) res.status(401).send();
//   // Generate a token
//   const token = generateAuthToken();
//   generatedToken = token;
//   res.cookie('auth_token', token, { maxAge: 86405000, httpOnly: true })
//   res.status(201).send({token});
// });

// app.listen("3000", () => {
//   console.log("Server is up on 3000!");
// });
