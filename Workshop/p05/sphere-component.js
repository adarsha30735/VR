AFRAME.registerComponent('my-color-toggle', {
	init: function() {
		let el = this.el;
		
		this.toggleColor = function() { // adding a method
			el.setAttribute('color','orange');
			console.log("toggleColor event");
			alert("clicked");
		};
		
		
		this.el.addEventListener('click', this.toggleColor, { passive: true });
	},
	remove: function() {
		this.el.removeEventListener('click', this.toggleColor);
	}
});