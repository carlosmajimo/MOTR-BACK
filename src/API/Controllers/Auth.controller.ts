import { JwtService } from "../Utils/JwtService";
import { Request, Response } from "express";

export class AuthController {

	static SignIn = (req: Request, res: Response) => {
		console.log("Me logueo");

		const token = JwtService.GenerateToken("holaa", "1h");
		return res.status(200).send(token);
	}
}