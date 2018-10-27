# canvas-tint-image [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm version](https://badge.fury.io/js/canvas-tint-image.svg)](https://www.npmjs.com/package/canvas-tint-image)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A one trick pony package to tint an image with a canvas 2D context.

![](https://raw.githubusercontent.com/dmnsgn/canvas-tint-image/master/screenshot.gif)

## Installation

```bash
npm install canvas-tint-image
```

[![NPM](https://nodei.co/npm/canvas-tint-image.png)](https://nodei.co/npm/canvas-tint-image/)

## Usage

```js
const tintImage = require("canvas-tint-image");
const getCanvasContext = require("get-canvas-context");
const AsyncPreloader = require("async-preloader").default;

const context = getCanvasContext("2d", {
  width: 100,
  height: 100
});

(async () => {
  const image = await AsyncPreloader.loadImage({ src: "image.jpg" });
  context.drawImage(tintImage(image, "#f00", 0.5), 0, 0);
})();
```

## API

### `tintImage(image, color, opacity): HTMLCanvasElement`

| Option      | Type              | Default | Description                             |
| ----------- | ----------------- | ------- | --------------------------------------- |
| **image**   | CanvasImageSource |         | The image to tint                       |
| **color**   | DOMString         |         | A DOMString parsed as CSS <color> value |
| **opacity** | number?           | 0.5     | Opacity of the tint between 0 and 1     |

## License

MIT. See [license file](https://github.com/dmnsgn/canvas-tint-image/blob/master/LICENSE.md).
