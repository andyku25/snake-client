const net = require("net");


const connect = () => {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
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