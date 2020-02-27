import { IonicConfig } from "@ionic/core";
import "@ionic/core/css/ionic.bundle.css";
import { defineCustomElements } from "@ionic/core/loader";

export function setupIonic() {
	if (window === undefined) {
		throw new Error("Setup ionic should be called client side only.");
	}

	// const win = window & {
	// 	Ionic: { config: IonicConfig }
	// };
	// const Ionic = (win.Ionic = win.Ionic || { config: {} });

	// Ionic.config = {};

	const Ionic = { config: IonicConfig || {} };
	window.Ionic = Ionic;

	return new Promise((resolve, reject) => {
		defineCustomElements(window)
			.then(resolve)
			.catch(reject);
	});
}

export default setupIonic;