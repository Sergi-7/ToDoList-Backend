const debug = require("debug")("tasks:errors");

const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "Invalid Endpoint" });
};

const generalErrorHandler = (error, req, res) => {
  debug("There has been an error", error.message);
  const message = error.code ? error.message : "Global error";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundErrorHandler,
  generalErrorHandler,
};
