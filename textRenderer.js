
var dashPts = [
	0.2, 0, 0, -0.2, 0, 0,
];
var colonPts = [
	0, 0.2, 0, 0, 0.4, 0,
	0, -0.2, 0, 0, -0.4, 0,
];
var plusPts = [
	0.3, 0, 0, -0.3, 0, 0,
	0, 0.3, 0, 0, -0.3, 0,
];
var onePts = [
	0, 0.5, 0, 0, -0.5, 0,
	-0.15, 0.35, 0, 0, 0.5, 0,
];
var twoPts = [
	-0.25, -0.5, 0, 0.25, -0.5, 0,
	-0.25, -0.5, 0, 0.25, 0.3, 0,
	0.25, 0.3, 0, 0, 0.5, 0,
	0, 0.5, 0, -0.25, 0.3, 0,
];
var threePts = [
	-0.25, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.25, 0,
	0, 0, 0, 0.25, -0.25, 0,
	
	-0.25, 0, 0, 0, 0, 0,
	
	-0.25, 0.5, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0.25, 0,
	0, 0, 0, 0.25, 0.25, 0,
];
var fourPts = [
	0, 0.5, 0, 0, -0.5, 0,
	-0.25, 0, 0, 0.25, 0, 0,
	-0.25, 0, 0, -0.25, 0.3, 0,
];
var fivePts = [

	-0.25, 0.5, 0, 0.25, 0.5, 0,
	-0.25, 0.5, 0, -0.25, 0, 0,
	-0.25, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.25, 0,
	0, 0, 0, 0.25, -0.25, 0,
	
	-0.25, 0, 0, 0, 0, 0,
	
];
var sixPts = [
	-0.25, 0.25, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0.25, 0,
	0.25, 0.25, 0, 0, 0, 0,
	-0.25, 0.25, 0, 0, 0, 0,
	0, 0.5, 0, 0.25, 0.75, 0,
];
var sevenPts = [
	-0.25, -0.25, 0, 0, 0, 0,
	0, 0, 0, 0.25, -0.25, 0,
	0.25, -0.25, 0, 0, -0.5, 0,
	-0.25, -0.25, 0, 0, -0.5, 0,
];
var eightPts = [
	-0.25, -0.25, 0, 0, 0, 0,
	0, 0, 0, 0.25, -0.25, 0,
	0.25, -0.25, 0, 0, -0.5, 0,
	-0.25, -0.25, 0, 0, -0.5, 0,
	
	-0.25, 0.25, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0.25, 0,
	0.25, 0.25, 0, 0, 0, 0,
	-0.25, 0.25, 0, 0, 0, 0,
];
var ninePts = [
	-0.25, -0.25, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.25, 0,
	0.25, -0.25, 0, 0, 0, 0,
	-0.25, -0.25, 0, 0, 0, 0,
	0, -0.5, 0, 0.25, -0.75, 0,
];
var zeroPts = [
	-0.25, 0, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0, 0,
	0.25, 0, 0, 0, -0.5, 0,
	-0.25, 0, 0, 0, -0.5, 0,
];
var commaPts = [
	0, -0.45, 0, -0.25, -0.6, 0,
];
var dotPts = [
	0, -0.5, 0, 0, -0.6, 0,
];
var slashPts = [
	0.25, 0.5, 0, -0.25, -0.5, 0,
];
var aPts = [
	-0.4, -0.5, 0, 0, 0.5, 0,
	0.4, -0.5, 0, 0, 0.5, 0,
	0.2, 0, 0, -0.15, 0, 0,
];
var bPts = [
	-0.5, -0.5, 0, -0.5, 0.5, 0,
	
	-0.5, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.25, 0,
	0, 0, 0, 0.25, -0.25, 0,
	
	-0.5, 0, 0, 0, 0, 0,
	
	-0.5, 0.5, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0.25, 0,
	0, 0, 0, 0.25, 0.25, 0,
];
var cPts = [
	-0.4, -0.25, 0, -0.4, 0.25, 0,
	-0.4, -0.25, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.5, 0,
	-0.4, 0.25, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0.5, 0,
];
var dPts = [
	0.4, -0.25, 0, 0.4, 0.25, 0,
	0.4, -0.25, 0, 0, -0.5, 0,
	0, -0.5, 0, -0.25, -0.5, 0,
	0.4, 0.25, 0, 0, 0.5, 0,
	0, 0.5, 0, -0.25, 0.5, 0,
	-0.25, -0.5, 0, -0.25, 0.5, 0,
];
var ePts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, -0.5, 0, 0.25, -0.5, 0,
	-0.25, 0, 0, 0.25, 0, 0,
	-0.25, 0.5, 0, 0.25, 0.5, 0,
];
var fPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, 0.5, 0, 0.25, 0.5, 0,
	-0.25, 0, 0, 0.25, 0, 0,
];
var gPts = [
	-0.4, -0.25, 0, -0.4, 0.25, 0,
	-0.4, -0.25, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.5, 0,
	-0.4, 0.25, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.25, 0.5, 0,
	0.25, -0.5, 0, 0.25, 0, 0,
];
var hPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, 0, 0, 0.25, 0, 0,
	0.25, -0.5, 0, 0.25, 0.5, 0,
];
var iPts = [
	0, -0.5, 0, 0, 0.5, 0,
];
var jPts = [
	0, -0.5, 0, 0, 0.5, 0,
	0, -0.5, 0, -0.25, -0.5, 0,
	-0.25, -0.5, 0, -0.25, -0.25, 0,
];
var kPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, 0, 0, 0.25, -0.5, 0,
	-0.25, 0, 0, 0.25, 0.25, 0,
];
var lPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, -0.5, 0, 0.25, -0.5, 0,
];
var mPts = [
	-0.5, -0.5, 0, -0.25, 0.5, 0,
	0.5, -0.5, 0, 0.25, 0.5, 0,
	0, 0, 0, 0.25, 0.5, 0,
	0, 0, 0, -0.25, 0.5, 0,
];
var nPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, .5, 0, 0.25, -0.5, 0,
	0.25, -0.5, 0, 0.25, 0.5, 0,
];
var oPts = [
	-0.5, 0, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.5, 0, 0,
	0.5, 0, 0, 0, -0.5, 0,
	-0.5, 0, 0, 0, -0.5, 0,
];
var pPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, 0.5, 0, 0.25, 0.4, 0,
	-0.25, 0, 0, 0.25, 0.1, 0,
	0.25, 0.4, 0, 0.25, 0.1, 0,
];
var qPts = [
	-0.5, 0, 0, 0, 0.5, 0,
	0, 0.5, 0, 0.5, 0, 0,
	0.5, 0, 0, 0, -0.5, 0,
	-0.5, 0, 0, 0, -0.5, 0,
	0.5, -0.5, 0, 0, 0, 0,
];
var rPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, 0.5, 0, 0.25, 0.4, 0,
	-0.25, 0, 0, 0.25, 0.1, 0,
	0.25, 0.4, 0, 0.25, 0.1, 0,
	-0.25, 0, 0, 0.25, -0.5, 0,
];
var sPts = [
	0.25, 0.5, 0, -0.25, 0.4, 0,
	0.25, 0, 0, -0.25, 0.1, 0,
	-0.25, 0.4, 0, -0.25, 0.1, 0,
	
	-0.25, -0.5, 0, 0.25, -0.4, 0,
	-0.25, 0, 0, 0.25, -0.1, 0,
	0.25, -0.4, 0, 0.25, -0.1, 0,
];
var tPts = [
	0, -0.5, 0, 0, 0.5, 0,
	-0.4, 0.5, 0, 0.4, 0.5, 0,
];
var uPts = [
	-0.25, -0.5, 0, -0.25, 0.5, 0,
	-0.25, -0.5, 0, 0.25, -0.5, 0,
	0.25, -0.5, 0, 0.25, 0.5, 0,
];
var vPts = [
	-0.4, 0.4, 0, 0, -0.4, 0,
	0.4, 0.4, 0, 0, -0.4, 0,
];
var wPts = [
	-0.5, 0.5, 0, -0.25, -0.5, 0,
	0.5, 0.5, 0, 0.25, -0.5, 0,
	0, 0, 0, 0.25, -0.5, 0,
	0, 0, 0, -0.25, -0.5, 0,
];
var xPts = [
	0.4, 0.5, 0, -0.4, -0.5, 0,
	-0.4, 0.5, 0, 0.4, -0.5, 0,
];
var yPts = [
	-0.3, 0.5, 0, 0, 0, 0,
	0, 0, 0, 0, -0.5, 0,
	0.3, 0.5, 0, 0, 0, 0,
];
var zPts = [
	-0.4, -0.5, 0, 0.4, -0.5, 0,
	-0.4, -0.5, 0, 0.4, 0.5, 0,
	-0.4, 0.5, 0, 0.4, 0.5, 0,
];

