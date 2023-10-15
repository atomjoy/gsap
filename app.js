document.addEventListener('DOMContentLoaded', function (event) {
	console.log('DOM loaded')

	// On load with event listener
	window.addEventListener(
		'load',
		function (e) {
			// Custom GSAP code goes here

			gsap.to('.my-element', {
				rotation: 360,
				duration: 2,
				ease: 'bounce.out',
			})

			console.log('window loaded')
		},
		false
	)

	// On load with arrow functions
	window.onload = () => {
		console.log('window loaded')
	}
})

// <div id="smooth-wrapper">
//   <div id="smooth-content">
//     <!--- ALL YOUR CONTENT HERE --->
//   </div>
// </div>
// <!-- position: fixed elements can go outside -->
