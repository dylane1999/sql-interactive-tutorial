import config from "config";
import mysql from "mysql";
const host = config.get("host")
const password = config.get("password")
const user = config.get("user")
const SqlPort = config.get("SqlPort")
const database = config.get("database")
import SqlString from "sqlstring"

const connection = mysql.createConnection({
  host: host,
  user: user,
  port: SqlPort,
  password: password,
  database: database,
});

class mySqlDB {
  constructor(connection) {
    this.connection = connection;
    this.driver = null;
  }

  getDriver() {
    if (this.driver) {
      return this.driver;
    } else {
      const driver = this.connectDB();
      this.driver = driver;
      return this.driver;
    }
  }

  async queryDB(query) {
    try {
      const response = await new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  connectDB() {
    try {
      this.connection.connect();
      console.log(" SQL server connected succesfully");
      return this.connection;
    } catch (err) {
      /** if error in connecting print error and exit with failure */
      console.error(err.message);
      process.exit(1);
    }
  }
}

const SqlDriver = new mySqlDB(connection);
/** instantiate a mySqlDB driver to perform DB operations by REST API */

export default SqlDriver;
