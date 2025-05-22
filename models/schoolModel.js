const db = require('../config/db');

exports.insertSchool = (school, callback) => {
  const { name, address, latitude, longitude } = school;
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], callback);
};

exports.getAllSchools = (callback) => {
  const sql = 'SELECT * FROM schools';
  db.query(sql, callback);
};
