// https://codepen.io/podo/pen/XZQYqx
const width = window.innerWidth;
const height = window.innerHeight; 
const BACKGROUND_COLOR = '#0abab5';
let x_noise = 0;
let y_noise = 0;
let angle = -Math.PI / 2;
let angle_noise = 0;
let radius_noise = 0;
let stroke_color = 254; 
let stroke_switch = -1;


function setup() {
  createCanvas(width, height);
  smooth();
  frameRate(30);
  pixelDensity(3);
  background(BACKGROUND_COLOR);
}

function draw() {
  x_noise += 0.01;
  y_noise += 0.01;
  radius_noise += 0.005;
  angle_noise += 0.005;
  angle += (noise(angle_noise) * 6) - 3;

  if (angle > 360) {
    angle -= 360;
  } else if (angle < 0) {
    angle += 360;
  }

  const centerX = width / 2 + (noise(x_noise) * 100) - 50;
  const centerY = height / 2 + (noise(y_noise) * 100) - 50;
  const radius = (noise(radius_noise) * 550) +1;
  const radian = radians(angle);
  const opprad = radian + Math.PI;
  const x1 = centerX + (radius * cos(radian));
  const y1 = centerY + (radius * sin(radian));
  const x2 = centerX + (radius * cos(opprad));
  const y2 = centerY + (radius * sin(opprad));
 
  stroke_color += stroke_switch;

  if (stroke_color > 254) {
    stroke_switch = -1;
  } else if (stroke_color < 0) {
    stroke_switch = 1;
  } 

  stroke(stroke_color, 60);
  
  strokeWeight(1);
  line(x1, y1, x2, y2);
}
