//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsLocalTagCrossFile.ts] ////

//// [types.js]
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

//// [consumer.js]
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


//// [types.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = translate;
/**
 * @local
 * @typedef {{ x: number, y: number }} LocalPoint
 */
/**
 * @typedef {{ label: string }} PublicLabel
 */
/** @param {LocalPoint} p */
function translate(p) {
    return { x: p.x + 1, y: p.y + 1 };
}
//// [consumer.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moved = void 0;
exports.getOrigin = getOrigin;
const types_1 = require("./types");
/**
 * @local
 * @typedef {{ x: number, y: number }} ConsumerPoint
 */
/** @type {ConsumerPoint} */
const origin = { x: 0, y: 0 };
/** @returns {import("./types").LocalPoint} */
function getOrigin() {
    return origin;
}
exports.moved = (0, types_1.translate)({ x: 1, y: 2 });


//// [types.d.ts]
/**
 * @local
 * @typedef {{ x: number, y: number }} LocalPoint
 */
/**
 * @typedef {{ label: string }} PublicLabel
 */
/** @param {LocalPoint} p */
export function translate(p: LocalPoint): {
    x: number;
    y: number;
};
export type PublicLabel = {
    label: string;
};
type LocalPoint = {
    x: number;
    y: number;
};
export {};
//// [consumer.d.ts]
/** @returns {import("./types").LocalPoint} */
export function getOrigin(): import("./types").LocalPoint;
export const moved: {
    x: number;
    y: number;
};
type ConsumerPoint = {
    x: number;
    y: number;
};
export {};


//// [DtsFileErrors]


out/consumer.d.ts(2,48): error TS2694: Namespace '"out/types"' has no exported member 'LocalPoint'.


==== out/types.d.ts (0 errors) ====
    /**
     * @local
     * @typedef {{ x: number, y: number }} LocalPoint
     */
    /**
     * @typedef {{ label: string }} PublicLabel
     */
    /** @param {LocalPoint} p */
    export function translate(p: LocalPoint): {
        x: number;
        y: number;
    };
    export type PublicLabel = {
        label: string;
    };
    type LocalPoint = {
        x: number;
        y: number;
    };
    export {};
    
==== out/consumer.d.ts (1 errors) ====
    /** @returns {import("./types").LocalPoint} */
    export function getOrigin(): import("./types").LocalPoint;
                                                   ~~~~~~~~~~
!!! error TS2694: Namespace '"out/types"' has no exported member 'LocalPoint'.
    export const moved: {
        x: number;
        y: number;
    };
    type ConsumerPoint = {
        x: number;
        y: number;
    };
    export {};
    