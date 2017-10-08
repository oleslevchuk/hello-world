$(document).ready(function(){
	$("#menu2").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href')

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			destin = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: destin}, 1000);
	});
});



$(document).ready(function() {   
    $('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeIn(1000); 
    $('#mask').fadeTo("slow",0.8); 
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(2000); 
    });
    $('.window .close').click(function (e) { 
    e.preventDefault();
    $('#mask, .window').hide();
    }); 
    $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
    }); 
   }); 




/*
var arr = [1,2,3,4,5,6];
var nArr = arr.filter(function(item) {
	return item % 2 === 0 ? true : false;
})
// відбір парних елементів
// console.log(nArr);
*/

/*
var a = [[1,2,3], [4,5,6]];
a.forEach(function(item, i) {
	a[i].forEach(function(item2) {
		console.log(item2)
	})
})
   // перебір кожного елемента
   // двовимірного масиву forEach
*/


/*
function Counter() {
	var count = 0
	// var n = 0
	this.increment = function(n) {
		var a = count
		if (n >= 0 && typeof(n) === "number") {
			count = count + n;
		}
		console.log(a, count);
	}
	this.decrement = function() {
		var b = count;
		(count > 0) ? count-- : count = b
		console.log(b, count);
	}
}

var counter = new Counter()
counter.increment(3);
counter.increment('kgds');
counter.increment(true);

counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();

*/

/*

var Machine = {
	name: 'Neiron',
	name2: 'hello'
}

function Car() {
}

function Sedan() {
}

Car.prototype = Machine;
var car = new Car();
Sedan.prototype = car;
var sedan = new Sedan();

console.log(car.name);
console.log(sedan.name2);

*/

// ....... lesson 5

// Node.js
// Gulp
// sass
// npm instal
//



/*

#header {
	display: 20px;
}



#header {
	
}

*/