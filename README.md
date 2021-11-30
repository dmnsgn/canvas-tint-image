# canvas-tint-image

[![npm version](https://img.shields.io/npm/v/canvas-tint-image)](https://www.npmjs.com/package/canvas-tint-image)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/canvas-tint-image)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/canvas-tint-image)](https://bundlephobia.com/package/canvas-tint-image)
[![dependencies](https://img.shields.io/librariesio/release/npm/canvas-tint-image)](https://github.com/dmnsgn/canvas-tint-image/blob/main/package.json)
[![types](https://img.shields.io/npm/types/canvas-tint-image)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/canvas-tint-image)](https://github.com/dmnsgn/canvas-tint-image/blob/main/LICENSE.md)

A one trick pony package to tint an image with a canvas 2D context.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

![](https://raw.githubusercontent.com/dmnsgn/canvas-tint-image/main/screenshot.gif)

## Installation

```bash
npm install canvas-tint-image
```

## Usage

```js
import canvasTintImage from "canvas-tint-image";
import getCanvasContext from "get-canvas-context";
import AsyncPreloader from "async-preloader";

const context = getCanvasContext("2d", {
  width: 100,
  height: 100,
});

(async () => {
  const image = await AsyncPreloader.loadImage({ src: "image.jpg" });
  context.drawImage(canvasTintImage(image, "#f00", 0.5), 0, 0);
})();
```

## API

<!-- api-start -->

<a name="canvasTintImage"></a>

## canvasTintImage(image, color, [opacity]) ⇒ <code>HTMLCanvasElement</code>

Tint an image with a canvas 2D context.

**Kind**: global function

| Param     | Type                                                                             | Default          | Description                         |
| --------- | -------------------------------------------------------------------------------- | ---------------- | ----------------------------------- |
| image     | <code>CanvasImageSource</code>                                                   |                  | The image to tint                   |
| color     | <code>string</code> \| <code>CanvasGradient</code> \| <code>CanvasPattern</code> |                  | A CSS <color> value                 |
| [opacity] | <code>number</code>                                                              | <code>0.5</code> | Opacity of the tint between 0 and 1 |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/canvas-tint-image/blob/main/LICENSE.md).
