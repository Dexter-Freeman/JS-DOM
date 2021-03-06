// DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
// про событие DOMContentLoaded объяснение в самом низу

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
// элементами HTMLCollection являются ТОЛЬКО html-ноды (теги)
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


// _______________________________________________

// Changing Text & HTML Content

books.forEach(book => console.log(book.textContent)); 
// textContent позволяет работать с текстовым содержимим dom элементов

books.forEach(book => book.textContent += ' <bold>test</bold>'); // изменяем содержимое


let bookList = document.querySelector('#book-list');

// bookList.innerHTML = '<h2>We changed all inner html!</h2>'; 
bookList.innerHTML += '<p>This is how you add HTML</p>'; 

// Существуют также и другие методы для изменения html содержимого
// например append, appendChild

// _______________________________________________

// Nodes
// В DOM дереве абсолютно все явлется узлами (нодами), даже переносы строк между html-тегами
// ноды обладают большим количеством свойств и методов
// всего есть 12 типов нод

let banner = document.querySelector('#page-banner');

console.log('#page-banner node type is: ', banner.nodeType); // Узнаем тип этой ноды
// вернется число "1", nodeType возвращает числа (1 это html элемент)

console.log('#page-banner node name is: ', banner.nodeName); // DIV

console.log('#page-banner node has child nodes: ', banner.hasChildNodes()); // true

let cloneBanner = banner.cloneNode(true); // ноду можно клонировать 
// если передать true, то склонируется все, включая и дочерние элементы
// если передать false, то склонируется только сама нода (без дочерних элементов)

// _____________________________________________

// Traversing the DOM
// Обход DOM дерева

console.log('parent node of bookList is: ', bookList.parentNode); // аналог parentElement
// вернет родителя bookList, т.е. div с id="wrapper" со всем его содержимым
// т.к. это тоже нода, то вызовы методов и свойств можно выстраивать цепочкой через точку
console.log('parent element of bookList is: ', bookList.parentElement.parentElement);
// таким образом можно обходить дерево нод в сторону родителей

// для обхода в сторону детей и
console.log(bookList.children); // children вернет HTMLCollection из потомков первого уровня
// HTMLCollection(3) [h2.title, ul, p]

// к соседним элементам тоже можно получить доступ
console.log('bookList next sibling is: ', bookList.nextSibling); // вернет ноду переноса строки
console.log('bookList next element sibling is: ', bookList.nextElementSibling);
// вернет следующею соседню ноду - html-тег

console.log('bookList previous sibling is: ', bookList.previousSibling); // вернет ноду переноса строки
console.log('bookList previous element sibling is: ', bookList.previousElementSibling);
// вернет предыдущую соседню ноду - html-тег

// теперь изменим внутреннее содержимое соседней ноды

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else';

// __________________________________________


// Add event listener

let h2 = document.querySelector('#book-list h2'); // выбрали элемент

h2.addEventListener('click', (event) => {
    // event это объект события
    console.log(event.target); // target это элемент, на котором произошло событие
    console.log('event', event);
});

// Навесим обработчик события на несколько элементов сразу

let delBtns = document.querySelectorAll('#book-list .delete');
// выберем все элементы span с классом  .delete и каждому из них добавим addEventListener

// delBtns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let parent = btn.parentElement;
//         console.log('Delete: ', parent.innerHTML);
//         parent.style.display = 'none'; // Таким образом мы просто скроем этот элемент
//         // чтобы удалить его сделаем так:
//         parent.parentElement.removeChild(parent); // выбираем родителя от родителя
//         // и полностью удаляем элемент из DOM дерева
//         // можно сделать и вот так:
//         // parent.parentNode.removeChild(parent);
//     });
//     // -----------------------
//     // Навешиваение событий таким образом не эффективно с точки зрени экономии ресурсов
//     // и при добавлении новой книги в список не будет добавляться к новой кнопке
//     // эффективней навесить обработчик события на родительский элемент
//     // ------------------------
// });

// теперь отменим поведение события по умолчанию:

let link = document.querySelector('.git-hub');
link.addEventListener('click', e => {
    e.preventDefault();
    console.log('you just ckicked on the link ', e.target.textContent);
});

// ___________________________________________________________

// Event Bubbling - Всплытие события

let list = document.querySelector('#book-list ul');
list.addEventListener('click', e => {
    if ( e.target.className === 'delete' ) {
        let li = e.target.parentElement;
        // удалить этот элемент списка можно двумя способами
        // li.parentElement.removeChild(li); // родитель элемента li это ul, в нашем случае list
        list.removeChild(li);
        console.log('delete book');
    }
    // при клике на кнопку delete, событие всплывает и обрабатывается на родителе
    // т.е. мы навешиваем обработчик не на каждую кнопку, а делаем всего один обработчик
});

// ______________________________________________________________

// Interacting with Forms

let addForm = document.forms['add-book'];
// свойство forms объекта document возвращает HTMLCollection состоящую из всех форм на странице
// к каждой форме можно достучаться через индекс document.forms[0] или по id формы document.forms['add-book']

