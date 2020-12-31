const canvas2 = document.querySelector('#canvas2');
const canvas3 = document.querySelector('#canvas3');
const canvas4 = document.querySelector('#canvas4');
const canvas5 = document.querySelector('#canvas5');
const canvas6 = document.querySelector('#canvas6');
const canvas7 = document.querySelector('#canvas7');

let ctx = null;
let slideIndex = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;
let clickCount6 = 0;
let clickCount7 = 0;

let start = { x: 150, y: 20 };
let end = { x: 350, y: 100 };
let cp1 = { x: 330, y: 30 }; // one ore more control point
let cp2 = { x: 250, y: 80 };

const image1 = new Image();
const frame1 = new Image();
image1.src = './../examples/assets/gallery_1.jpg';
frame1.src = './../examples/assets/frame.png';
const image2 = new Image();
const frame2 = new Image();
image2.src = './../examples/assets/gallery_6.jpg';
frame2.src = './../examples/assets/frame.png';

const image3 = new Image();
const frame3 = new Image();
image3.src = './../examples/assets/gallery_8.jpg';
frame3.src = './../examples/assets/frame.png';

let timer1 = 0;
let timer2 = 0;
let timer3 = 0;

function clear() {
  if (clickCount2 === 1) {
    ctx.clearRect(15, 15, 400, 400);
  } else if (clickCount2 === 2) {
    ctx.clearRect(195, 15, 160, 110);
    clickCount2 -= 1;
  } else if (clickCount2 === 6) {
    ctx.clearRect(350, 15, 460, 110);
    clickCount2 -= 1;
  } else if (clickCount2 > 2 && clickCount2 < 8) {
    clickCount2 -= 1;
  }
}

function drawFigure() {
  if (clickCount2 === 0) {
    clickCount2 += 1;
  } else if (clickCount2 === 1) {
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fill();
    clickCount2 += 1;
  } else if (clickCount2 === 2) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.rect(200, 20, 150, 100);
    ctx.stroke();
    clickCount2 += 1;
  } else if (clickCount2 === 6) {
    ctx.beginPath();
    ctx.moveTo(500, 70);
    ctx.arc(450, 70, 50, 0, Math.PI * 2, false);
    ctx.fill();
  } else if (clickCount2 < 6) {
    clickCount2 += 1;
  }
}

function pathTriangle() {
  switch (clickCount3) {
    case 0:
      clickCount3 += 1;
      ctx.strokeStyle = 'red';
      break;
    case 1:
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'red';
      ctx.moveTo(50, 50);
      ctx.lineTo(51, 51);
      ctx.stroke();
      clickCount3 += 1;
      break;
    case 2:
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'red';
      ctx.moveTo(50, 50);
      ctx.lineTo(250, 50);
      ctx.stroke();
      clickCount3 += 1;
      break;
    case 3:
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'red';
      ctx.moveTo(250, 50);
      ctx.lineTo(150, 250);
      ctx.stroke();
      clickCount3 += 1;
      break;
    case 4:
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.moveTo(50, 50);
      ctx.lineTo(250, 50);
      ctx.lineTo(150, 250);
      ctx.fill();
      clickCount3 += 1;
      break;
    case 5:
      clickCount3 += 1;
      break;
    case 6:
      ctx.beginPath();
      ctx.moveTo(400, 50);
      ctx.lineTo(500, 250);
      ctx.lineTo(300, 250);
      ctx.closePath();
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 10;
      ctx.stroke();
    default:
      break;
  }
}

function clearTriangle() {
  switch (clickCount3) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      ctx.clearRect(0, 0, 600, 300);
      clickCount3 -= 1;
      break;
    case 6:
      ctx.clearRect(290, 0, 310, 300);
      clickCount3 -= 2;
      break;
    default:
      clickCount3 -= 1;
      break;
  }
}

