var main = new Main();

(function tick() {
	main.draw();
	window.requestAnimationFrame(tick);
})();

/**
 * Main
 * @constructor
 */
function Main() {
	this._c = document.getElementById("canvas");
	this._ctx = this._c.getContext("2d");

	$(window).resize($.proxy(this._onResize, this));
	this._onResize();

	for(var i = 0; i < 20; i++) {

		var a = new Anchor(20, 20, 0.5);
		a.draw(this._ctx, "#FF0000", 4, 4);
		a.update();
	}
}

Main.prototype._onResize = function() {
	this._c.width = window.innerWidth;
	this._c.height = window.innerHeight;
};

/**
 * Drawing
 */
Main.prototype.draw = function() {
	this._ctx.clearRect(0, 0, this._c.width, this._c.height);
};