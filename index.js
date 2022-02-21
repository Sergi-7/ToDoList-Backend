const { initializeServer } = require("./server");

const port = process.env.PORT ?? process.env.SERVER_PORT ?? 5000;

(async () => {
  try {
    await initializeServer(port);
  } catch {
    process.exit(1);
  }
})();
