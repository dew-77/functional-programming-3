var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
function getMultiplesBy(array, by) {
    return array.filter(function (item) { return item % by === 0; });
}
var nums = [1, 2, 3, 4, 5];
var divisible_by = 2;
var answer = getMultiplesBy(nums, divisible_by);
console.log("\u0427\u0438\u0441\u043B\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 ".concat(nums, ", \u0434\u0435\u043B\u044F\u0449\u0438\u0435\u0441\u044F \u043D\u0430 ").concat(divisible_by, ": ").concat(answer));
// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
function customJoin(strings, separator) {
    return strings.join(separator);
}
var words = ["searching", "for", "ideas", "to", "write", "text"];
var result = customJoin(words, " ");
console.log(result);
// Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
function sortByProperty(items, property) {
    return __spreadArray([], items, true).sort(function (a, b) {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}
var phones = [
    { brand: "Apple", model: "iPhone 15", price: 699 },
    { brand: "Samsung", model: "Galaxy S22", price: 799 },
    { brand: "Google", model: "Pixel 9", price: 899 }
];
var sortedByPrice = sortByProperty(phones, "price");
console.log(sortedByPrice);
// Функция, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая выполняет логирование перед вызовом исходной функции.
function addLogging(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var functionName = fn.name || 'anonymous function';
        console.log("\u0412\u044B\u0437\u043E\u0432 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 ".concat(functionName, " \u0441 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438:"), args);
        var result = fn.apply(void 0, args);
        console.log("\u0424\u0443\u043D\u0446\u043A\u0438\u044F ".concat(functionName, " \u0432\u0435\u0440\u043D\u0443\u043B\u0430:"), result);
        return result;
    };
}
function add(a, b) {
    return a + b;
}
var funcWithLogging = addLogging(add);
funcWithLogging(3, 5);
