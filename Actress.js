var game = null;
window.onload = function() {
	document.body.style.backgroundColor = "#000000";
	game = new Actress(960, 640);
	game.fps = 30;
	game.preload('./images/gameandwatch.png');
	game.preload('./images/button.png');
	game.preload('./images/screen.png');
	game.start();
};

var Actress = Class.create(Game, {
	//
	initialize : function(width, heigth) {
		Game.call(this, width, heigth);

	},
	onload : function() {
		// background
		var bg = new Sprite(960, 640);
		bg.image = this.assets["./images/gameandwatch.png"];
		this.rootScene.addChild(bg);

		var screen = new Sprite(408, 272);
		screen.image = this.assets["./images/screen.png"];
		screen.x = 35 * 8;
		screen.y = 19 * 8;
		this.rootScene.addChild(screen);

		// left button
		var leftButton = new Sprite(96, 96);
		leftButton.x = 10 * 8;
		leftButton.y = 50 * 8;
		leftButton.image = this.assets["./images/button.png"];
		leftButton.frame = 0;
		leftButton.ontouchstart = function() {
			this.frame = 1;
		};
		leftButton.ontouchend = function() {
			this.frame = 0;
		};
		this.rootScene.addChild(leftButton);

		// right button
		var rightButton = new Sprite(96, 96);
		rightButton.x = 99 * 8;
		rightButton.y = 50 * 8;
		rightButton.image = this.assets["./images/button.png"];
		rightButton.frame = 0;
		rightButton.ontouchstart = function() {
			this.frame = 1;
		};
		rightButton.ontouchend = function() {
			this.frame = 0;
		};
		this.rootScene.addChild(rightButton);

	},

	onenterframe : function() {

	},

});