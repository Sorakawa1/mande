const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'mande',
  password: '1234',
  port: 5432,
  "max": 10, // max number of clients in the pool
  "idleTimeoutMillis": 30000, // how long a client is allowed to remain idle before being closed
};

module.exports = config