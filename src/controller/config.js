const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'mande',
  password: 'Vall.2022*',
  port: 5433,
  "max": 10, // max number of clients in the pool
  "idleTimeoutMillis": 30000, // how long a client is allowed to remain idle before being closed
};

module.exports = config