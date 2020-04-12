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