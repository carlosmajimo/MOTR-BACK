import { sign } from "jsonwebtoken";

export class JwtService {

	static GenerateToken(data: any, duration: string): string {
		const secret = process.env.JWT_SECRET;
		return sign({
			data: data
		}, secret, { expiresIn: duration });
	}
}