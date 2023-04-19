import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import mixitup from 'mixitup';


flsFunctions.isWebp();


//--------MixitUp---------
if (document.querySelector(".gallery__inner")) {
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living',
		}
	});
}
//--------MixitUp-End--------



// ------Swiper-------
Swiper.use([Navigation, Pagination, Parallax, Autoplay]);

// if (document.querySelector('.slider-section__body')) {
// 	new Swiper('.slider-section__body', {
// 		observer: true, //обновляет swiper при изменении элементов слайдера
// 		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
// 		slidesPerView: 1,
// 		spaceBetween: 0,
// 		// slidesPerGroup: 4, //если нужно чтобы кол-во dots было меньше кол-ва slides. Slides будут перелистываться группами
// 		// centeredSlides: true, //Активный слайд по центру
// 		loop: true, // pза последним слайдем будет идти заново первый
// 		watchOverflow: false,
// 		speed: 800,
// 		loopAdditionalSlides: 5,
// 		preloadImage: false,
// 		// parallax: true,
// 		simulateTouch: false, //вкл/выкл перетаскинавия на ПК
// 		pagination: {
// 			el: '.slider-section__controls .dots',
// 			clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
// 			dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
// 		},
// 		// autoplay: {
// 		// 	delay: 3000, //Пауза м.д. прокрутками
// 		// 	stopOnLastSlide: false,
// 		// 	disabledOnInteraction: false,
// 		// },
// 		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
// 		// navigation: {
// 		// 	nextEl: '.slider-section .slider-arrow--next',
// 		// 	prevEl: '.slider-section .slider-arrow--prev',
// 		// },
// 		// breakpoints: { //Mobile First - значения от заданной точки и больше 
// 		// 	279: {
// 		// 		slidesPerView: 1.1,
// 		// 		spaceBetween: 15,
// 		// 	},
// 		// 	768: {
// 		// 		slidesPerView: 2,
// 		// 		spaceBetween: 20,
// 		// 	},
// 		// 	992: {
// 		// 		slidesPerView: 3,
// 		// 		spaceBetween: 32,
// 		// 	},
// 		// }
// 	});
// }
if (document.querySelector('.slider-intro__body')) {
	new Swiper('.slider-intro__body', {
		observer: true, //обновляет swiper при изменении элементов слайдера
		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true, // за последним слайдем будет идти заново первый
		watchOverflow: false,
		speed: 800,
		loopAdditionalSlides: 5,
		preloadImage: false,
		simulateTouch: true, //вкл/выкл перетаскивания на ПК
		pagination: {
			el: '.slider-intro__controls .dots',
			clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
			dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
		},
		// autoplay: {
		// 	delay: 3000, //Пауза м.д. прокрутками
		// 	stopOnLastSlide: false,
		// 	disabledOnInteraction: false,
		// },
		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
		// breakpoints: { //Mobile First - значения от заданной точки и больше 
		// 	279: {
		// 		slidesPerView: 1.1,
		// 		spaceBetween: 15,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 32,
		// 	},
		// }
	});
}
// ------Swiper-End-------



window.onload = function () {
	document.addEventListener('click', documentActions);

	//-------Active links on Page--------
	const page = document.querySelector('.page');
	if (page.classList.contains("main-page")) {
		const elements = document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Elements") {
				elem.classList.add('active-header-link');
			}
		})
	}
	if (page.classList.contains("gallery")) {
		const gallery = document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Gallery") {
				elem.classList.add('active-header-link');
			}
		})
	}
	if (page.classList.contains("contact")) {
		const contact = document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Contact") {
				elem.classList.add('active-header-link');
			}
		})
	}
	if (page.classList.contains("blog-page")) {
		const contact = document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Blog") {
				elem.classList.add('active-header-link');
			}
		})
	}
	//-------Active links on Page-End-------



	//------Действия-при-кликах------
	function documentActions(e) {
		const targetElement = e.target;


		//------------Close/Open-rightsite-menu-------------
		if (targetElement.classList.contains('header__btn') || targetElement.closest('.header__btn')) {
			document.querySelector(".rightsite-menu").classList.remove('rightsite-menu--close');
		}
		if (targetElement.classList.contains('rightsite-menu__close') || targetElement.closest('.rightsite-menu__close')) {
			document.querySelector(".rightsite-menu").classList.add('rightsite-menu--close');
		}
		//------------Close/Open-rightsite-menu-End------------


		// ---------Если кликнули на бургер---------
		if (targetElement.classList.contains('burger') || targetElement.closest('.burger')) {

			const elem = targetElement.classList.contains('burger') ? targetElement : targetElement.closest('.burger');
			elem.classList.toggle('active-burger');

			const menuBody = document.querySelectorAll('.menu');
			menuBody.forEach(item => {
				item.classList.toggle('menu--open');
			})
		}
		// -------Если кликнули на бургер-End----------


		// -----Purched-blog-----------
		if (targetElement.classList.contains('icon-close') || targetElement.closest('.icon-close')) {
			const purchedBlog = document.querySelector('.purched');
			purchedBlog.classList.remove('purched--visible');
		}

		// -------Purched-blog-End------

	}
	//------Действия-при-кликах-End-----

}