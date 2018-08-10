import net from "net";

const tcpApp = net.createServer((c) => {
	// 'connection' listener
	console.log("client connected");
	// console.log(c.eventNames());

	c.on("data", (data) => {
		console.log(data.toString());
	});

	c.on("end", () => {
		console.log("client disconnected");
	});

	// c.write("hello\r\n");
	c.pipe(c);
	});

tcpApp.on("error", (err) => {
	throw err;
});

export default tcpApp;