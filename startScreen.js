
var startScreenAlpha = 0;
var welcomeAlpha = 0;
var startScreenSpacePressed = false;


function initStartScreen() {
	for (var i = 0; i < 10; i++) {
		addGameObject(new LineBox(0, 50, -100 * i, 200, 200, 0.00125 - 0.00005 * i));
		addGameObject(new LineBox(0, 50, -100 * i, 200, 200, 0.001 - 0.00075 * i));
	}
}

function updateStartScreen(deltaTime) {
	startScreenAlpha += 0.001 * deltaTime;

	if (isMobile)
		drawString(-150, 200, -1000, 100, startScreenAlpha / 5, "Tap\nme");
	else
		drawString(-150, 200, -1000, 100, startScreenAlpha / 5, "Press\nSpace");

	drawString(-300, -200, 0, 50, startScreenAlpha / 5, "Bens WebGL Resume");
	
	cameraX += (100 - cameraX) * 0.001 * deltaTime;
	cameraY += (100 - cameraY) * 0.001 * deltaTime;
	
	if ((currentlyPressedKeys[32] || mouseDown > 0) && startScreenAlpha > 3)
		startScreenSpacePressed = true;


	if (startScreenSpacePressed) {
		cameraX += (100 - cameraX) * 0.001 * deltaTime;
		cameraY += (100 - cameraY) * 0.001 * deltaTime;
		
		cameraZ -= deltaTime;
		lookZ -= deltaTime;
		
		if (cameraZ < 400) {
			welcomeAlpha += deltaTime * 0.0005;
			drawString(-300, -100, -4000, 200, welcomeAlpha, "Welcome");
			if (cameraZ < -4000) {
				currentScreen = 1;
				initGameWorld();
			}
		}
	} else {
		if (currentlyPressedKeys[38] || currentlyPressedKeys[87])
			cameraY += deltaTime;
		if (currentlyPressedKeys[40] || currentlyPressedKeys[83])
			cameraY -= deltaTime;
		if (currentlyPressedKeys[39] || currentlyPressedKeys[68])
			cameraX += deltaTime;
		if (currentlyPressedKeys[37] || currentlyPressedKeys[65])
			cameraX -= deltaTime;

		cameraZ = (window.innerHeight / window.innerWidth + 1) * 700;
	}
}