addForm.addEventListener('submit', e => {
    // останавливаем поведение по умолчанию
    e.preventDefault();
    let input = addForm.querySelector('input[type="text"]');
    let value = addForm.querySelector('input[type="text"]').value;
    // получаем значение из инпута. Так можно получить значение любого инпута
    if ( !value ) return; // если ничего не ввели, то ничего не делать
   
    console.log('input new book ', value);


    // Creating Elements

    // создаем новый элемент списка
    let li = document.createElement('li');
    let bookName = document.createElement('span');
    let deletBtn = document.createElement('span');

    // добавляем текстовое содержимое
    bookName.textContent = value;
    deletBtn.textContent = 'Delete';

    // добавляем стили
    bookName.className = 'name'; // className возвращает строку состоящую из названий классов
    deletBtn.classList.add('delete'); // classList возвращает список классов

    // вставляем в документ
    li.appendChild(bookName); // appendChild добавляет элемент в конец тега
    li.appendChild(deletBtn);
    list.appendChild(li);

    // очищаем инпут
    input.value = '';
});

// ______________________________________

// Atributes

let firstBook = document.querySelector('li:first-child .name');

// значение определенного атрибута можно получить через метод getAttribute('attribute-name')
let styleAtr = firstBook.getAttribute('class');

console.log('styleAtr', styleAtr);

// для того чтобы изменить значение атрибута используем метод setAttribute('attribute-name', 'attribute-value')
firstBook.setAttribute('id', 'newId');

console.log(firstBook.getAttribute('id'));

// для того чтобы проверить есть ли какой-либо атрибут у элемента hasAttribute('attribute-name')

console.log('is firstBook has class atr', firstBook.hasAttribute('class'));
console.log('is firstBook has id atr', firstBook.hasAttribute('id'));

// для удаления атрибута removeAttribute('attribute-name')
firstBook.removeAttribute('id');
console.log('remove id');
console.log('is firstBook has id atr', firstBook.hasAttribute('id'));

// _______________________________________

// Checkboxes & Change Events

// hide books

let hideBox = document.querySelector('#hide');
// выбрали нужный нам чекбокс

hideBox.addEventListener('change', e => {
    
    // hideBox.checked ? list.style.display = 'none' : list.style.display = 'initial';
    // будет работать и так и так как ниже
    list.style.display = hideBox.checked ? 'none' : 'initial';
    console.log('hide all books');
});

// _______________________________________________

// Custom Search Filter

// let searchInput = document.querySelector('#search-books input');
let searchInput = document.forms['search-books'].querySelector('input');
// выбрать элемент можно разными способами
console.log('searchInput', searchInput);

searchInput.addEventListener('keyup', e => {
    const searchStr = e.target.value.toLowerCase();
    // содержимое инпута приведем к нижнему регистру

    let books = Array.from(list.getElementsByTagName('li'));
    books.forEach(book => {
        let title = book.firstElementChild.textContent.toLowerCase();
        // приводим название книги к нижнему регистру
        book.style.display = title.indexOf(searchStr) != -1 ? 'block' : 'none';
        // если название не содержит строку поиска, то скрываем эту книгу
        // либо вот так
        // if ( title.indexOf(searchStr) != -1 ) {
        //     book.style.display = 'block';
        // } else book.style.display = 'none';
    });
});

// ___________________________________________

// Tabbed Content

let tabs = document.querySelector('.tabs');
let panels = document.querySelectorAll('.panel');
// querySelectorAll возвращает NodeList а у него есть метод forEach

tabs.addEventListener('click', e => {

    if ( e.target.tagName != 'LI' ) return;
    // если кликнули НЕ по li, то ничего не делаем
    
    const targetPanel = document.querySelector(e.target.dataset.target);
    // выбираем ту панель у которой id совпадает со значением атрибута data-target
    // у элемента li по которому кликнули
    // далее пройдемся циклом по всем панелям. Если поанель совпадает с targetPanel то 
    // добавим ей класс active. если нет, то удалим этот класс
    panels.forEach(panel => {
        if ( panel == targetPanel ) {
            panel.classList.add('active');
        } else panel.classList.remove('active');
    });
    
    // также и у li-шек добавляем или удаляем класс active
    // для этого выберем все элементы li в элементе tabs
    let tabsList = tabs.querySelectorAll('li');
    tabsList.forEach(tab => {
        if ( tab == e.target ) {
            tab.classList.add('active');   
            } else tab.classList.remove('active');
    });
});

// ___________________________________

});

// Событие DOMContentLoaded происходит когда весь HTML был полностью загружен
// и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, 
// изображений и фреймов. 
// Значительно отличающееся от него событие "load" используется для
//  отслеживания только полностью загруженной страницы. 

// Если в html тег script поместить в конце документа, то все функции отработают нормально,
// НО если тег script поместить в шапку, то возникнут проблемы, т.к. javaScript прочитается
// раньше чем тело html и скрипт отработает с обишбками или не отработает вовсе.
// Для того чтобы наши скрипты отабатывали не зависимо от того в каком месте html документа
// распологается тег script, мы на весь документ навешиваем событие "DOMContentLoaded"
// и в его коллбек закидываем все наши скрипты. Тогда они будут отрабатывать всегда.

// _______________________________________________________________________