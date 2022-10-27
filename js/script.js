const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnBottom = document.querySelector('.btn-down');
const eleBtnTop = document.querySelector('.btn-up');
const eleOver = document.querySelector('.card');

// creaare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);

	const eleCard = document.createElement('img');
	eleCard.src = arrImages[i];
	eleCard.classList.add('img-size');
	if (i === 0) {
		eleImg.classList.add('overlay');
	}
	eleOver.append(eleCard);
}
// document.querySelector('.slider-img').classList.add('active');

const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile
const listCard = document.querySelectorAll('.img-size');

let activeIndex = 0;

// aggiungere gli event listeners ai due bottoni
eleBtnBottom.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listCard[activeIndex].classList.remove('overlay');
	if (activeIndex == 4){
		activeIndex = -1;
	}
	// incrementare l'active index
	activeIndex++;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listCard[activeIndex].classList.add('overlay');
});

eleBtnTop.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listCard[activeIndex].classList.remove('overlay');
	if (activeIndex == 0){
		activeIndex = 5;
	}
	
	// incrementare l'active index
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listCard[activeIndex].classList.add('overlay');
});