var aLowerPts = [
	0.25, -0.5, 0, 0.25, 0.1, 0,
	
	0.25, 0.1, 0, -0.05, 0.1, 0,
	0.25, 0, 0, 0, 0, 0,
	
	0.25, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, -0.25, -0.25, 0,
	0, 0, 0, -0.25, -0.25, 0,
];
var bLowerPts = [
	-0.3, -0.5, 0, -0.3, 0.5, 0,
	
	-0.3, 0, 0, 0, 0, 0,
	
	-0.3, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.25, 0,
	0, 0, 0, 0.25, -0.25, 0,
];
var cLowerPts = [
	-0.25, -0.35, 0, -0.25, 0, 0,
	-0.25, -0.35, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.5, 0,
	-0.25, 0, 0, 0, 0.1, 0,
	0, 0.1, 0, 0.25, 0.1, 0,
];
var dLowerPts = [
	0.3, -0.5, 0, 0.3, 0.5, 0,
	
	0.3, 0, 0, 0, 0, 0,
	
	0.3, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, -0.25, -0.25, 0,
	0, 0, 0, -0.25, -0.25, 0,
];
var eLowerPts = [
	-0.25, -0.35, 0, -0.25, 0, 0,
	-0.25, -0.35, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.5, 0,
	-0.25, 0, 0, 0, 0.1, 0,
	0, 0.1, 0, 0.25, 0.1, 0,
	0.3, -0.15, 0, 0.25, 0.1, 0,
	0.3, -0.15, 0, -0.25, -0.15, 0,
];
var fLowerPts = [
	0, -0.5, 0, 0, 0.25, 0,
	0, 0.25, 0, 0.175, 0.25, 0,
	-0.25, 0, 0, 0.25, 0, 0,
];
var gLowerPts = [
	0.3, -0.7, 0, 0.3, 0, 0,
	0.3, -0.7, 0, 0, -0.75, 0,
	
	0.3, 0, 0, 0, 0, 0,
	
	0.3, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, -0.25, -0.25, 0,
	0, 0, 0, -0.25, -0.25, 0,
];
var hLowerPts = [
	-0.2, -0.5, 0, -0.2, 0.5, 0,
	-0.2, 0, 0, 0.2, 0, 0,
	0.2, 0, 0, 0.2, -0.5, 0,
];
var iLowerPts = [
	0, -0.5, 0, 0, 0, 0,
	-0.05, 0.1, 0, 0.05, 0.1, 0,
];
var jLowerPts = [
	0, -0.75, 0, 0, 0, 0,
	0, -0.75, 0, -0.25, -0.75, 0,
	-0.25, -0.75, 0, -0.25, -0.65, 0,
];
var kLowerPts = [
	-0.2, -0.5, 0, -0.2, 0.25, 0,
	-0.2, -0.1, 0, 0.2, -0.4, 0,
	-0.2, -0.1, 0, 0.2, 0.15, 0,
];
var lLowerPts = [
	0, -0.5, 0, 0, 0.25, 0,
	-0.125, -0.5, 0, 0.125, -0.5, 0,
];
var mLowerPts = [
	-0.25, -0.5, 0, -0.15, 0.2, 0,
	0.25, -0.5, 0, 0.15, 0.2, 0,
	0, -0.2, 0, 0.25, 0.2, 0,
	0, -0.2, 0, -0.25, 0.2, 0,
];
var nLowerPts = [
	-0.2, -0.5, 0, -0.2, 0.1, 0,
	-0.2, 0, 0, 0.2, 0, 0,
	0.2, 0, 0, 0.2, -0.5, 0,
];
var oLowerPts = [
	-0.25, -0.25, 0, 0, 0, 0,
	0, 0, 0, 0.25, -0.25, 0,
	0.25, -0.25, 0, 0, -0.5, 0,
	-0.25, -0.25, 0, 0, -0.5, 0,
];
var pLowerPts = [
	-0.3, -0.8, 0, -0.3, 0, 0,
	
	-0.3, 0, 0, 0, 0, 0,
	
	-0.3, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, 0.25, -0.25, 0,
	0, 0, 0, 0.25, -0.25, 0,
];
var qLowerPts = [
	0.3, -0.7, 0, 0.3, 0, 0,
	0.3, -0.7, 0, 0.4, -0.55, 0,
	
	0.3, 0, 0, 0, 0, 0,
	
	0.3, -0.5, 0, 0, -0.5, 0,
	0, -0.5, 0, -0.25, -0.25, 0,
	0, 0, 0, -0.25, -0.25, 0,
];
var rLowerPts = [
	0, -0.5, 0, 0, 0.1, 0,
	0, 0, 0, 0.25, 0.1, 0,
];
var sLowerPts = [
	0.25, 0, 0, -0.25, -.05, 0,
	-0.25, -0.05, 0, -0.25, -0.25, 0,
	
	-0.25, -0.5, 0, 0.25, -0.5, 0,
	-0.25, -0.25, 0, 0.25, -0.25, 0,
	0.25, -0.5, 0, 0.25, -0.25, 0,
];
var tLowerPts = [
	0, -0.5, 0, 0, 0.2, 0,
	-0.2, 0, 0, 0.2, 0, 0,
];
var uLowerPts = [
	-0.2, -0.5, 0, -0.2, 0, 0,
	-0.2, -0.5, 0, 0.2, -0.5, 0,
	0.2, 0.1, 0, 0.2, -0.5, 0,
];
var vLowerPts = [
	-0.3, 0.1, 0, 0, -0.5, 0,
	0.3, 0.1, 0, 0, -0.5, 0,
];
var wLowerPts = [
	-0.35, 0.1, 0, -0.125, -0.5, 0,
	0.35, 0.1, 0, 0.125, -0.5, 0,
	0, 0.1, 0, 0.125, -0.5, 0,
	0, 0.1, 0, -0.125, -0.5, 0,
];
var xLowerPts = [
	0.25, 0.1, 0, -0.25, -0.5, 0,
	-0.25, 0.1, 0, 0.25, -0.5, 0,
];
var yLowerPts = [
	-0.3, 0.1, 0, 0, -0.5, 0,
	0.3, 0.1, 0, 0, -0.5, 0,
	0, -0.5, 0, -0.1, -0.75, 0,
];
var zLowerPts = [
	-0.2, -0.5, 0, 0.4, -0.5, 0,
	-0.2, -0.5, 0, 0.4, 0.1, 0,
	-0.2, 0.1, 0, 0.4, 0.1, 0,
];
	
