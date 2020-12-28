const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const isStarted = false;
let clickCount = 0;

export default function basicCanvas(slideEvent) {
  function clear() {
    console.log(clickCount);
    if (clickCount === 1) {
      ctx.clearRect(15, 15, 160, 110);
      clickCount -= 1;
    }
    if (clickCount === 2) {
      ctx.clearRect(195, 15, 160, 110);
      clickCount -= 1;
    }
  }

  function drawFigure() {
    console.log(clickCount);
    if (clickCount === 0) {
      ctx.rect(20, 20, 150, 100);
      ctx.fill();
      clickCount += 1;
    }
    if (clickCount === 1) {
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.rect(200, 20, 150, 100);
      ctx.stroke();
      clickCount += 1;
    }
  }

  console.log(slideEvent.indexh, slideEvent.indexv, clickCount);
  if (slideEvent.indexh === 2) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        drawFigure();
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        clear();
      }
    });

    document.addEventListener('mousedown', (e) => {
      if (
        e.target.closest('.navigate-up') ||
        e.target.closest('.navigate-left')
      ) {
        clear();
      }
      if (
        e.target.closest('.navigate-down') ||
        e.target.closest('.navigate-right')
      ) {
        drawFigure();
      }
    });
  }
}
