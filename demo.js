const tintImage = require("./");
const getCanvasContext = require("get-canvas-context");
const AsyncPreloader = require("async-preloader").default;

const width = window.innerWidth;
const height = window.innerHeight;
const context = getCanvasContext("2d", {
  width,
  height
});

const count = 36;
const gridSize = 9;
let tint = true;

document.body.appendChild(context.canvas);
document.body.style.margin = 0;
document.body.style.overflowX = "hidden";

function draw() {
  tint = !tint;

  const image = AsyncPreloader.items.get("cat");
  const ratio = image.height / image.width;

  const dWidth = window.innerWidth / gridSize;
  context.canvas.height = Math.ceil(count / gridSize) * dWidth * ratio;

  context.drawImage(image, 0, 0, dWidth, dWidth * ratio);

  for (let i = 0; i < count; i++) {
    context.drawImage(
      tint
        ? tintImage(image, `hsl(${(360 * i) / count}, 100%, 50%)`, 0.5)
        : image,
      (i % gridSize) * dWidth,
      ~~(i / gridSize) * dWidth,
      dWidth,
      dWidth * ratio
    );
  }
}

(async () => {
  await AsyncPreloader.loadItem({ id: "cat", src: "image.jpg" });

  draw();
  window.addEventListener("resize", draw);

  setInterval(draw, 1000);
})();
