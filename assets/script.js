const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variables
let i = 0;
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");

const dotsContainer = document.querySelector(".dots");

// Événements pour les flèches gauches et droites
arrowLeft.addEventListener("click", function () {
	i--;
	if (i === -1) {
		i = slides.length - 1;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i);
});

arrowRight.addEventListener("click", function () {
	i++;
	if (i === slides.length) {
		i = 0;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i);
});

// Créer et ajouter des bullet points en fonction du nombre d'images dans le slider
for (let d = 0; d < slides.length; d ++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
}

// Sélectionner et ajouter la classe dot_selected à la première image du slider
const dotWhite = dotsContainer.querySelectorAll(".dot");
dotWhite[0].classList.add("dot_selected");


// Mettre les bullet points à jour en fonction du numéro de l'image
function dynamicBullets(count) {
	dotWhite.forEach((dot, index) => {
		if (index === count) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
	})
}
