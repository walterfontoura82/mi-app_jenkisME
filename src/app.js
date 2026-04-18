const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mensaje: "Hola Mundo desde mi primera app con Jenkins" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/suma/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Los parametros deben ser numeros" });
  }

  return res.json({ resultado: a + b });
});

module.exports = app;
