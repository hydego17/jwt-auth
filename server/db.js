const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "onlyaim17",
  host: "localhost",
  post: 5432,
  database: "jwttest",
});

module.exports = pool;
