import tcpApp from "./app";

const server = tcpApp.listen(8124, () => {
    console.log("server bound");
});

export default server;