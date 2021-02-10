const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  })
  // interpret incoming data
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Snake Connection was Successful!");
    const name = "AKU";
    conn.write(`Name: ${name}`);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500)
  })

  conn.on("data", (data) => {
    console.log(data);
  })


  return conn;
};

module.exports = {
  connect
};