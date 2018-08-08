import tcpApp from "./app";

const port = 8124;

const server = tcpApp.listen(port, () => {
    console.log("App is running at http://localhost:%d", port);
});

export default server;