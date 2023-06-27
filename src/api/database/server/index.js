const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createConnection } = require("../conexion");

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint de login
app.post("/login-authentication", (req, res) => {
  const { username, password } = req.body;

  const connection = createConnection();

  // Consulta para verificar las credenciales
  const query = `SELECT * FROM userr WHERE userName = ? AND pass = ?`;
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error en la consulta: ", error);
      res.status(500).json({ message: "Error en la consulta" });
      connection.end();
      return;
    }

    if (results.length === 0) {
      // Credenciales incorrectas
      res.status(401).json({ message: "Credenciales inválidas" });
    } else {
      // Credenciales correctas
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    }

    connection.end();
  });
});

// ...
app.get("/", (req, res) => {
  res.send("Hola mundo de Juan");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
