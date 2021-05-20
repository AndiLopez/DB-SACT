// Variables para conexión 
const express = require('express');
const cors = require('cors');
var app = express();
const mysql = require('mysql');
const { response } = require('express');

// -------- Datos de Conexión a la Base de datos MySQL en la Nube------------
// se cambia el nombre de la base de datos por el nombre donde se alojará ahora la nuva DB instalada en el servidor

const db = mysql.createConnection({
  user: 'uzgygfbuvcaeb05h',
  password: 'qDBSi8NUDT16oLEm4nnt',
  host: 'btv9xyyblgo8ainjl5ok-mysql.services.clever-cloud.com',
  database: 'btv9xyyblgo8ainjl5ok', 
});


// ----------------- Base de Datos Local -----------------

// const db = mysql.createConnection({
//   user: 'root',
//   password: '',
//   host: '127.0.0.1',
//   database: 'sistemas_centrales', 
// });



app.use(cors())
app.use(express.json());
app.get('/1', function (req, res) {
  db.query('SELECT * FROM general LEFT JOIN baterias ON general.siglas_central = baterias.siglas_c LEFT JOIN planta_rectificadores ON baterias.siglas_c=planta_rectificadores.siglas_c LEFT JOIN ca ON planta_rectificadores.siglas_c=ca.siglas_c LEFT JOIN transformadores ON ca.siglas_c=transformadores.siglas_c LEFT JOIN ges ON transformadores.siglas_c=ges.siglas_c LEFT JOIN rectificadores ON ges.siglas_c=rectificadores.siglas_c', function (error, results, fields) {
    res.json(results);
  })
});

app.get('/1.1', function (req, res) {
  //  lista 1

  db.query('SELECT * FROM info_tipo_ge', function (error, results, fields) {
    res.json(results);
  })
});

app.get('/1.2', function (req, res) {
  // lista 2
  db.query('SELECT * FROM produccion_bcos', function (error, results, fields) {
    res.json(results);
  })
});


// ----------------------- INSERT  ----------------
app.post('/1.4', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO general SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});

app.post('/1.5', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO planta_rectificadores SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});
app.post('/1.6', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO baterias SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});
app.post('/1.7', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO ca SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});
app.post('/1.8', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO transformadores SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});
app.post('/1.9', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO ges SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});

app.post('/1.10', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO rectificadores SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});
app.post('/1.11', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO info_tipo_ge SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});
app.post('/1.12', function (req, res) {
  let obj = req.body;
  db.query('INSERT INTO produccion_bcos SET ?', obj, function (error, results) {
    res.json({ msg: "Datos agregados correctamente" });
  })
});

//  -----------------------------  Delete-----------------------


// --------------------------------- Sub GES ----------------------------
app.get('/SGS', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM info_tipo_ge', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/SGS:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM info_tipo_ge WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});

// ------------ 


// --------------------------------- Rectificadores ----------------------------
app.get('/R', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM rectificadores', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/R:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM rectificadores WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});


// --------------------------------- GES ----------------------------
app.get('/GE', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM ges', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/GE:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM ges WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});

// --------------------------------- Transformadores ----------------------------
app.get('/T', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM transformadores', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/T:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM transformadores WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});

// --------------------------------- CA ----------------------------
app.get('/CA', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM ca', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/CA:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM ca WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});

// --------------------------------- Baterías ----------------------------
app.get('/B', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM baterias', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/B:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM baterias WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});
// --------------------------------- Producción de Bancos ----------------------------
app.get('/PB', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM produccion_bcos', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/PB:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM produccion_bcos WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});

// --------------------------------- Planda de Rectificadores ----------------------------
app.get('/PR', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM planta_rectificadores', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/PR:id', (req, res) => {
  const { id } = req.params
  const query = "DELETE FROM planta_rectificadores WHERE id = ?";
  db.query(query, id, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});

// --------------------------------- General ----------------------------
app.get('/G', function (req, res) {
  //  puerto 4000
  db.query('SELECT * FROM general', function (error, results, fields) {
      res.json(results);
  })
});

app.delete('/G:siglas_central', (req, res) => {
  const { siglas_central } = req.params
  const query = "DELETE FROM general WHERE siglas_central = ?";
  db.query(query, siglas_central, function (error, results, fields) {
      res.json({ "msg": "removed" })
  })
});


app.listen(4000, function () {
  console.log('Puerto 4000');
});
