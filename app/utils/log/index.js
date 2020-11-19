import { isFDroidBuild } from '../../constants/environment';
import config from '../../../config';
import events from './events';

export { events };

let metadata = {};

export const logServerVersion = (serverVersion) => {
	metadata = {
		serverVersion
	};
};

export const logEvent = (eventName, payload) => {
	try {
		if (!isFDroidBuild) {
		}
	} catch {
		// Do nothing
	}
};

export const setCurrentScreen = (currentScreen) => {
	if (!isFDroidBuild) {
	}
};

export default (e) => {
	console.log(e);
};
