import { connection } from "../db/db.js";

export const viewAll = (req, res) => {
  const q = "SELECT * FROM userInfo";

  connection.query(q, (err, results) => {
    if (err) return res.json(err);
    console.log(results);
    res.json(results);
  });
};

export const viewOne = (req, res) => {
  const q = `SELECT * FROM userInfo WHERE id = ${req.params.id}`;

  connection.query(q, (err, results) => {
    if (err) return res.json(err);
    console.log(results);
    res.json(results);
  });
};

export const create = (req, res) => {
  const q = `INSERT INTO userInfo (first_name, last_name, email, gender, ip_address)
   VALUES (${req.body.first_name}, ${req.body.last_name}, ${req.body.email},
     ${req.body.gender}, ${req.body.ip_address} )`;

  connection.query(q, (err, results) => {
    if (err) return res.json(err);
    return res.status(201).json("User created!");
  });
};

export const update = (req, res) => {
  const q = `UPDATE userInfo SET first_name = ${req.body.first_name},
    last_name = ${req.body.last_name}, email = ${req.body.email},
    gender = ${req.body.gender}, ip_address = ${req.body.ip_address}
    WHERE id = ${req.params.id}`;

  connection.query(q, (err, results) => {
    if (err) return res.json(err);
    return res.status(200).json("User updated!");
  });
};

export const remove = (req, res) => {
const q = `DELETE FROM userInfo WHERE id = ${req.params.id}`;

connection.query(q, (err, results) => {
  if (err) return res.json(err);
  return res.status(200).json("User deleted!");
});
};
