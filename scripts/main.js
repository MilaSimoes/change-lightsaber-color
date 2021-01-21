let colors = document.querySelector('#lightsaber-colors');
let lightColor = document.querySelector('#lightOne');
let lightTwo = document.querySelector('#lightTwo');
let detailTwoRight = document.querySelector('#detailTwoRight');
let detailTwoLeftt = document.querySelector('#detailTwoLeft');
let saberBase = document.querySelector('#saberBase');
let doubleLightSaberBtn = document.querySelector('#double-bladed-lightsaber-Btn');

colors.onclick = function(e) {
	let color = e.target.id;
	if(colors !== "lightsaber-colors") {
		lightOne.style.boxShadow = `0 0 20px ${color}, inset 0 0 5px 0.5px ${color}`;
		lightTwo.style.boxShadow = `0 0 20px ${color}, inset 0 0 5px 0.5px ${color}`;
	}
}

doubleLightSaberBtn.onclick = function() {
	saberBase.style.transform = 'rotate(360deg) ';
	saberBase.style.transition = 'transform 2s';
	lightTwo.style.display = 'block';
	detailTwoRight.style.display = 'block';
	detailTwoLeft.style.display = 'block';
	lightTwo.style.bottom = '-300px';
}




