let connection;
const { MOVEMENTS, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require("./constants");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = () => {
    stdin.on("data", (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  };
  const movement = () => {
    stdin.on("data", (key) => {
      keys = ["w", "a", "s", "d"];
      if (keys.includes(key)) {
        connection.write(MOVEMENTS[key]);
      }
    });
  };
  const speak = () => {
    stdin.on("data", (key) => {
      if (key === "n") {
        connection.write("Say: I'm gonna get ya!");
      } else if (key === "m") {
        connection.write("Say: Please let me eat! :)");
      } else if (key === "b") {
        connection.write("Say: This is cool!!");
      }
    });
  };

  speak();
  handleUserInput();
  movement();

  return stdin;
}


module.exports = {
  setupInput,
};