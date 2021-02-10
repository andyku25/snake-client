let connection;

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
        connection.write("Move: up");
      } else if (key === "a") {
        // console.log("left");
        connection.write("Move: left");
      } else if (key === "s") {
        // console.log("down");
        connection.write("Move: down");
      } else if (key === "d") {
        // console.log("right");
        connection.write("Move: right");
      }
    });
  };

  handleUserInput();
  movement();

  return stdin;
}


module.exports = {
  setupInput,
};