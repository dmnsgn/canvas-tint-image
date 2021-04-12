import canvasContext from "canvas-context";

let context;

/**
 * Tint an image with a canvas 2D context.
 *
 * @param {CanvasImageSource} image The image to tint
 * @param {string | CanvasGradient | CanvasPattern} color A CSS <color> value
 * @param {number} [opacity=0.5] Opacity of the tint between 0 and 1
 * @returns {HTMLCanvasElement}
 */
function canvasTintImage(image, color, opacity = 0.5) {
  if (!context) {
    const { context: c } = canvasContext("2d", {
      width: image.width,
      height: image.height,
    });
    context = c;
  } else {
    context.canvas.width = image.width;
    context.canvas.height = image.height;
  }

  context.save();
  context.fillStyle = color;
  context.globalAlpha = opacity;
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.globalCompositeOperation = "destination-atop";
  context.globalAlpha = 1;
  context.drawImage(image, 0, 0);
  context.restore();

  return context.canvas;
}

export default canvasTintImage;
