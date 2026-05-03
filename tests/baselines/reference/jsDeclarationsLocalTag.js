//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsLocalTag.ts] ////

//// [localTag.js]
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


//// [localTag.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.Shape = void 0;
exports.move = move;
exports.origin = origin;
exports.filter = filter;
exports.defaultSize = defaultSize;
exports.toNamedColor = toNamedColor;
exports.diagonal = diagonal;
exports.compute = compute;
exports.describeColor = describeColor;
exports.isActive = isActive;
exports.double = double;
/**
 * @local
 * @typedef {{ x: number, y: number }} Point
 */
/**
 * @typedef {string | number} PublicType
 */
/** @param {Point} p */
function move(p) {
    return p;
}
/**
 * @returns {Point}
 */
function origin() {
    return { x: 0, y: 0 };
}
class Shape {
    constructor() {
        /** @type {Point} */
        this.position = { x: 0, y: 0 };
    }
}
exports.Shape = Shape;
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
function filter(fn) {
    return fn(42);
}
// --- Tag order reversed: @typedef before @local ---
/**
 * @typedef {{ width: number, height: number }} Size
 * @local
 */
/** @returns {Size} */
function defaultSize() {
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
function toNamedColor(rgb) {
    return { name: "red" };
}
// --- @local typedef referencing another @local typedef ---
/**
 * @local
 * @typedef {{ start: Point, end: Point }} Line
 */
/** @returns {Line} */
function diagonal() {
    return { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } };
}
// --- @local typedef used with exported variable via @type ---
/**
 * @local
 * @typedef {{ host: string, port: number }} ServerConfig
 */
/** @type {ServerConfig} */
exports.config = { host: "localhost", port: 3000 };
// --- @local with @template (generic) ---
/**
 * @local
 * @template T
 * @typedef {{ value: T, error: string | null }} Result
 */
/** @returns {Result<number>} */
function compute() {
    return { value: 42, error: null };
}
// --- Two typedefs in the SAME JSDoc block: @local applies to entire block ---
/**
 * @local
 * @typedef {{ r: number, g: number, b: number }} LocalColor
 * @typedef {{ name: string }} AlsoLocalColor
 */
/** @param {LocalColor} c @returns {AlsoLocalColor} */
function describeColor(c) {
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
function isActive(s) {
    return s === Status.Active;
}
// --- @local on unrelated tag (should be harmless) ---
/**
 * @local
 * @param {number} x
 * @returns {number}
 */
function double(x) {
    return x * 2;
}


//// [localTag.d.ts]
/**
 * @local
 * @typedef {{ x: number, y: number }} Point
 */
/**
 * @typedef {string | number} PublicType
 */
/** @param {Point} p */
export function move(p: Point): Point;
/**
 * @returns {Point}
 */
export function origin(): Point;
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
export function filter(fn: Predicate): boolean;
/**
 * @typedef {{ width: number, height: number }} Size
 * @local
 */
/** @returns {Size} */
export function defaultSize(): Size;
/**
 * @local
 * @typedef {{ r: number, g: number, b: number }} RGB
 */
/**
 * @typedef {{ name: string }} NamedColor
 */
/** @param {RGB} rgb @returns {NamedColor} */
export function toNamedColor(rgb: RGB): NamedColor;
/**
 * @local
 * @typedef {{ start: Point, end: Point }} Line
 */
/** @returns {Line} */
export function diagonal(): Line;
/**
 * @local
 * @template T
 * @typedef {{ value: T, error: string | null }} Result
 */
/** @returns {Result<number>} */
export function compute(): Result<number>;
/**
 * @local
 * @typedef {{ r: number, g: number, b: number }} LocalColor
 * @typedef {{ name: string }} AlsoLocalColor
 */
/** @param {LocalColor} c @returns {AlsoLocalColor} */
export function describeColor(c: LocalColor): AlsoLocalColor;
/** @param {Status} s */
export function isActive(s: number): boolean;
/**
 * @local
 * @param {number} x
 * @returns {number}
 */
export function double(x: number): number;
export class Shape {
    /** @type {Point} */
    position: Point;
}
/**
 * @local
 * @typedef {{ host: string, port: number }} ServerConfig
 */
/** @type {ServerConfig} */
export const config: ServerConfig;
export type PublicType = string | number;
export type NamedColor = {
    name: string;
};
type Point = {
    x: number;
    y: number;
};
type InternalConfig = {
    secret: string;
};
type Predicate = (value: number) => boolean;
type Size = {
    width: number;
    height: number;
};
type RGB = {
    r: number;
    g: number;
    b: number;
};
type Line = {
    start: Point;
    end: Point;
};
type Result<T> = {
    value: T;
    error: string | null;
};
type LocalColor = {
    r: number;
    g: number;
    b: number;
};
type AlsoLocalColor = {
    name: string;
};
type ServerConfig = {
    host: string;
    port: number;
};
export {};
