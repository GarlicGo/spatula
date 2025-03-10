import { tagOf, Tag } from "../.internal/tag";

/**
 * Checks whether value is a Promise object.
 * @param {any} value The value to check
 * @returns {boolean} Returns true if value is a Promise object, else false
 * @example
 *
 * isPromise(new Promise(() => {}))
 * // => true
 *
 * isPromise(new Promise(() => {}).then())
 * // => true
 *
 * isPromise(Promise.resolve())
 * // => true
 *
 * isPromise(Promise.all([]))
 * // => true
 *
 * isPromise(6)
 * // => false
 *
 * isPromise("6")
 * // => false
 */
export function isPromise<T>(value: any): value is Promise<T> {
    return tagOf(value) === Tag.Promise;
}
