require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log(req.header("user-agent"), req.socket.remoteAddress);
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is hosted on localhost:${listener.address().port}`);
  console.log("Press ctr + c to exit");
});