function bezierCurve() {
  switch (clickCount4) {
    case 0:
      clickCount4 += 1;
      // Define the points as {x, y}
      break;
    case 1:
      clickCount4 += 1;
      // Start and end points
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI); // Start point
      ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI); // End point
      ctx.fill();
      break;
    case 2:
      // Control points
      clickCount4 += 1;
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Control point one
      ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // Control point two
      ctx.fill();
      break;
    case 3:
      clickCount4 += 1;
      // Cubic Bézier curve
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(start.x, start.y);
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
      ctx.stroke();
      break;
    case 4:
      clickCount4 += 1;
      ctx.beginPath();
      ctx.moveTo(75, 135);
      ctx.quadraticCurveTo(25, 135, 25, 172.5);
      ctx.quadraticCurveTo(25, 210, 50, 210);
      ctx.quadraticCurveTo(50, 230, 30, 235);
      ctx.quadraticCurveTo(60, 230, 65, 210);
      ctx.quadraticCurveTo(125, 210, 125, 172.5);
      ctx.quadraticCurveTo(125, 135, 75, 135);
      ctx.stroke();
      break;
    case 5:
      // draw heart
      ctx.beginPath();
      ctx.moveTo(375, 160);
      ctx.bezierCurveTo(375, 157, 370, 145, 350, 145);
      ctx.bezierCurveTo(320, 145, 320, 182.5, 320, 182.5);
      ctx.bezierCurveTo(320, 200, 340, 222, 375, 240);
      ctx.bezierCurveTo(410, 222, 430, 200, 430, 182.5);
      ctx.bezierCurveTo(430, 182.5, 430, 145, 400, 145);
      ctx.bezierCurveTo(385, 145, 375, 157, 375, 160);
      ctx.fill();
    default:
      break;
  }
}

function clearBezier() {
  switch (clickCount4) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      ctx.clearRect(0, 0, 600, 300);
      clickCount4 -= 1;
      break;
    case 4:
      ctx.clearRect(0, 130, 300, 170);
      clickCount4 -= 1;
      break;
    case 5:
      ctx.clearRect(290, 130, 310, 170);
      clickCount4 -= 1;
      break;
    default:
      clickCount4 -= 1;
      break;
  }
}

function styleShow() {
  switch (clickCount5) {
    case 0:
      ctx.beginPath();
      ctx.lineWidth = 5;
      clickCount5 += 1;
      break;
    case 1:
      ctx.strokeStyle = 'rgb(255, 221, 0)';
      ctx.strokeRect(40, 40, 200, 40);
      clickCount5 += 1;
      break;
    case 2:
      ctx.strokeStyle = 'rgb(102, 204, 0)';
      ctx.strokeRect(40, 85, 200, 40);
      clickCount5 += 1;
      break;
    case 3:
      ctx.strokeStyle = 'rgb(0, 153, 255)';
      ctx.strokeRect(40, 130, 200, 40);
      clickCount5 += 1;
      break;
    case 4:
      ctx.strokeStyle = 'rgb(255, 51, 0)';
      ctx.strokeRect(40, 175, 200, 40);
      clickCount5 += 1;
      break;
    case 5:
      clickCount5 += 1;
      break;
    case 6:
      const color = [
        'rgb(255, 221, 0',
        'rgb(102, 204, 0',
        'rgb(0, 153, 255',
        'rgb(255, 51, 0',
      ];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
          ctx.beginPath();
          ctx.fillStyle = `${color[j]}, ${(i + 1) / 10})`;
          ctx.fillRect(42.5 + i * 20, 42.5 + j * 45, 20, 35);
        }
      }
      clickCount5 += 1;
      break;
    case 7:
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          ctx.strokeStyle = `rgb(0, ${Math.floor(255 - 42.5 * i)}, 
          ${Math.floor(255 - 42.5 * j)})`;
          ctx.beginPath();
          ctx.arc(350 + j * 35, 50 + i * 35, 15, 0, Math.PI * 2, true);
          ctx.stroke();
        }
      }
      break;
    default:
      break;
  }
}

