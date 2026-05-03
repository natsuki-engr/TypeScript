// @module: commonjs
// @target: es2015
// @allowJs: true
// @checkJs: true
// @outDir: ./out
// @declaration: true
// @filename: localTag.js

export {};

/**
 * @local
 * @typedef {{ x: number, y: number }} Point
 */

/**
 * @typedef {string | number} PublicType
 */

/** @param {Point} p */
export function move(p) {
    return p;
}

/**
 * @returns {Point}
 */
export function origin() {
    return { x: 0, y: 0 };
}

export class Shape {
    constructor() {
        /** @type {Point} */
        this.position = { x: 0, y: 0 };
    }
}

/**
 * @local
 * @private
 * @typedef {{ secret: string }} InternalConfig
 */

/**
 * @local
 * @callback Predicate
 * @param {number} value
 * @returns {boolean}
 */

/** @param {Predicate} fn */
export function filter(fn) {
    return fn(42);
}

// --- Tag order reversed: @typedef before @local ---

/**
 * @typedef {{ width: number, height: number }} Size
 * @local
 */

/** @returns {Size} */
export function defaultSize() {
    return { width: 100, height: 100 };
}

// --- Two typedefs in one JSDoc block, only one is @local ---

/**
 * @local
 * @typedef {{ r: number, g: number, b: number }} RGB
 */
/**
 * @typedef {{ name: string }} NamedColor
 */

/** @param {RGB} rgb @returns {NamedColor} */
export function toNamedColor(rgb) {
    return { name: "red" };
}

// --- @local typedef referencing another @local typedef ---

/**
 * @local
 * @typedef {{ start: Point, end: Point }} Line
 */

/** @returns {Line} */
export function diagonal() {
    return { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } };
}

// --- @local typedef used with exported variable via @type ---

/**
 * @local
 * @typedef {{ host: string, port: number }} ServerConfig
 */

/** @type {ServerConfig} */
export const config = { host: "localhost", port: 3000 };

// --- @local with @template (generic) ---

/**
 * @local
 * @template T
 * @typedef {{ value: T, error: string | null }} Result
 */

/** @returns {Result<number>} */
export function compute() {
    return { value: 42, error: null };
}

// --- Two typedefs in the SAME JSDoc block: @local applies to entire block ---

/**
 * @local
 * @typedef {{ r: number, g: number, b: number }} LocalColor
 * @typedef {{ name: string }} AlsoLocalColor
 */

/** @param {LocalColor} c @returns {AlsoLocalColor} */
export function describeColor(c) {
    return { name: "red" };
}

// --- @local + @enum ---

/**
 * @local
 * @enum {number}
 */
const Status = {
    Active: 0,
    Inactive: 1,
};

/** @param {Status} s */
export function isActive(s) {
    return s === Status.Active;
}

// --- @local on unrelated tag (should be harmless) ---

/**
 * @local
 * @param {number} x
 * @returns {number}
 */
export function double(x) {
    return x * 2;
}
