function getMultiplesBy(array, by) {
    return array.filter(function (item) { return item % by === 0; });
}
var nums = [1, 2, 3, 4, 5];
var divisible_by = 2;
var answer = getMultiplesBy(nums, divisible_by);
console.log("\u0427\u0438\u0441\u043B\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 ".concat(nums, ", \u0434\u0435\u043B\u044F\u0449\u0438\u0435\u0441\u044F \u043D\u0430 ").concat(divisible_by, ": ").concat(answer));
