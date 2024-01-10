AFRAME.registerComponent('my-color-toggle', {
	init: function() {
		console.log("zero");
		let el = this.el;
		let data = this.data;
		console.log("init");
		
		this.toggleColor = function() { // adding a method
			console.log("1");
			el.setAttribute('color','orange');
			console.log("toggleColor event");
			alert("clicked");
			
		};
		
		
		this.el.addEventListener('click', this.toggleColor, { passive: true });
		console.log("init-end");
	},
	remove: function() {
		console.log("4");
		this.el.removeEventListener('click', this.toggleColor);
	}
});