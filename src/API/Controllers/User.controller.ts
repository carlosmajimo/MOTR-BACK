import { Request, Response } from "express";
import { UserService } from "../../Application/User.service";
import { MotrContext } from "../../Infraestructure/MotrContext";
import { Responses } from "../../Domain/ValueObjects/Responses";


export class UserController {

	static create = (req: Request, res: Response) => {
		const httpResponse = (response: Responses) => res.status(response.code).send(response);
		const service = new UserService(MotrContext.getInstance());
		service.save(req.body)
			.then(httpResponse)
			.catch(httpResponse)
		;
	}
}