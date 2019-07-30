'use strict';

//ЗАДАНИЕ №2 ДЗ

let i = null;

for (i = 0; i <= 10; i++) {
	if(i == 0) {
		console.log(i + ' ' + '- это ноль');
	} else if(i % 2 == 0) {
		console.log(i + ' ' + '- это чётное число');
	} else {
		console.log(i + ' ' + '- это нечётное число');
	}
}

//ЗАДАНИЕ №3 ДЗ

const post = {
	author: "John",//выводим этот текст 
	postID: 23, 
	comments: [
	{
		userId: 10,
		userName: "Alex",
		text: "lorem ipsum",
		rating: {
			likes: 10,
			dislikes: 2 //выводим этот текст 
		}
	},
	{
		userId: 5, //выводим этот текст 
		userName: "Jane",
		text: "lorem ipsum 2", //выводим этот текст 
		rating: {
			likes: 3,
			dislikes: 1
		}
	},
	]
}
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//ЗАДАНИЕ №4 ДЗ

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

products.forEach(function(element) {
	element.price = element.price * 0.85;
});
console.log(products);

//ЗАДАНИЕ №5 ДЗ 

const wares = [
{
	id: 3,
	price: 127,
	photos: [
		"1.jpg",
		"2.jpg",
	]
},
{
	id: 5,
	price: 499,
	photos: []
},
{
	id: 10,
	price: 26, 
	photos: [
		"3.jpg"
	]
},
{
	id: 8,
	price: 78,
}
];


const withPhoto = wares.filter(element => "photos" in element && element.photos.length > 0);
console.log(withPhoto);

wares.sort(function(a, b) {
	return a.price - b.price;
});
console.log(wares);

//ЗАДАНИЕ №6 ДЗ 

for(let j = 1; j <= 10; console.log(j++)) {};

//ЗАДАНИЕ №7 ДЗ 

 let pyr = []; // сделал свой альтернативный вариант пирамиды. Получилось топорно, но альтернатива ))  
    for (var l = 0; l < 20; l++) {
        pyr.push('x');
        console.log(pyr);
    };