function styleShowClear() {
  switch (clickCount5) {
    case 0:
      ctx.clearRect(37.5, 36.5, 210, 46);
      break;
    case 1:
      ctx.clearRect(37.5, 36.5, 210, 46);
      break;
    case 2:
      ctx.clearRect(37.5, 82.5, 210, 45);
      clickCount5 -= 1;
      break;
    case 3:
      ctx.clearRect(37.5, 127.5, 210, 45);
      clickCount5 -= 1;
      break;
    case 4:
      ctx.clearRect(37.5, 172.5, 210, 45);
      clickCount5 -= 1;
      break;
    case 7:
      ctx.clearRect(320, 0, 280, 300);
      clickCount5 -= 1;

    default:
      clickCount5 -= 1;
      break;
  }
}

function artGalleryDraw() {
  switch (clickCount6) {
    case 0:
      break;
    case 1:
      ctx.drawImage(frame1, 30, 115);
      break;
    case 2:
      ctx.drawImage(image1, 50, 135, 87, 104);
      break;
    case 3:
      canvas6.style.backgroundColor = 'rgb(122, 0, 0)';
      break;
    case 4:
      ctx.drawImage(image2, 250, 135, 87, 104);
      ctx.drawImage(frame2, 230, 115);
      ctx.drawImage(image3, 450, 135, 87, 104);
      ctx.drawImage(frame3, 430, 115);
      break;
    case 5:
      ctx.beginPath();
      ctx.font = '48px serif';
      break;
    case 6:
      ctx.fillStyle = '#fff';
      break;
    case 7:
      ctx.fillText('Art gallery', 200, 70);
      break;
    default:
      break;
  }
  if (clickCount6 < 7) {
    clickCount6 += 1;
  }
}

function artGalleryClear() {
  switch (clickCount6) {
    case 0:
      break;
    case 1:
      ctx.clearRect(0, 0, 600, 300);
      // clickCount6 -= 1;
      break;
    case 2:
      ctx.clearRect(50, 135, 87, 104);
      clickCount6 -= 1;
      break;
    case 3:
      canvas6.style.backgroundColor = '#fff';
      clickCount6 -= 1;
      break;
    case 4:
      ctx.clearRect(210, 110, 350, 200);
      clickCount6 -= 1;
      break;
    case 5:
      clickCount6 -= 1;
      break;
    case 6:
      clickCount6 -= 1;
      break;
    case 7:
      ctx.clearRect(195, 0, 400, 85);
      clickCount6 -= 1;
      break;
    default:
      break;
  }
}

function animationCircleShow() {
  const circle = {
    x: 200,
    y: 200,
    radius: 30,
    dx: 5,
    dy: 4,
  };

  function drawCircle() {
    ctx.beginPath();
    ctx.moveTo(40, 40);
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
  }

  function moveOneSide() {
    ctx.clearRect(0, 0, canvas7.width, canvas7.height); // clear canvas before draw circle
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
  }

  function moveToBottom() {
    ctx.clearRect(0, 0, canvas7.width, canvas7.height); // clear canvas before draw circle
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
    if (
      // check bottom or top wall
      circle.y + circle.radius >= canvas7.height ||
      circle.y - circle.radius <= 0
    ) {
      circle.dy *= -1;
    }
  }

  function moveToBottomSide() {
    ctx.clearRect(0, 0, canvas7.width, canvas7.height); // clear canvas before draw circle
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;
    if (
      // check bottom or top wall
      circle.y + circle.radius >= canvas7.height ||
      circle.y - circle.radius <= 0
    ) {
      circle.dy *= -1;
    }
    if (
      // check right or left wall
      circle.x + circle.radius === canvas7.width ||
      circle.x - circle.radius === 0
    ) {
      circle.dx *= -1;
    }
  }
  switch (clickCount7) {
    case 0:
      clickCount7 += 1;
      break;
    case 1:
      clickCount7 += 1;
      break;
    case 2:
      clickCount7 += 1;
      drawCircle();
      break;
    case 3:
      clickCount7 += 1;
      break;
    case 4:
      clickCount7 += 1;
      break;
    case 5:
      clickCount7 += 1;
      moveOneSide();
      timer1 = setInterval(moveOneSide, 16); // - repeat unlimited
      break;
    case 6:
      clickCount7 += 1;
      clearInterval(timer1);
      break;
    case 7:
      // clearInterval(timer);
      clickCount7 += 1;
      moveToBottom();
      timer2 = setInterval(moveToBottom, 16); // - repeat unlimited
      break;
    case 8:
      clearInterval(timer2);
      clickCount7 += 1;
      break;
    case 9:
      // clearInterval(timer);
      clickCount7 += 1;
      moveToBottomSide();
      timer3 = setInterval(moveToBottomSide, 16); // - repeat unlimited
      break;
    case 10:
      clearInterval(timer3);
      clickCount7 += 1;
      break;
    default:
      break;
  }
}

