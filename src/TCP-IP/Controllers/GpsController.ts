
export class GpsController {

	static data = (data: any) => {
		console.log(data.toString());
	};

	static disconnect = () => {
		console.log("GPS Desconectado");
	};
}