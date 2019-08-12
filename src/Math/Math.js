/**
 * Well known, frequentyly used, math functions and constants
 *
 * http://noonat.github.io/intersect/
 * https://github.com/rwaldron/proposal-math-extensions
 */

export const EPSILON = 1e-8
export const DEG_PER_RAD = Math.PI / 180
export const RAD_PER_DEG = 180 / Math.PI

export const abs = (x) => x < 0 ? -x : x
export const clamp = (x, lower, upper) => Math.min(upper, Math.max(lower, x))
export const sign = (x) => ((x > 0) - (x < 0)) || +x
