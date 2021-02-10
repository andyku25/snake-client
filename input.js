let connection;
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require("./constants");

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
      if (key === "w") {
        // console.log("up");
        connection.write(MOVE_UP_KEY);
      } else if (key === "a") {
        // console.log("left");
        connection.write(MOVE_LEFT_KEY);
      } else if (key === "s") {
        // console.log("down");
        connection.write(MOVE_DOWN_KEY);
      } else if (key === "d") {
        // console.log("right");
        connection.write(MOVE_RIGHT_KEY);
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