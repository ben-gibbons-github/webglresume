	  
var gl;
var shaderProgram;

var viewMatrix = mat4.create();
var projectionMatrix = mat4.create();

var vertexPositionBuffer;
var vertexColorBuffer;
var bufferIndex;
var maxBuffer;
var canvas;
			
function setMatrixUniforms() {
	gl.uniformMatrix4fv(shaderProgram.projectionMatrixUniform, false, projectionMatrix);
	gl.uniformMatrix4fv(shaderProgram.viewMatrixUniform, false, viewMatrix);
}

var mouseDown = 0;
var mouseX = [0, 0, 0, 0];
var mouseY = [0, 0, 0, 0];

function doTouch(event) {
	mouseDown = event.touches.length;
	for (var i = 0; i < mouseDown && i < mouseX.length; i++)
	{
		mouseX[i] = event.touches[i].clientX;
		mouseY[i] = event.touches[i].clientY;
	}
	console.log(mouseDown);
}

function webGLStart() {


	document.body.onmousedown = function(event) { 
		if (mouseDown < 4)
		{
			mouseX[mouseDown] = event.clientX;
			mouseY[mouseDown] = event.clientY;
		}
		mouseDown++;
	}
	document.body.onmouseup = function(event) {
	  --mouseDown;
	}

	document.body.ontouchstart = doTouch;
	document.body.ontouchmove = doTouch;
	document.body.ontouchend = doTouch;
	document.body.ontouchcancel = doTouch;

	canvas = document.getElementById("webGlCanvas");

	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
 
	document.body.onresize = function(event) {
		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	initGL(canvas);
	initShaders();
	initBuffers();

	gl.clearColor(1.0, 1.0, 1.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;

	tick();
}
	
function initGL(canvas) {
	try {
		gl = canvas.getContext("experimental-webgl");
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;

		if (isMobile)
		{
			var deskLinks = document.getElementById("deskLinks");
			deskLinks.style.visibility = "hidden";
			var mobileInfo = document.getElementById("mobileInfo");
			mobileInfo.style.visibility = "visible";
		}

	} catch(e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry  ");
		var nowebgl = document.getElementById("nowebgl");
		nowebgl.style.visibility = "visible";
		canvas.style.visibility = "hidden";
	}
}

function getShader(gl, id) {
	var shaderScript = document.getElementById(id);
	if (!shaderScript) {
		return null;
	}

	var str = "";
	var k = shaderScript.firstChild;
	while (k) {
		if (k.nodeType == 3)
			str += k.textContent;
			k = k.nextSibling;
	}
	var shader;
	if (shaderScript.type == "fragmentSource") {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
	} else if (shaderScript.type == "vertexSource") {
		shader = gl.createShader(gl.VERTEX_SHADER);
	} else {
		return null;
	}
	gl.shaderSource(shader, str);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(gl.getShaderInfoLog(shader));
		return null;
	}

	return shader;
}

function initShaders() {
	var fragmentShader = getShader(gl, "shaderFs");
	var vertexShader = getShader(gl, "shaderVs");

	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	  alert("Could not initialise shaders");
	}

	gl.useProgram(shaderProgram);
	
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
	
	shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
	gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

	shaderProgram.projectionMatrixUniform = gl.getUniformLocation(shaderProgram, "uProjectionMatrix");
	shaderProgram.viewMatrixUniform = gl.getUniformLocation(shaderProgram, "uViewMatrix");
}


function tick() {
	requestAnimFrame(tick);
	stepFrame();
	drawScene();
}				
			
var deltaMax = 60;
var lastTime = 0;
function stepFrame() {
	var timeNow = new Date().getTime();
	if (lastTime != 0) {
		var deltaTime = timeNow - lastTime;
		resetBuffer();
		
		if (deltaTime > deltaMax)
			deltaTime = deltaMax;
		
		update(deltaTime);
		
		for (var i = 0; i < gameObjects.length; i++)
		{
			gameObjects[i].update(deltaTime);
			gameObjects[i].draw();
		}

		fillBuffer();
	}
	lastTime = timeNow;
}

function resetBuffer() {
	bufferIndex = 0;
}

function fillBuffer() {
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.DYNAMIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
}

function addLine(x1, y1, z1,
	x2, y2, z2, 
	r1, b1, g1, a1, 
	r2, b2, g2, a2) {

	verticies[bufferIndex * 6] = x1;
	verticies[bufferIndex * 6 + 1] = y1;
	verticies[bufferIndex * 6 + 2] = z1;
	
	verticies[bufferIndex * 6 + 3] = x2;
	verticies[bufferIndex * 6 + 4] = y2;
	verticies[bufferIndex * 6 + 5] = z2;
	
	colors[bufferIndex * 8] = r1;
	colors[bufferIndex * 8 + 1] = b1;
	colors[bufferIndex * 8 + 2] = g1;
	colors[bufferIndex * 8 + 3] = a1;
	
	colors[bufferIndex * 8 + 4] = r2;
	colors[bufferIndex * 8 + 5] = b2;
	colors[bufferIndex * 8 + 6] = g2;
	colors[bufferIndex * 8 + 7] = a2;
	
	bufferIndex += 1;
}
	
verticies = [];
colors = [];

function initBuffers() {
	bufferIndex = 0;
	maxBuffer = 400;

	for (var i = 0; i < maxBuffer; i++) {
		verticies = verticies.concat([0, 0, 0, 0, 0, 0]);
	}
	
	vertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.DYNAMIC_DRAW);
	vertexPositionBuffer.itemSize = 3;

	for (var i = 0; i < maxBuffer; i++) {
		colors = colors.concat([0, 0, 0, 1, 0, 0, 0, 1]);
	}
	
	vertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);
	vertexColorBuffer.itemSize = 4;
	
	init();
}


var currentlyPressedKeys = {};

 function handleKeyDown(event) {
	currentlyPressedKeys[event.keyCode] = true;
}

function handleKeyUp(event) {
	currentlyPressedKeys[event.keyCode] = false;
}



var cameraX = 2500;
var cameraY = 2500;
var cameraZ = 600;

var lookX = 0;
var lookY = 0;
var lookZ = 0;

function drawScene() {
	
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	gl.viewportWidth = canvas.width;
	gl.viewportHeight = canvas.height;

	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	projectionMatrix = mat4.multiply(
	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 
		1, 10000.0),
		mat4.lookAt([cameraX, cameraY, cameraZ], [lookX, lookY, lookZ], [0, 1, 0]));
		
	//mat4.lookAt([cameraX, cameraY, cameraZ], [lookX, lookY, lookZ], [0, 1, 0], projectionMatrix);
	
	mat4.identity(viewMatrix);
	//mat4.translate(viewMatrix, [0, 0.0, -500.0]);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
		vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 
		vertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	
	setMatrixUniforms();
	gl.drawArrays(gl.LINES, 0, bufferIndex * 2);
}
var gameObjects = [];
function addGameObject(newObject) {
	gameObjects = gameObjects.concat(newObject);
}
