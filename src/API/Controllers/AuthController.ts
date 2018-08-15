import { JwtService } from "../Utils/JwtService";
import { Request, Response } from "express";

export class AuthController {

	static logIn = (req: Request, res: Response) => {
		console.log("Soy el test");

		const token = JwtService.GenerateToken("holaa", "1h")
		return res.status(200).send(token);
	}
}