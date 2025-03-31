exports.getUsernames = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("Check the terminal for logged usernames.");
};

exports.getNewUsernameForm = (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/new" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
};

exports.postNewUsername = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.send("Username received. Check the terminal for details.");
};