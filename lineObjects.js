
//class lineBall()
function LineBall(x, y, z, size, lineCount) {
	this.alpha = 0;
	this.size = size;
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.points = [];
	for (var i = 0; i < lineCount; i++)
		this.points = this.points.concat([Math.random() * this.size * 2 - this.size,
						Math.random() * this.size * 2 - this.size,
						Math.random() * this.size * 2 - this.size]);
						
	this.lineCount = lineCount;
}
//draw for line ball
function drawLineBall() {
	for (var i = 0; i < this.lineCount; i++)
		addLine(
			this.x, this.y, this.z,
			this.x + this.points[i * 3] * this.alpha, this.y + this.points[i * 3 + 1] * this.alpha, this.z + this.points[i * 3 + 2] * this.alpha,
			0, 0, 0, this.alpha * this.alpha,
			0, 0, 0, 0);
}						

//update for line ball
function updateLineBall(alpha) {
	this.alpha += alpha;
	if (this.alpha > 1)
		this.alpha = 1;
}

LineBall.prototype.draw = drawLineBall;
LineBall.prototype.update = updateLineBall;

//class LineBox()
function LineBox(x, y, z, sizeX, sizeY, changeSpeed) {
	this.alpha = 0;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.x = x;
	this.y = y;
	this.z = z;
	this.changeSpeed = changeSpeed;
}
//draw for line box
function drawLineBox() {
	addLine(
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z,
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z,
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
}

//update for line box
function updateLineBox(alpha) {
	this.alpha += alpha * this.changeSpeed;
	if (this.alpha > 1)
		this.alpha = 1;
}

LineBox.prototype.draw = drawLineBox;
LineBox.prototype.update = updateLineBox;


//class LineCube()
function LineCube(x, y, z, sizeX, sizeY, sizeZ, changeSpeed) {
	this.alpha = 0;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.sizeZ = sizeZ;
	this.x = x;
	this.y = y;
	this.z = z;
	this.changeSpeed = changeSpeed;
}
//draw for line cube
function drawLineCube() {
//front face
	addLine(
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
//back face
	addLine(
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
//mid lines
	addLine(
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x - this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
		
	addLine(
		this.x - this.sizeX * this.alpha, this.y - this.sizeY * this.alpha, this.z - this.sizeZ * this.alpha,
		this.x + this.sizeX * this.alpha, this.y + this.sizeY * this.alpha, this.z + this.sizeZ * this.alpha,
		0, 0, 0, this.alpha * this.alpha,
		0, 0, 0, this.alpha * this.alpha);
}

//update for line cube
function updateLineCube(alpha) {
	this.alpha += alpha * this.changeSpeed;
	if (this.alpha > 1)
		this.alpha = 1;
}

LineCube.prototype.draw = drawLineCube;
LineCube.prototype.update = updateLineCube;
