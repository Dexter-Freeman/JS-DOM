let titles = document.getElementsByClassName('title'); // выберет ВСЕ элементы на странице
// содержащие этот класс

// document.getElementsByClassName('className')  возвращает объект HTMLCollection
// который похож на массив, но массивом не является
// к элементам (нодам) входящим в этот "список" можно получить доступ как к элементам массива
// через индекс. Например так titles[0] вернет первый элемент из "массива".

// HTMLCollection имеет свойство length которое отображает количество входящих элементов
// по аналогии с массивами
//
// т.е. элементы в HTMLCollection можно перебрать через цикл
// _____________________________________________________________


let lis = document.getElementsByTagName('li'); 
// вернет все теги li на странице в виде HTMLCollection

// каждому четному элементу li поменяем цвет на red

for ( let i = 0; i < lis.length; i++ ) {
    if ( ( i + 1 ) % 2 === 0 ) lis[i].style.color = 'red';
};

// также мы можем преобразовать HTMLCollection в массив и работать с ним как с массивом

let arrayOfLi = Array.from(lis);

arrayOfLi.forEach((li, index) => {
    if ( (index + 1) % 2 === 0 ) {
        li.style.color = '#444'; // Поменяем color
    }
});

// __________________________________________________________________

let wmf = document.querySelector('#wrapper li:nth-child(2) .name');
// querySelector работает по CSS селекторам, и возвращает первый элемент (Element),
// подходящий под селектор или null если ни чего не нашел

console.log(wmf);

// --------------------------------
// если нужно сделать коллекцию элементов то можно использовать querySelectorAll
// он возвращает статический (не динамический) NodeList у которого доступен метод forEach
// еще раз - у NodeList  есть метод forEach, и еще несколько других методов и свойств

let books = document.querySelectorAll('#book-list li .name'); // все элементы с классом .name
// входящие в li 
// который в свою очередь входит в элемент с id='#book-list'

// console.log('books', books);

books.forEach(book => console.log(book));

console.log('books.length', books.length);