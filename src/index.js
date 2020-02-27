import Vue from 'vue'
import { setupIonic } from "./ionic"
import App from './App.vue'

// #1 load ionic first

// [Error] TypeError: 'text/html' is not a valid JavaScript MIME type.
	// promiseReactionJob
	// [Error] Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'Cstr.isProxied')
	// 	(anonymous function)
	// 	rejectPromise
	// 	promiseReactionJob

setupIonic().then(() => {
	console.log('Ionic loaded')

	new Vue({
		el: '#app',
		render: h => h(App),
		mounted: function () {
			console.log('Vue mounted')
		}
	})
})


// #2 load vue first

// Error: unknown custom element <ion-button>
// [Error] TypeError: 'text/html' is not a valid JavaScript MIME type.
	// promiseReactionJob
	// [Error] Unhandled Promise Rejection: TypeError: undefined is not an object (evaluating 'Cstr.isProxied')
	// 	(anonymous function)
	// 	rejectPromise
	// 	promiseReactionJob

// new Vue({
// 	el: '#app',
// 	render: h => h(App),
// 	mounted: function () {
// 		console.log('Vue mounted')

// 		setupIonic().then(() => {
// 			console.log('Ionic loaded')
// 		})
// 	}
// })

