import * as dotenv from "dotenv";
import { HttpServer } from "./API/HttpServer";
import { TcpIpServer } from "./TCP-IP/TcpIpServer";
import { MotrContext } from "./Infraestructure/MotrContext";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

const app = HttpServer.getInstance();
const TCPServer = TcpIpServer.getInstance();
const Context = MotrContext.getInstance();

/*const person = new Person();
person.identification = "1234543";
person.name = {first: "Carlos", last: "Jimenez"};
person.contactInfo = {email: "carlosmajimo@gmail.com", phone: "", address: ""};

const person2 = new Person();
person2.identification = "12243543";
person2.name = {first: "Maria", last: "Perez"};
person2.contactInfo = {email: "masrarita@gmail.com", phone: "", address: ""};

const Service = new PersonService (Context);

Service.save(person);
Service.save(person2);*/