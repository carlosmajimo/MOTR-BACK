import api from "./API/server";
import tcp from "./TCP-IP/server";
import { MotrContext } from "./Infraestructure/MotrContext";
import { PersonService } from "./Application/PersonService";
import { Person	} from "./Domain/Person";

const HTTPServer = api;
const TCPServer = tcp;
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