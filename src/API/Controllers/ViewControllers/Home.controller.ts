import { Response, Request } from "express";

export class HomeController {

	static get = (req: Request, res: Response) => {
		res.render("home", {
			title: "Inicio"
		});
	};
}