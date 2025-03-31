const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const usernameRoutes = require("./routes/usernames");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", usernameRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
