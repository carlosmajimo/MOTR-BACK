import api from "./API/server";
import tcp from "./TCP-IP/server";
import { MotrContext } from "./Infraestructure/MotrContext";

const HTTPServer = api;
const TCPServer = tcp;
const db = MotrContext.getInstance();
db.connect();