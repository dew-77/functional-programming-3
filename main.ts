// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только числа, кратные заданному числу.
function getMultiplesBy<NumbersType extends number>(array: NumbersType[], by: NumbersType): NumbersType[] {
    return array.filter((item) => item % by === 0);
}

const nums: number[] = [1, 2, 3, 4, 5]
const divisible_by: number = 2;
const answer: number[] = getMultiplesBy(nums, divisible_by)
console.log(`Числа массива ${nums}, делящиеся на ${divisible_by}: ${answer}`)


// Функция, которая принимает массив строк и возвращает новую строку, содержащую все строки, объединенные заданным разделителем.
function customJoin(strings: string[], separator: string): string {
    return strings.join(separator);
  }

const words = ["searching", "for", "ideas", "to", "write", "text"];
const result = customJoin(words, " ");
console.log(result);


// Функция, которая принимает массив объектов и возвращает новый массив, отсортированный по значению определенного свойства.
function sortByProperty<T>(items: T[], property: keyof T): T[] {
    return [...items].sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }

interface Phone {
    brand: string;
    model: string;
    price: number;
  }

const phones: Phone[] = [
{ brand: "Apple", model: "iPhone 15", price: 699 },
{ brand: "Samsung", model: "Galaxy S22", price: 799 },
{ brand: "Google", model: "Pixel 9", price: 899 }
];

const sortedByPrice = sortByProperty(phones, "price");
console.log(sortedByPrice);


// Функция, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая выполняет логирование перед вызовом исходной функции.
function addLogging<T extends (...args: any[]) => any>(fn: T): T {
  return function (...args: Parameters<T>): ReturnType<T> {
    const functionName = (fn as unknown as { name: string }).name || 'anonymous function';
    console.log(`Вызов функции ${functionName} с аргументами:`, args);
    const result = fn(...args);
    console.log(`Фунцкия ${functionName} вернула:`, result);
    return result;
  } as T;
}

function add(a: number, b: number): number {
return a + b;
}

const funcWithLogging = addLogging(add);

funcWithLogging(3, 5);