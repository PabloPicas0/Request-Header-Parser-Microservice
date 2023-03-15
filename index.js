require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));
app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const ip = req.ip;
  const language = req.header("accept-language");
  const software = req.header("user-agent");

  res.json({ ipaddress: ip, language: language, software: software });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is hosted on localhost:${listener.address().port}`);
  console.log("Press ctr + c to exit");
});
