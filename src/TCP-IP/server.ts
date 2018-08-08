import tcpApp from "./app";

const port = 8124;

const server = tcpApp.listen(port, () => {
    console.log("   TCP-IP Server is running at http://localhost:%d", port);
    console.log("   Press CTRL-C to stop\n");
});

export default server;