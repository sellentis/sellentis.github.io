window.onload = function() {
	let item = $(".click");
	let counter = 0;
	let firstValue, secondValue, firstIndex, secondIndex;
	let score = 0;
	let steps = 0;
	let scoreBox = $(".gameInfoScore");
	let stepsBox = $(".gameInfoSteps");
	function qwe(clicked) {
		if (counter == 1) {
			console.log(counter)
			clicked.toggleClass("active");
			let secondValue = clicked.data("val");
			secondIndex = clicked.index();
			steps++;
			if (firstValue == secondValue && firstIndex != secondIndex) {
				score++;
				setTimeout(function(){ 
					item.eq(firstIndex).addClass("hidden");
					item.eq(secondIndex).addClass("hidden");
				},700);
			}
			else {
				setTimeout(function(){ 
					item.eq(firstIndex).removeClass("active");
					item.eq(secondIndex).removeClass("active");
				},500);
			}
		}
		if (counter == 0) {
			console.log(counter)
			clicked.toggleClass("active");
			firstValue = clicked.data("val");
			firstIndex = clicked.index();
		}
		counter++;
		if (counter > 1) counter = 0;
		scoreBox.text(score)
		stepsBox.text(steps)
		if (score == 8) {
			setTimeout(function(){ 
				$(".hidden").hide();
				gameView.append("<div>Победа!</div>")
			},700);
		}
	}
	item.click(function() {
		console.log("asdsa");
		clicked = $(this);
		qwe(clicked);
		item.each(function (){
		    this.style.pointerEvents = 'none'; 
		}); 

		setTimeout(function(){ 
			item.each(function (){
				if (!($(this).hasClass("hidden"))) {
					this.style.pointerEvents = 'auto'; 
				}
				else {
					this.style.pointerEvents = 'none';
				}
			}); 
		},500);
	});
}



let gameView = $(".gameView");

let numValues = [];

for (let i = 1; i < 9; i++) {
	numValues.push(i)
	numValues.push(i)
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(numValues);
console.log(numValues)

function createDesc() {
	for (var i = 0; i < 16; i++) {
		gameView.append("<div class='game__item click' data-val='" + numValues[i] + "'></div>");
	}
}
createDesc();
