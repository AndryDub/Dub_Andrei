// var score;
// score = 0;

var firstName = 'Pitter';
var lastName = 'Parker';
var fullName = firstName + ' ' + lastName;
var age = 22;
var isSuperHero = true;
var formName = 'подписка';
var formRegistration = 'рассылка';

// Изменение стоимости цены товара с помощью переменной
var price = 20;
var itemsOrdered = 15;
var totalCost = price * itemsOrdered;

// При сложениичисел "строка и число" происходит конкатенация строк
var numOfVisits = 105;
var message = 'Вы посетили этот сайт '
+ numOfVisits + ' раз.';

// При умножении строки и числа происходит правильное умножение (без добавления команды Number)
var numOFShoes = '2';
var numOfSocks = 4;
var totalItems = Number (numOFShoes) + numOfSocks;
var shoePrice = numOFShoes * numOfSocks;

// Используем переменную в качестве слагаемого, вычитаемого, умножения, деления
var score = 0;
score = score + 100; // score += 100
score = score - 10; // score -= 10
score = score * 10; // score *= 10
score = score / 10; // score /= 10
score = score + 1; // score ++
score = score - 1; // score --

var name1 = 'Ivan';
var message1 = 'Hello';
// message1 = message1 + ' ' + name1;
message1 += ' ' + name1;
