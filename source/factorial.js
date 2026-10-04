'use strict';

/**
 * Функция, вычисляющая факториал неотрицательного целого числа
 * @param {Number} n - неотрицательное целое число
 *
 * @example
 * // returns 120
 * factorial(5);
 *
 * @throws {TypeError} если n не является целым числом
 * @throws {RangeError} если n отрицательное
 *
 * @returns {Number} факториал числа n (Infinity, если он больше Number.MAX_VALUE)
 */
const factorial = (n) => {
    if (!Number.isInteger(n)) {
        throw new TypeError('Факториал определен только для целых чисел');
    }

    if (n < 0) {
        throw new RangeError('Факториал не определен для отрицательных чисел');
    }

    let result = 1;

    // 171! уже больше Number.MAX_VALUE: после переполнения считать дальше нет смысла
    for (let i = 2; i <= n && result !== Infinity; i++) {
        result *= i;
    }

    return result;
};
