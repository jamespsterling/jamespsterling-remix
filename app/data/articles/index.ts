// These must be lower case for dynamic importing
import { default as ioteventsapp } from "./iot-events-app";
import { default as portfolio } from "./portfolio";

const articles: Record<string, React.ComponentType> = {
	ioteventsapp,
	portfolio,
};

export default articles;