function drawChar(x, y, z, size, alpha, pts) {

	for (var i = 0; i < pts.length * alpha; i += 6) {
		if (alpha > (i + 5.99) / pts.length)
			addLine(
				x + pts[i + 0] * size, 
				y + pts[i + 1] * size, 
				z + pts[i + 2] * size,
				
				x + pts[i + 3] * size, 
				y + pts[i + 4] * size, 
				z + pts[i + 5] * size,
				
				0, 0, 0, 1,
				0, 0, 0, 1
				);
		else {
			while (alpha > 6.0 / pts.length)
				alpha -= 6.0 / pts.length;
		
			var interp = alpha * pts.length / 6.0;
			var x1 = x + pts[i + 0] * size;
			var y1 = y + pts[i + 1] * size;
			var z1 = z + pts[i + 2] * size;
			var x2 = x + pts[i + 3] * size;
			var y2 = y + pts[i + 4] * size;
			var z2 = z + pts[i + 5] * size;
			
			addLine(
				x1, 
				y1, 
				z1,
				
				lerp(x1, x2, interp), 
				lerp(y1, y2, interp), 
				lerp(z1, z2, interp),
				
				0, 0, 0, 1,
				0, 0, 0, 1
				);
		}
	}
}

function lerp(x, y, a) {
	return x + (y - x) * a;
}

