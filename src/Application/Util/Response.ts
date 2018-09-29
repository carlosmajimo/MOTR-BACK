export class Responses {
	code: number;
	message: string;

	constructor(code?: number, message?: string) {
		this.code = code;
		this.message = message;
	}

	setResponse(code: number, message: string) {
		this.code = code;
		this.message = message;
	}
}