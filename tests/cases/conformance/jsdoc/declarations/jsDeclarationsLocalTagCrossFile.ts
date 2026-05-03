// @module: commonjs
// @target: es2015
// @allowJs: true
// @checkJs: true
// @outDir: ./out
// @declaration: true
// @filename: types.js

export {};

/**
 * @local
 * @typedef {{ x: number, y: number }} LocalPoint
 */

/**
 * @typedef {{ label: string }} PublicLabel
 */

/** @param {LocalPoint} p */
export function translate(p) {
    return { x: p.x + 1, y: p.y + 1 };
}

// @filename: consumer.js

import { translate } from "./types";

/**
 * @local
 * @typedef {{ x: number, y: number }} ConsumerPoint
 */

/** @type {ConsumerPoint} */
const origin = { x: 0, y: 0 };

/** @returns {import("./types").LocalPoint} */
export function getOrigin() {
    return origin;
}

export const moved = translate({ x: 1, y: 2 });
