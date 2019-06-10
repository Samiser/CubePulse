let angle = 0;
let w = 80;
let maxD;

function setup() {
	createCanvas(windowWidth*0.95, windowHeight*0.95, WEBGL);
	ortho(-width, width, -height, height, -(width+height), (width+height));
	maxD = dist(0, 0, width/2, height/2);
}

function draw() {
	background(0)
	rotateX(-atan(1/sqrt(2)));
	rotateY(-PI/4);
	//rotateY(angle*0.5);
	
	let offset = 0;
	for (let z = 0; z < width; z+=w) {
		for (let x = 0; x < width; x+=w) {
			push();
			let controlX = (map(mouseX, 0, width, 0.5, 2));
			let d = dist(x, z, width/2, width/2);
			let offset = map(d, 0, maxD, -controlX, controlX);
			let a = angle + offset;
			let h = floor(map(sin(a), 1, -1, 50, mouseY+10));
			normalMaterial();
			translate(x - width/2, 0, z - width/2);
			box(w - 2, h, w - 2);
			pop();
		}
		offset += 0.1;
	}
	angle -= 0.05;
}
