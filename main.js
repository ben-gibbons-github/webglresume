
var currentScreen = 0;

function init() {
	initStartScreen();
}

function update(deltaTime) {
	if (currentScreen == 0)
		updateStartScreen(deltaTime);
	if (currentScreen == 1)
		updateGameWorld(deltaTime);
} 

//class BossGuy
function BossGuy(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.size = 150;
	
	this.gravity = -0.02;
	this.velocity = 0;
	this.spin = 0;
	this.rot = -1;
	this.rotTarget = 1;
	this.squish = 1;
	this.squishVel = 0;
}

//draw for BossGuy
function drawBossGuy() {

	var drawSizeX = this.size * 1.5 * this.rot / this.squish;
	var drawSizeY = this.size * this.squish;
	var dY = this.y - this.size * (1 - this.squish);
	
	addLine(this.x + 0.25 * drawSizeX, dY - drawSizeY, this.z, 
		this.x - 0.25 * drawSizeX, dY - drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 0.25 * drawSizeX, dY - drawSizeY, this.z, 
		this.x - 0.5 * drawSizeX, dY - 0.66 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 0.5 * drawSizeX, dY - 0.66 * drawSizeY, this.z, 
		this.x - 0.5 * drawSizeX, dY + 0.5 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 0.5 * drawSizeX, dY + 0.5 * drawSizeY, this.z, 
		this.x, dY + drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x, dY + drawSizeY, this.z, 
		this.x + 0.5 * drawSizeX, dY + 0.66 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x + 0.5 * drawSizeX, dY + 0.66 * drawSizeY, this.z, 
		this.x + 0.33 * drawSizeX, dY + 0.33 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x + 0.33 * drawSizeX, dY + 0.33 * drawSizeY, this.z, 
		this.x - 0.33 * drawSizeX, dY + 0.33 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 0.33 * drawSizeX, dY + 0.33 * drawSizeY, this.z, 
		this.x - 0.33 * drawSizeX, dY - 0.33 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 0.33 * drawSizeX, dY - 0.33 * drawSizeY, this.z, 
		this.x + 0.25 * drawSizeX, dY - 0.25 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x + 0.25 * drawSizeX, dY - 0.25 * drawSizeY, this.z, 
		this.x + 0.3 * drawSizeX, dY - 0.66 * drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x + 0.3 * drawSizeX, dY - 0.66 * drawSizeY, this.z, 
		this.x + 0.25 * drawSizeX, dY - drawSizeY, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
}

//update for BossGuy
function updateBossGuy(deltaTime) {
	
	this.velocity += deltaTime * this.gravity / 8;
	this.spin += deltaTime * 0.001;
	
	var rightX = 10000;
	var leftX = -10000;
	var gravityActive = 1;
	
	for (var i = 0; i < solidObjects.length; i++) {
		if (this.x + this.size * 2 > solidObjects[i].x - solidObjects[i].sizeX &&
			this.x - this.size * 2 < solidObjects[i].x + solidObjects[i].sizeX) {
			if (this.x + this.size > solidObjects[i].x - solidObjects[i].sizeX &&
				this.x - this.size < solidObjects[i].x + solidObjects[i].sizeX &&
				this.y - this.size - solidObjects[i].sizeY + this.velocity < solidObjects[i].y &&
				this.y - this.size > solidObjects[i].y) {
				gravityActive = 0;
				this.y = solidObjects[i].y + solidObjects[i].sizeY + this.size;
			}
			if (this.y > solidObjects[i].y - solidObjects[i].sizeY - this.size &&
				this.y < solidObjects[i].y + solidObjects[i].sizeY + this.size) {
				if (solidObjects[i].x + solidObjects[i].sizeX + this.size > leftX && 
					solidObjects[i].x + solidObjects[i].sizeX + this.size < this.x)
					leftX = solidObjects[i].x + solidObjects[i].sizeX + this.size;
				if (solidObjects[i].x - solidObjects[i].sizeX - this.size < rightX && 
					solidObjects[i].x - solidObjects[i].sizeX - this.size > this.x)
					rightX = solidObjects[i].x - solidObjects[i].sizeX - this.size;
			}
		}
	}
	
	if (gravityActive == 1) {
		this.y += deltaTime * this.velocity / 4;
		this.jumps = 0;
	}
	else {
		if (this.velocity < -1)
			this.squishVel = 1;
		this.velocity = 0;
		this.jumps = 1;
	}
	
	if (this.squishVel == 1) {
		this.squish += (0.5 - this.squish) * 0.0025 * deltaTime;
		if (this.squish < 0.6)
			this.squishVel = -1;
	} else if (this.squishVel == -1) {
		this.squish += (1 - this.squish) * 0.0025 * deltaTime;
		if (this.squish > 0.9 && this.squish < 1.05)
			this.squishVel = 2;
	} else if (this.squishVel == -2) {
		this.squish += (1.5 - this.squish) * 0.0025 * deltaTime;
		if (this.squish > 1.4)
			this.squishVel = -1;
	} else if (this.squishVel == 2) {
		this.squish += (1.2 - this.squish) * 0.0025 * deltaTime;
		if (this.squish > 1.1)
			this.squishVel = -1;
	}
	
	var left = false;
	var right = false;

	var up = true;


	if (this.size == 150)
	{
		if (this.x > stickman.x)
			left = true;
		else
			right = true;

		if (stickman.x + stickman.size * 0.5 > this.x - this.size * 0.5)
		{	
			if (stickman.y > this.y + this.size * 0.5)
				this.size *= 0.975;
			else
				stickman.x = this.x - (this.size + stickman.size) * 0.5;
		}
	} else {
		this.size *= 0.975;
	}
	if (up) {

		if (this.superJumps > 0) {

			this.velocity = 3;
			this.jumps = 0;
			this.superJumps = -2;

		} else if (this.jumps > 0) {
			this.velocity = 1;
			this.jumps = 0;
			this.superJumps += 1;
		}
	}
	if (right) {
		if (this.x + deltaTime / 8 < rightX)
			this.x += deltaTime / 8;
		// this.walk += deltaTime / 8;
		this.rot += (1 - this.rot) * 0.025 * deltaTime;
	}
	if (left) {
		if (this.x - deltaTime / 8 > leftX)
			this.x -= deltaTime / 8;
		// this.walk -= deltaTime / 8;
		this.rot += (-1 - this.rot) * 0.025 * deltaTime;
	}
}

BossGuy.prototype.draw = drawBossGuy;
BossGuy.prototype.update = updateBossGuy;

//class StickMan()
function StickMan(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.size = 25;
	
	this.gravity = -0.02;
	this.velocity = 0;
	this.walk = 0;
	this.cameraFree = false;
	this.jumps = 0;
}

//draw for StickMan
function drawStickMan() {
	addLine(this.x + 25, this.y - 25, this.z, 
		this.x, this.y, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 25, this.y - 25, this.z, 
		this.x, this.y, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x, this.y, this.z, 
		this.x, this.y + 25, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x + 25, this.y + 50, this.z, 
		this.x, this.y + 25, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 25, this.y + 50, this.z, 
		this.x, this.y + 25, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 10, this.y + 60, this.z, 
		this.x + 10, this.y + 60, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 10, this.y + 40, this.z, 
		this.x + 10, this.y + 40, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x - 10, this.y + 40, this.z, 
		this.x - 10, this.y + 60, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
	addLine(this.x + 10, this.y + 40, this.z, 
		this.x + 10, this.y + 60, this.z, 
		0, 0, 0, 1,
		0, 0, 0, 1);
}

//update for stickman
function updateStickMan(deltaTime) {
	
	this.velocity += deltaTime * this.gravity / 4;
	
	var rightX = 10000;
	var leftX = -10000;
	var gravityActive = 1;
	
	for (var i = 0; i < solidObjects.length; i++) {
		if (this.x + this.size * 2 > solidObjects[i].x - solidObjects[i].sizeX &&
			this.x - this.size * 2 < solidObjects[i].x + solidObjects[i].sizeX) {
			if (this.x + this.size > solidObjects[i].x - solidObjects[i].sizeX &&
				this.x - this.size < solidObjects[i].x + solidObjects[i].sizeX &&
				this.y - this.size - solidObjects[i].sizeY + this.velocity < solidObjects[i].y &&
				this.y - this.size > solidObjects[i].y) {
				gravityActive = 0;
				this.y = solidObjects[i].y + solidObjects[i].sizeY + this.size;
			}
			if (this.y > solidObjects[i].y - solidObjects[i].sizeY - this.size &&
				this.y < solidObjects[i].y + solidObjects[i].sizeY + this.size) {
				if (solidObjects[i].x + solidObjects[i].sizeX + this.size > leftX && 
					solidObjects[i].x + solidObjects[i].sizeX + this.size < this.x)
					leftX = solidObjects[i].x + solidObjects[i].sizeX + this.size;
				if (solidObjects[i].x - solidObjects[i].sizeX - this.size < rightX && 
					solidObjects[i].x - solidObjects[i].sizeX - this.size > this.x)
					rightX = solidObjects[i].x - solidObjects[i].sizeX - this.size;
			}
		}
	}
	
	if (gravityActive == 1) {
		this.y += deltaTime * this.velocity / 4;
		this.jumps = 0;
	}
	else {
		this.velocity = 0;
		this.jumps = 1;
	}

	var clickLeft = false;
	var clickRight = false;
	var clickUp = false;

	for (var i = 0; i < mouseDown; i++)
	{
		if (mouseY[i] > window.innerHeight * 0.8)
		{
			if (!clickLeft)
				clickLeft = mouseX[i] < window.innerWidth * 0.2;
			if (!clickRight)
				clickRight = mouseX[i] > window.innerWidth * 0.2 && mouseX[i] < window.innerWidth * 0.4;
			if (!clickUp)
				clickUp = mouseX[i] > window.innerWidth * 0.8;
		}
	}

	if (currentlyPressedKeys[38] || clickUp || currentlyPressedKeys[87] || currentlyPressedKeys[17] || currentlyPressedKeys[32]) {
		if (this.jumps > 0) {
			this.velocity = 2.5;
			this.jumps = 0;
		}
		this.cameraFree = true;
	}
	if (currentlyPressedKeys[39] || clickRight || currentlyPressedKeys[68]) {
		if (this.x + deltaTime / 4 < rightX)
			this.x += deltaTime / 4;
		this.walk += deltaTime / 4;
		this.cameraFree = true;
	}

	if (currentlyPressedKeys[37] || clickLeft || currentlyPressedKeys[65]) {
		if (this.x - deltaTime / 4 > leftX)
			this.x -= deltaTime / 4;
		this.walk -= deltaTime / 4;
		this.cameraFree = true;
	}
	if (this.walk > 100)
		this.walk -= 100;
	if (this.walk < 0)
		this.walk += 100;
		
	if (this.cameraFree) {
		
		if (this.x > 1900 && this.x < 2200) {
			var nx = (this.x + 2200) / 2;
			var ny = (this.y - 400) / 2;
			cameraX += (nx - cameraX) * 0.0025 * deltaTime;
			cameraY += (ny - cameraY) * 0.0025 * deltaTime;
			lookX += (nx - lookX) * 0.005 * deltaTime;
			lookY += (ny - lookY) * 0.005 * deltaTime;
		} else {
			cameraX += (this.x - cameraX) * 0.0025 * deltaTime;
			cameraY += (this.y - cameraY) * 0.0025 * deltaTime;
			lookX += (this.x - lookX) * 0.005 * deltaTime;
			lookY += (this.y - lookY) * 0.005 * deltaTime;
		}	
	}
	
	if (this.x > 200) {
		gameWorldAlpha -= deltaTime * 0.01;
		
		if (this.x > 350) {
			gameWorldJumpAlpha -= deltaTime * 0.1;
			gameWorldNiceAlpha += deltaTime * 0.01;
		} else {
			gameWorldJumpAlpha += deltaTime * 0.01;
			if (gameWorldJumpAlpha > 10)
				gameWorldJumpAlpha = 10;
		} 
	} else {
		gameWorldAlpha += deltaTime * 0.001;
		if (gameWorldAlpha > 5)
			gameWorldAlpha = 5;
	}
	
	
	if (this.y < -300) {
		gameWorldGoalAlpha += deltaTime * 0.01;
		if (this.x > 200) {
			//gameWorldEducationAlpha += deltaTime * 0.01;
			if (this.x > 800) {
				gameWorldEducationAlpha += deltaTime * 0.01;
				if (this.x > 1200) {
					gameWorldEducationGoalAlpha += deltaTime * 0.01;
					if (this.x > 1600) {
						gameWorldCourseWorkAlpha += deltaTime * 0.01;
						if (this.x > 1800) {
							gameWorldExperienceAlpha += deltaTime * 0.01;
							if (this.x > 2200) {
								gameWorldBoringAlpha += deltaTime * 0.02;
								if (this.x > 2500 && !bossSpawned) {
									bossSpawned = true;
									addGameObject(new BossGuy(2800, -400 ,0))
								}
								if (this.x > 2800) {
									gameWorldThatsAllAlpha += deltaTime * 0.02;
								}

								if (this.x > 3000) {
									  this.x = 2600;
									  window.location.href = "http://bgibbonsweb.github.io/"
								}
							}
						}
					}
				}
			}
		}
	}
}

StickMan.prototype.draw = drawStickMan;
StickMan.prototype.update = updateStickMan;


var gameWorldAlpha = 0;
var gameWorldJumpAlpha = 0;
var gameWorldNiceAlpha = 0;
var gameWorldGoalAlpha = 0;
var gameWorldEducationAlpha = 0;
var gameWorldEducationGoalAlpha = 0;
var gameWorldCourseWorkAlpha = 0;
var gameWorldExperienceAlpha = 0;
var gameWorldBoringAlpha = 0;
var gameWorldThatsAllAlpha = 0;
var bossSpawned = false;
var solidObjects = [];
var stickman = 0;


function updateGameWorld(deltaTime) {
	if (window.innerWidth > 0)
		cameraZ += ((window.innerHeight / window.innerWidth + 1) * 400 - cameraZ) * 0.001 * deltaTime;

	if (isMobile)
		drawString(-200, -100, 0, 20, gameWorldAlpha / 3, "Hold left and right to move\nthe StickMan");
	else
		drawString(-200, -100, 0, 20, gameWorldAlpha / 3, "Use Arrowkeys to move the stickman");

	if (!isMobile)
		drawString(250, -50, 0, 20, gameWorldJumpAlpha / 8, "Hold up \narrow to jump");
	else
		drawString(250, -50, 0, 20, gameWorldJumpAlpha / 8, "Tap on the jump button");

	//drawString(400, -50, 0, 20, gameWorldNiceAlpha / 8, "Nice!");
	drawString(600, -50, 0, 20, gameWorldNiceAlpha / 30, "Fall");
	drawString(400, -200, 0, 10, gameWorldGoalAlpha / 30, 
		"Hi my name is Ben! \nIve been coding ever since I was seven years\nold and I have worked with a wide range of\ntechnology mediums through my work and my personal projects.\nIm also a skilled graphic designer\nand Ive been working with Cinema4D ever since I was ten.");
	drawString(800, -200, 0, 10, gameWorldEducationAlpha / 30, 
		"Im also a volunteer leader and I try to\nhelp lead at least one volunteer project every week.");
	drawString(1200, -200, 0, 10, gameWorldEducationGoalAlpha / 30, 
		"EDUCATION\nPeralta Colleges, Berkeley, Oakland, Alameda, Merit, CA\nCompleted 53 semester units with 4.0 GPA. Computer Science");
	drawString(1600, -200, 0, 10, gameWorldCourseWorkAlpha / 30, 
		"SKILLS\nJava, Csharp, C++, JavaScript, React, Node.js,\nWebGL, OpenGL, MongoDB, HLSL\nGraphic Design and 3D modeling\nMobile App Design\nFull stack web development");

	drawString(2000, -200, 0, 10, gameWorldExperienceAlpha / 30, 
		"EXPERIENCE:\nCustomer Engagement Team, Avid, Berkeley, CA\nSoftware Engineer\nMarch 2015 to present.\n­C++, Objective C, UI design, Node.JS, React.\n\nHands On Bay Area, CA\nVolunteer Project Leader\nMay 2018 to present.\n\nCustomer Engagement Team, Avid, Berkeley, CA\nIntern Software Engineer\nMay 2013 to March 2015.\n\nCIS Department, Laney College, Oakland, CA\nTeaching Assistant, CIS 25: C++\nJanuary 2013 to May 2014\n\nAdmin and graphic design for various\nBerkeley nonprofits over a 3 year+ commitment\n\nOver 200+ volunteer hours with various other non profits)");

	drawString(2100, -550, 0, 10, gameWorldExperienceAlpha / 30, 
		"As personal projects, I have\nbuilt three large video games\nfor XBOX and Windows,\nmultiple large web projects,\nand an online multiplayer mobile\ngame for iOS, Android, and PC.");
	
	drawString(2400, -600, 0, 10, gameWorldBoringAlpha / 30, 
		"Now the boring stuff out of the way\n Time for a boss fight");

	drawString(2800, -600, 0, 10, gameWorldThatsAllAlpha / 30, 
		"Thats all folks.\nKeep walking right to get redirected to my website");
}

function addSolidObject(newObject) {
	addGameObject(newObject);
	solidObjects = solidObjects.concat(newObject);
}

function initGameWorld() {
	gameObjects = [];
	
	if (isMobile)
	{
		{
			var button = document.getElementById("leftButton");
			button.style.visibility = "visible";
		}
		{
			var button = document.getElementById("rightButton");
			button.style.visibility = "visible";
		}
		{
			var button = document.getElementById("upButton");
			button.style.visibility = "visible";
		}
	}

	lookX = 0;
	lookY = 0;
	lookZ = 0;
	cameraX = 0;
	cameraY = 0;
	cameraZ = 10000;
	
	addSolidObject(new LineCube(-250, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-250, 50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-250, 100 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-250, 150 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-250, 200 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-250, 250 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-250, 300 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-200, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-150, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-100, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(-50, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(0, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(50, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(100, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(150, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(200, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(250, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(300, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(350, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(350, 50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(400, 50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(450, 50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(500, 50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(550, 50 ,0, 25, 25, 25, 0.001));
	
	//right wall
	addSolidObject(new LineCube(700, -150 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, -100 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, -50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, 0 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, 50 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, 100 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, 150 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, 200 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(700, 250 ,0, 25, 25, 25, 0.001));
	
	//below rwall
	for (var x = 250; x < 1950; x += 50)
		addSolidObject(new LineCube(x, -400 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(1950, -450 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(1950, -500 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(2000, -550 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(2050, -600 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(2050, -650 ,0, 25, 25, 25, 0.001));
	
	for (var x = 2100; x < 3000; x += 50)
		addSolidObject(new LineCube(x, -700 ,0, 25, 25, 25, 0.001));
	
	//lwall
	addSolidObject(new LineCube(250, -400 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(250, -350 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(250, -300 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(250, -250 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(250, -200 ,0, 25, 25, 25, 0.001));
	addSolidObject(new LineCube(250, -150 ,0, 25, 25, 25, 0.001));
	
		
	for (var i = 0; i < 40; i++) {
		var c = new LineCube(Math.random() * 1600 - 800, Math.random() * 800 ,Math.random() * 1600 - 800, 10, 10, 10, 0.001);
		addGameObject(c);
		if (c.x < 100 && c.x > -100 && c.y > -100 && c.y < 100)
			c.x += 100;
	}
	
	stickman = new StickMan(0, 64, 0);
	addGameObject(stickman);
}