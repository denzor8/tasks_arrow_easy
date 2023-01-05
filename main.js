// let code
//Теория

//unshift()
// Метод unshift() добавляет элементы в начало массива.
// Синтаксис следующий: название_массива.unshift(элемент)

//shift()
// Метод shift() извлекает элементы из начала массива.
// Синтаксис метода shift: название_массива.shift()

//pop
// Метод pop() извлекает элемент из конца массива.
// Синтаксис метода: название_массива.pop()

//slice
// Метод slice() возвращает новый массив, в который копирует элементы, начиная с указанного первого индекса до указанного второго индекса(не включая последний).
// название_массива.slice(начало, конец)

//splice( )
// Метод splice() добавляет, изменяет и удаляет элементы из массива, в зависимости от того что вы укажете внутри скобок.
//название_массива.splice(a, b, elems)
// a - индекс с которого надо начать удаление
// b - количество элементов для удаления
// elems - элементы которые нужно вставить вместо удаленных, передаются через запятую, в неограниченном количестве.

//sort()
// Метод sort() сортирует массив, меняя в нём порядок элементов. По умолчанию метод sort сортирует элементы массива не совсем так как мы ожидаем.
// arr.sort((a, b) => a - b)

//Метод join() создает строку из элементов массива.
// По умолчанию создает строку с запятыми между элементами массива, однако в скобки можно передать каким именно символом мы хотим соединить элементы.
// Синтаксис метода: название_массива.join(соединитель)
// Пустые кавычки указывают "склеить" элементы в строку, вывод в консоль:
//1 +
// let arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr);

//2+
// let arr = ['js', 'css', 'jq']
// let arr2 = arr.shift()
// console.log(arr2)

//3+
// let arr = ['js', 'css', 'jq']
// let arr2 = arr.pop()
// console.log(arr2);

//4 +
//начало индкеса включительно до конца индекса не включительно
// let arr = [5, 2, 4, 2, 7]
// let arr2 = arr.slice(0, 3)
// console.log(arr2);

//5 +
// let arr = [3, 4, 1, 2, 7]
// let arr2= arr.sort((a, b) => a - b)
// console.log(arr2);

//6 начиная с 1 индекса удаляет на 3 индексе заканчивает удаление +
// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.splice(1, 3)
// console.log(arr2)

//7 сортировать по убыванию +
// let arr = [5, 2, 1, -10, 8]
// let arr2 = arr.sort((a, b) => b - a)
// console.log(arr2);

//8 вывести самый длинную строку из массива +
// let arr = ['pen', 'pineapple', 'apple', 'pen']
// let arr2 = arr.sort((a, b) => b.length - a.length).splice(0, 1)
// console.log(arr2)

//9 ответ 121
// let arr = [0, -11, 121, 3, 18]
// let arr2 = arr.sort((a, b) => b - a).splice(0, 1)
// console.log(arr2)

//10-
// push, shift, splice, unshift.
// let arr = ['Джаз', 'Блюз']
// arr.push('Рок-н-ролл')
// arr[Math.floor((arr.length - 1) / 2)] = 'Классика'
// let arr2 = arr.splice(0, 1)
// console.log(arr2)
// arr.unshift("Рэп", "Регги");
// console.log(arr)

//10 верный ответ

// let arr = ['Джаз', 'Блюз'];
// arr.push('Рок-н-ролл');
// arr.splice(arr.length / 2, 1,'Классика');
// let arr2 = arr.shift();
// arr.unshift('Рэп','Регги');
// console.log(arr2);
// console.log(arr);

//11+
// let arr = ["Life", "is", "hard"]
// arr.splice(2, 1, 'good')
// console.log(arr);

//12+
// let arr = [1, 2, 3, 4]
// arr.reverse()
// console.log(arr)

//13-
// let arr = ['один', 'два', 'три', 'четыре']
// arr.splice(0, 1)
// arr.push('Один')
// console.log(arr)

//14+
// let arr = ['один', 'два', 'три', 'четыре']
// let str =arr.join("+")
// console.log(str);

//15
// let arr = [11, 4, 6]
// let arr1 = arr.slice(0, 1)
// let arr2 = arr.slice(1, 2)
// let res = arr1 - arr2
// res = arr.push(res)
// console.log(arr)

//16
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// arr1.push(arr2[0])
// arr1.push(arr2[1])
// arr1.push(arr2[2])
// console.log(arr1)

//*** */
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = []
// arr3.push(arr1[0] + arr1[1] + arr1[2])
// arr3.push(arr2[0] + arr2[1] + arr2[2])
// console.log(arr3)

//17
// let arr = [1, 2, 3]
// arr.reverse()
// console.log(arr)

//18
// let arr = [1, 2, 3]
// arr.push(4, 5, 6)
// console.log(arr);

//19

// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr);

//20
// let arr = [1, 2, 3]
// let arr2= arr.splice(0, 1)
// console.log(arr2)

// let arr = [1, 2, 3, 4, 5]
// let num = 0
// for (i = 0; i < arr.length; i++) {
// 	num += num2*num[i]
// }
// console.log(num)

// ============
//21
// let arr = [1,2,3]
// let arr1 = arr.pop()
// console.log(arr1);
//22
// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.splice(1, 2)
// console.log(arr)
//23
// let arr = [1, 2, 3, 4, 5]
// let arr1 = arr.splice(2,5)
// console.log(arr1)
//24
// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.slice(-2)
// console.log(arr2)
// Jika Joldoshbaeva, [15 дек. 2022 г., 20:29:01]:
//27

// let str = "codingiseasy";
// let arr = str.split('');

// for (let i = 0; i < arr.length; i++){
//     if(i % 2 == !0){
//         arr[i] = arr[i].toUpperCase();
//     }
// }

// let newArr = arr.join('');
// console.log(newArr);

// console.log(arr.join(''));

//28

// let arr1 = [11, 7, 4];
// let arr2 = [22, 0, 8];

// let arr3 = [];

// for (let i = 0; i < arr1.length; i++){
//     for (let j = 0; j < arr2.length; j++){
//         if(i == j){
//             arr3.push(arr1[i]*arr2[j])
//         }
//     }
// }

// console.log(arr3);

//29

// let arr1 = ['Makers','Java','Full'] ;
// let arr2 = ['KG', 'Script', 'Stack'];

// let arr3 = [];

// for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//         if(i == j) {
//             arr3.push(arr1[i]+arr2[j])
//         }
//     }
// }

// console.log(arr3);
