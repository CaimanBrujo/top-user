const db = require("../db/queries");

// Controller to fetch and display all usernames
async function getUsernames(req, res) {
  const { search } = req.query; // Get search parameter from query string
  try {
    const usernames = await db.getAllUsernames(search);
    console.log("Usernames:", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  } catch (err) {
    console.error("Error fetching usernames:", err);
    res.status(500).send("Internal Server Error");
  }
}

// Controller to render a simple HTML form
function createUsernameGet(req, res) {
  const path = require("path");
  res.sendFile(path.resolve(__dirname, "../views/form.html"));
}

// Controller to handle form submission and save username
async function createUsernamePost(req, res) {
  const { username } = req.body;
  try {
    console.log("Username to be saved:", username);
    await db.insertUsername(username);
    res.redirect("/");
  } catch (err) {
    console.error("Error inserting username:", err);
    res.status(500).send("Internal Server Error");
  }
}

// Controller to delete all usernames from the database
async function deleteUsernames(req, res) {
  try {
    await db.deleteAllUsernames();
    console.log("All usernames deleted");
    res.send("All usernames have been deleted.");
  } catch (err) {
    console.error("Error deleting usernames:", err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames,
};
