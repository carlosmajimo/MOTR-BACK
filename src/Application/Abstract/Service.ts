import { MotrContext } from "../../Infraestructure/MotrContext";

export abstract class Service {

	protected context: MotrContext;

	protected constructor(context: MotrContext) {
		this.context = context;
	}
}