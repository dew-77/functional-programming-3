// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.

function getMultiplesBy<NumbersType extends number>(array: NumbersType[], by: NumbersType): NumbersType[] {
    return array.filter((item) => item % by === 0);
}

const nums: number[] = [1, 2, 3, 4, 5]
const divisible_by: number = 2;
const answer: number[] = getMultiplesBy(nums, divisible_by)
console.log(`Числа массива ${nums}, делящиеся на ${divisible_by}: ${answer}`)

// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.

function customJoin()