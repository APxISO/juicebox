const { Client } = require(`pg`);
const { rows } = require("pg/lib/defaults");

const client = new Client(
  "postgres://postgres:2911Addison@localhost/juicebox-dev"
);

async function createUser({ username, password }) {
  const result = await client.query(
    `
      INSERT INTO users(username, password) 
      VALUES($1, $2) 
      ON CONFLICT (username) DO NOTHING 
      RETURNING *;
    `,
    [username, password]
  );
  return rows;
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
      FROM users;
    `
  );

  return rows;
}

// and export them
module.exports = {
  client,
  getAllUsers,
  createUser,
};
