const mysql = require('mysql');
const commonts = require('./common.js')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test',
});


const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();//  为了防止断流
        })
      }
    })
  })
}
const findUserByName = (name) => {
  const sql = `select * from users where name="${name}"`
  return query(sql);
}
const addUser = (values) => {
  const sql = `insert into users set name=?,password=?;`
  return query(sql, values);
}


module.exports = { 
  query,
  findUserByName,
  addUser,
}