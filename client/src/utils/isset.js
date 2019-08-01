/**
 * Checks to see if a value is set.
 *
 * @param {Function} accessor Function that returns our value
 */
function isset(accessor) {
    try {
    //if the returned value of our function is not undefined
        return typeof accessor() !== 'undefined';
    } catch (e) {
    // catch the Error it would normally throw for
    // referencing a property of undefined
        return false;
    }
}

export {isset};