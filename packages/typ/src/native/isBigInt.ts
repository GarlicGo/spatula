import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a BigInt object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a BigInt object, else false
 * @example
 *
 * isBigInt(6n)
 * // => true
 *
 * isBigInt(BigInt(6))
 * // => true
 *
 * isBigInt(6)
 * // => false
 *
 * isBigInt(new Number(6))
 * // => false
 *
 * isBigInt("6")
 * // => false
 */
export function isBigInt(value: any): value is bigint {
    return tagOf(value) === Tag.BigInt;
}