function animationCircleClear() {
  switch (clickCount7) {
    case 0:
      break;
    case 1:
      ctx.clearRect(0, 0, 600, 300);
      break;
    default:
      clickCount7 -= 1;
      break;
  }
}

Reveal.on('slidechanged', (event) => {
  slideIndex = event.indexh;
  switch (event.indexh) {
    case 2:
      ctx = canvas2.getContext('2d');
      clickCount2 = clickCount2 === 6 ? clickCount2 + 1 : 0;
      break;
    case 3:
      ctx = canvas3.getContext('2d');
      clickCount3 = clickCount3 === 6 ? clickCount3 + 1 : 0;
      break;
    case 4:
      clickCount4 = clickCount4 === 5 ? clickCount4 + 1 : 0;
      ctx = canvas4.getContext('2d');
      break;
    case 5:
      clickCount5 = clickCount5 === 7 ? clickCount5 + 1 : 0;
      ctx = canvas5.getContext('2d');
      break;
    case 6:
      clickCount6 = clickCount6 === 6 ? clickCount6 + 1 : 0;
      ctx = canvas6.getContext('2d');
      break;
    case 7:
      clickCount7 = clickCount7 === 10 ? clickCount7 + 1 : 0;
      ctx = canvas7.getContext('2d');
      break;
    default:
      break;
  }
});

function show() {
  switch (slideIndex) {
    case 2:
      drawFigure();
      break;
    case 3:
      pathTriangle();
      break;
    case 4:
      bezierCurve();
      break;
    case 5:
      styleShow();
      break;
    case 6:
      artGalleryDraw();
      break;
    case 7:
      animationCircleShow();
      break;
    default:
      break;
  }
}
function clearAndClose() {
  switch (slideIndex) {
    case 2:
      clear();
      break;
    case 3:
      clearTriangle();
      break;
    case 4:
      clearBezier();
      break;
    case 5:
      styleShowClear();
      break;
    case 6:
      artGalleryClear();
      break;
    case 7:
      animationCircleClear();
      break;
    default:
      break;
  }
}

document.addEventListener('keydown', (e) => {
  const next = e.key === 'ArrowDown' || e.key === 'ArrowRight';
  const prev = e.key === 'ArrowUp' || e.key === 'ArrowLeft';
  if (next) {
    show();
  }
  if (prev) {
    clearAndClose();
  }
});

document.addEventListener('mousedown', (e) => {
  const next =
    e.target.closest('.navigate-down') || e.target.closest('.navigate-right');
  const prev =
    e.target.closest('.navigate-up') || e.target.closest('.navigate-left');
  if (prev) {
    show();
  }
  if (next) {
    clearAndClose();
  }
});
