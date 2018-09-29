import * as dotenv from "dotenv";
import { HttpServer } from "./API/HttpServer";
import { TcpIpServer } from "./TCP-IP/TcpIpServer";
import { MotrContext } from "./Infraestructure/MotrContext";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

const app = HttpServer.getInstance();
const TCPServer = TcpIpServer.getInstance();
const Context = MotrContext.getInstance();