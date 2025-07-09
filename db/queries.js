const pool = require("./pool");

// Get all usernames, with optional search filter
async function getAllUsernames(search = "") {
  let query = "SELECT * FROM usernames";
  let params = [];

  // If a search term is provided, filter the results
  if (search) {
    query += " WHERE username ILIKE $1";
    params.push(`%${search}%`);
  }

  const { rows } = await pool.query(query, params);
  return rows;
}

// Insert a new username into the database
async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

// Delete all usernames from the database
async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames,
};
