const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts',
});

client.connect().catch((e) => console.log("Postgress connection failure", e));

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