function drawString(x, y, z, size, alpha, string) {
	if (alpha > 0) {
		var startingX = x;
		for (var i = 0; i < string.length * alpha; i++)
		{
			if (string[i] != '\n') {
				if (i + 1 < string.length * alpha)
					x = drawCharType(x, y, z, size, 1, string[i]);
				else {
					var newA = alpha;
					while (newA > 1.0 / string.length)
						newA -= 1.0 / string.length;
					x = drawCharType(x, y, z, size, newA * string.length, string[i]);
				}
			}
			else {
				x = startingX;
				y -= size * 1.5;
			}
		}
	}
}

var tinySep = 0.25;
var smallSep = 0.65;
var largeSep = 0.8;
function drawCharType(x, y, z, size, alpha, c) {
	switch (c) {
		case '-':
			drawChar(x, y, z, size, alpha, dashPts);
			return x + size * smallSep;
		case ':':
			drawChar(x, y, z, size, alpha, colonPts);
			return x + size * smallSep;
		case '+':
			drawChar(x, y, z, size, alpha, plusPts);
			return x + size * smallSep;
		case '1':
			drawChar(x, y, z, size, alpha, onePts);
			return x + size * smallSep;
		case '2':
			drawChar(x, y, z, size, alpha, twoPts);
			return x + size * smallSep;
		case '3':
			drawChar(x, y, z, size, alpha, threePts);
			return x + size * smallSep;
		case '4':
			drawChar(x, y, z, size, alpha, fourPts);
			return x + size * smallSep;
		case '5':
			drawChar(x, y, z, size, alpha, fivePts);
			return x + size * smallSep;
		case '6':
			drawChar(x, y, z, size, alpha, sixPts);
			return x + size * smallSep;
		case '7':
			drawChar(x, y, z, size, alpha, sevenPts);
			return x + size * smallSep;
		case '8':
			drawChar(x, y, z, size, alpha, eightPts);
			return x + size * smallSep;
		case '9':
			drawChar(x, y, z, size, alpha, ninePts);
			return x + size * smallSep;
		case '0':
			drawChar(x, y, z, size, alpha, zeroPts);
			return x + size * smallSep;
		case '.':
			drawChar(x, y, z, size, alpha, dotPts);
			return x + size * tinySep;
		case ',':
			drawChar(x, y, z, size, alpha, commaPts);
			return x + size * tinySep;
		case '/':
			drawChar(x, y, z, size, alpha, slashPts);
			return x + size * smallSep;
		case 'a':
			drawChar(x, y, z, size, alpha, aLowerPts);
			return x + size * smallSep;
		case 'b':
			drawChar(x, y, z, size, alpha, bLowerPts);
			return x + size * smallSep;
		case 'c':
			drawChar(x, y, z, size, alpha, cLowerPts);
			return x + size * smallSep;
		case 'd':
			drawChar(x, y, z, size, alpha, dLowerPts);
			return x + size * smallSep;
		case 'e':
			drawChar(x, y, z, size, alpha, eLowerPts);
			return x + size * smallSep;
		case 'f':
			drawChar(x, y, z, size, alpha, fLowerPts);
			return x + size * smallSep;
		case 'g':
			drawChar(x, y, z, size, alpha, gLowerPts);
			return x + size * smallSep;
		case 'h':
			drawChar(x, y, z, size, alpha, hLowerPts);
			return x + size * smallSep;
		case 'i':
			drawChar(x, y, z, size, alpha, iLowerPts);
			return x + size * smallSep;
		case 'j':
			drawChar(x, y, z, size, alpha, jLowerPts);
			return x + size * smallSep;
		case 'k':
			drawChar(x, y, z, size, alpha, kLowerPts);
			return x + size * smallSep;
		case 'l':
			drawChar(x, y, z, size, alpha, lLowerPts);
			return x + size * smallSep;
		case 'm':
			drawChar(x, y, z, size, alpha, mLowerPts);
			return x + size * smallSep;
		case 'n':
			drawChar(x, y, z, size, alpha, nLowerPts);
			return x + size * smallSep;
		case 'o':
			drawChar(x, y, z, size, alpha, oLowerPts);
			return x + size * smallSep;
		case 'p':
			drawChar(x, y, z, size, alpha, pLowerPts);
			return x + size * smallSep;
		case 'q':
			drawChar(x, y, z, size, alpha, qLowerPts);
			return x + size * smallSep;
		case 'r':
			drawChar(x, y, z, size, alpha, rLowerPts);
			return x + size * smallSep;
		case 's':
			drawChar(x, y, z, size, alpha, sLowerPts);
			return x + size * smallSep;
		case 't':
			drawChar(x, y, z, size, alpha, tLowerPts);
			return x + size * smallSep;
		case 'u':
			drawChar(x, y, z, size, alpha, uLowerPts);
			return x + size * smallSep;
		case 'v':
			drawChar(x, y, z, size, alpha, vLowerPts);
			return x + size * smallSep;
		case 'w':
			drawChar(x, y, z, size, alpha, wLowerPts);
			return x + size * smallSep;
		case 'x':
			drawChar(x, y, z, size, alpha, xLowerPts);
			return x + size * smallSep;
		case 'y':
			drawChar(x, y, z, size, alpha, yLowerPts);
			return x + size * smallSep;
		case 'z':
			drawChar(x, y, z, size, alpha, zLowerPts);
			return x + size * smallSep;
		case 'A':
			drawChar(x, y, z, size, alpha, aPts);
			return x + size * largeSep;
		case 'B':
			drawChar(x, y, z, size, alpha, bPts);
			return x + size * largeSep;
		case 'C':
			drawChar(x, y, z, size, alpha, cPts);
			return x + size * largeSep;
		case 'D':
			drawChar(x, y, z, size, alpha, dPts);
			return x + size * largeSep;
		case 'E':
			drawChar(x, y, z, size, alpha, ePts);
			return x + size * largeSep;
		case 'F':
			drawChar(x, y, z, size, alpha, fPts);
			return x + size * largeSep;
		case 'G':
			drawChar(x, y, z, size, alpha, gPts);
			return x + size * largeSep;
		case 'H':
			drawChar(x, y, z, size, alpha, hPts);
			return x + size * largeSep;
		case 'I':
			drawChar(x, y, z, size, alpha, iPts);
			return x + size * largeSep;
		case 'J':
			drawChar(x, y, z, size, alpha, jPts);
			return x + size * largeSep;
		case 'K':
			drawChar(x, y, z, size, alpha, kPts);
			return x + size * largeSep;
		case 'L':
			drawChar(x, y, z, size, alpha, lPts);
			return x + size * largeSep;
		case 'M':
			drawChar(x, y, z, size, alpha, mPts);
			return x + size * largeSep;
		case 'N':
			drawChar(x, y, z, size, alpha, nPts);
			return x + size * largeSep;
		case 'O':
			drawChar(x, y, z, size, alpha, oPts);
			return x + size * largeSep;
		case 'P':
			drawChar(x, y, z, size, alpha, pPts);
			return x + size * largeSep;
		case 'Q':
			drawChar(x, y, z, size, alpha, qPts);
			return x + size * largeSep;
		case 'R':
			drawChar(x, y, z, size, alpha, rPts);
			return x + size * largeSep;
		case 'S':
			drawChar(x, y, z, size, alpha, sPts);
			return x + size * largeSep;
		case 'T':
			drawChar(x, y, z, size, alpha, tPts);
			return x + size * largeSep;
		case 'U':
			drawChar(x, y, z, size, alpha, uPts);
			return x + size * largeSep;
		case 'V':
			drawChar(x, y, z, size, alpha, vPts);
			return x + size * largeSep;
		case 'W':
			drawChar(x, y, z, size, alpha, wPts);
			return x + size * largeSep;
		case 'X':
			drawChar(x, y, z, size, alpha, xPts);
			return x + size * largeSep;
		case 'Y':
			drawChar(x, y, z, size, alpha, yPts);
			return x + size * largeSep;
		case 'Z':
			drawChar(x, y, z, size, alpha, zPts);
			return x + size * largeSep;
		case ' ':
			return x + size * largeSep;
	}
	return 0;
}


