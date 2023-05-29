import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import mixitup from 'mixitup';
import { spoilers } from "./modules/spoilers.js";
import { filters } from "./modules/filters.js";
import SimpleBar from 'simplebar';

flsFunctions.isWebp();
spoilers();
filters();

// ------Simplebar-----------------
if (document.querySelector('.card__descr-nav')) {
	new SimpleBar(document.querySelector('.card__descr-nav'));
}
// ------Simplebar-End----------------

//--------MixitUp------------------------------------------------------------------
if (document.querySelector(".products__inner")) {
	var mixer = mixitup('.products__inner');
}
//--------MixitUp-End---------------------------------------------------------------

const sizeSelect = document.querySelector('.size-select');
const colorSelect = document.querySelector('.color-select');


// ------Swiper-----------------------------------------------------------------------
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
if (document.querySelector('.slider-catalog__body')) {
	new Swiper('.slider-catalog__body', {
		observer: true, //обновляет swiper при изменении элементов слайдера
		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
		slidesPerView: 1,
		spaceBetween: 0,
		// slidesPerGroup: 4, //если нужно чтобы кол-во dots было меньше кол-ва slides. Slides будут перелистываться группами
		// centeredSlides: true, //Активный слайд по центру
		loop: true, // pза последним слайдем будет идти заново первый
		watchOverflow: false,
		speed: 800,
		loopAdditionalSlides: 5,
		preloadImage: false,
		// parallax: true,
		simulateTouch: true, //вкл/выкл перетаскинавия на ПК
		// pagination: {
		// 	el: '.slider-catalog__controls .dots',
		// 	clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
		// 	dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
		// },
		// autoplay: {
		// 	delay: 3000, //Пауза м.д. прокрутками
		// 	stopOnLastSlide: false,
		// 	disabledOnInteraction: false,
		// },
		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
		navigation: {
			nextEl: '.slider-catalog .slider-arrow--next',
			prevEl: '.slider-catalog .slider-arrow--prev',
		},
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
if (document.querySelector('.slider-card__body')) {
	new Swiper('.slider-card__body', {
		observer: true, //обновляет swiper при изменении элементов слайдера
		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true, // за последним слайдем будет идти заново первый
		watchOverflow: false,
		speed: 800,
		loopAdditionalSlides: 5,
		preloadImage: false,
		// parallax: true,
		simulateTouch: true, //вкл/выкл перетаскинавия на ПК
		pagination: {
			el: '.slider-card__controls .dots',
			clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
		},
		// autoplay: {
		// 	delay: 3000, //Пауза м.д. прокрутками
		// 	stopOnLastSlide: false,
		// 	disabledOnInteraction: false,
		// },
		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
		// navigation: {
		// 	nextEl: '.slider-catalog .slider-arrow--next',
		// 	prevEl: '.slider-catalog .slider-arrow--prev',
		// },
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
if (document.querySelector('.slider-related__body')) {
	new Swiper('.slider-related__body', {
		observer: true, //обновляет swiper при изменении элементов слайдера
		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 0,
		loop: true, // за последним слайдем будет идти заново первый
		watchOverflow: false,
		speed: 800,
		loopAdditionalSlides: 5,
		preloadImage: false,
		// parallax: true,
		simulateTouch: true, //вкл/выкл перетаскинавия на ПК
		pagination: {
			el: '.slider-related__controls .dots',
			clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
		},
		// autoplay: {
		// 	delay: 3000, //Пауза м.д. прокрутками
		// 	stopOnLastSlide: false,
		// 	disabledOnInteraction: false,
		// },
		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
		// navigation: {
		// 	nextEl: '.slider-catalog .slider-arrow--next',
		// 	prevEl: '.slider-catalog .slider-arrow--prev',
		// },
		breakpoints: { //Mobile First - значения от заданной точки и больше 
			180: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			468: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1350: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},

		}
	});
}
// ------Swiper-End---------------------------------------------------------------------




window.onload = function () {
	document.addEventListener('click', documentActions);

	//-------Active links on Page------------------------------------------------------
	const page = document.querySelector('.page');
	if (page.classList.contains("main-page")) {
		document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Elements") {
				elem.classList.add('active-link');
			}
		});
		document.querySelectorAll('.banners__item-content').forEach(elem => {
			const title = elem.querySelector('.banners__item-title');
			const link = elem.querySelector('.banners__item-link');
			if (title.textContent === "Summer Romance") {
				link.classList.add('active-link');
			}
		});
	}
	if (page.classList.contains("catalog-page")) {
		document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Shop") {
				elem.classList.add('active-link');
			}
		});
	}
	if (page.classList.contains("card-page")) {
		document.querySelectorAll('.menu__list-link').forEach(elem => {
			if (elem.textContent === "Shop") {
				elem.classList.add('active-link');
			}
		});
	}
	// if (page.classList.contains("contact")) {
	// 	const contact = document.querySelectorAll('.menu__list-link').forEach(elem => {
	// 		if (elem.textContent === "Contact") {
	// 			elem.classList.add('active-header-link');
	// 		}
	// 	})
	// }
	// if (page.classList.contains("blog-page")) {
	// 	const contact = document.querySelectorAll('.menu__list-link').forEach(elem => {
	// 		if (elem.textContent === "Blog") {
	// 			elem.classList.add('active-header-link');
	// 		}
	// 	})
	// }
	//-------Active links on Page-End----------------------------------------------------


	//--------selects----------
	document.querySelectorAll('.custom-select').forEach(elem => {
		elem.addEventListener("click", (e) => {
			e.currentTarget.classList.toggle('custom-select--open');

			if (e.target.classList.contains('custom-select__item')) {
				let text = e.target.textContent;
				e.currentTarget.querySelector('.custom-select__top').textContent = text;
			}
		})
	});

	//---------selects-End

	//-------Change-puched-blog-content--------------------------------------------------
	const purchedBlogData = [
		{
			imgSrc: 'img/purched/purched-1.jpg',
			title: 'Faux shearling double-breasted coat',
			info: '15 minutes ago London, Great Britain'
		},
		{
			imgSrc: 'img/purched/purched-2.jpg',
			title: 'Band-collar popover coat',
			info: '20 minutes ago Rome, Italy'
		},
		{
			imgSrc: 'img/purched/purched-3.jpg',
			title: 'Triple stone drop earrings',
			info: '25 minutes ago Kazan, Russia'
		},
		{
			imgSrc: 'img/purched/purched-4.jpg',
			title: 'Backpack with contrasting buckle',
			info: '30 minutes ago San-Francisco, USA'
		},
		{
			imgSrc: 'img/purched/purched-5.jpg',
			title: 'Tailored indigo jumpsuit',
			info: '35 minutes ago Seoul, South Korea'
		}
	]
	const purchedBlog = document.querySelector('.purched');
	if (purchedBlog) {
		let counter = 0;
		let delay = 5000;
		const changePurchedBlogContent = () => {
			purchedBlog.classList.remove('purched--visible');
			setTimeout(() => {
				purchedBlog.classList.add('purched--visible');
			}, delay - 2000);

			const stringImgSrc = `${purchedBlogData[counter].imgSrc}`;
			const stringTitle = `${purchedBlogData[counter].title}`;
			const stringInfo = `${purchedBlogData[counter].info};`

			purchedBlog.querySelector('.purched__img').src = stringImgSrc;
			purchedBlog.querySelector('.purched__title').textContent = stringTitle;
			purchedBlog.querySelector('.purched__info').textContent = stringInfo;

			counter++;
			if (counter === purchedBlogData.length) {
				counter = 0;
			}
		}

		changePurchedBlogContent();
		setInterval(changePurchedBlogContent, delay);
	}
	//-------Change-puched-blog-content-End----------------------------------------------

	//------Действия-при-кликах----------------------------------------------------------
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


		// -----Purched-blog-Click-on-close-btn-------
		if (targetElement.classList.contains('purched__icon-close') || targetElement.closest('.purched__icon-close')) {
			purchedBlog.classList.remove('purched--visible');
		}
		// -------Purched-blog-Click-on-close-btn-End-----------------------


		//-----появление рекламного баннера через 5сек после закрытия---------
		if (targetElement.classList.contains('advertise-banner__close-btn') || targetElement.closest('.advertise-banner__close-btn')) {
			const header = document.querySelector('.header');
			const catalogIntro = document.querySelector('.catalog-intro');
			const advertise = document.querySelector('.advertise-banner');
			header.classList.remove('close-unclicked');
			catalogIntro.classList.remove('close-unclicked');
			advertise.classList.remove('close-unclicked');

			setTimeout(() => {
				header.classList.add('close-unclicked');
				catalogIntro.classList.add('close-unclicked');
				advertise.classList.add('close-unclicked');
			}, 5000);
		}
		//----------появление рекламного баннера через 5сек после закрытия-End--------

		//----------Filter-----------
		if (targetElement.classList.contains('filter__hide-btn') || targetElement.classList.contains('filter__hide-block') || targetElement.closest('.filter__hide-block')) {
			const itemBottom = document.querySelectorAll(".filter__item-bottom--open");
			if (itemBottom) {
				itemBottom.forEach(item => {
					const closestFilterItem = item.closest('.filter__item');
					const filterToggle = closestFilterItem.querySelector('.filter__toggle');
					filterToggle.classList.remove('icon-minus');
					filterToggle.classList.add('icon-plus');
					item.classList.remove('filter__item-bottom--open');
				})
			}
		}

		if (targetElement.classList.contains('filter__toggle') || targetElement.closest('.filter__toggle') || targetElement.classList.contains('filter__item-title')) {
			const closestFilterItem = targetElement.closest('.filter__item');
			const filterToggle = closestFilterItem.querySelector('.filter__toggle');
			if (filterToggle.classList.contains('icon-minus')) {
				filterToggle.classList.remove('icon-minus');
				filterToggle.classList.add('icon-plus');
				closestFilterItem.querySelector('.filter__item-bottom').classList.remove("filter__item-bottom--open");
			} else {
				filterToggle.classList.remove('icon-plus');
				filterToggle.classList.add('icon-minus');
				closestFilterItem.querySelector('.filter__item-bottom').classList.add("filter__item-bottom--open");
			}
		}
		//----------Filter-End----------



		//----------Click on "Column number" - block------------
		if (targetElement.classList.contains('props__column-button')) {
			const catalogProducts = document.querySelector('.catalog__products');
			const propsAllButtons = document.querySelectorAll('.props__column-button');
			let beforeStatus = catalogProducts.dataset.columns;
			const currentStatus = targetElement.dataset.column;

			if (beforeStatus !== currentStatus) {
				propsAllButtons.forEach(button => {
					if (button.classList.contains('props__column-button--active')) {
						button.classList.remove('props__column-button--active');
					}
				})
				catalogProducts.dataset.columns = currentStatus;
				beforeStatus = currentStatus;
				propsAllButtons.forEach(button => {
					if (button.textContent === beforeStatus) {
						button.classList.add('props__column-button--active');
					}
				})
			}
		}
		//----------Click on "Column number" - block-End-----------

		//----------click on clear-btn on card-page----------
		if (targetElement.classList.contains('card__clear-btn') || targetElement.closest('.card__clear-btn')) {
			sizeSelect.querySelector('.card__select--selected').textContent = 'select a size';
			const activeBtnSize = sizeSelect.querySelector('.size-select__btn--active');
			if (activeBtnSize) {
				activeBtnSize.classList.remove('size-select__btn--active');
			}
			colorSelect.querySelector('.card__select--selected').textContent = 'choose color';
			const activeBtnColor = colorSelect.querySelector('.color-select__btn--active');
			if (activeBtnColor) {
				activeBtnColor.classList.remove('color-select__btn--active');
			}

		}
		//----------click on clear-btn on card-page-End---------

		//--------click on description-link on card-page--------
		if (targetElement.classList.contains('card__descr-link') || targetElement.closest('.card__descr-link')) {
			document.querySelectorAll('.card__descr-text').forEach(item => {
				item.classList.remove('card__descr-text--active');
			});
			const hrefAttr = targetElement.getAttribute('href');
			document.querySelectorAll('.card__descr-text').forEach(item => {
				if (item.dataset.target === hrefAttr) {
					console.log(item.dataset);
					item.classList.add('card__descr-text--active');
				}
			});
		}
		if (targetElement.classList.contains('card__descr-link-span')) {
			document.querySelectorAll('.card__descr-text').forEach(item => {
				item.classList.remove('card__descr-text--active');
			});
			const hrefAttr = targetElement.closest('.card__descr-link').getAttribute('href');
			document.querySelectorAll('.card__descr-text').forEach(item => {
				if (item.dataset.target === hrefAttr) {
					console.log(item.dataset);
					item.classList.add('card__descr-text--active');
				}
			});
		}
		//--------click on description-link on card-page-End----

	}
	//------Действия-при-кликах-End-------------------------------------------------------------


	// ----чекбоксы------ 
	const catalogFilter = document.querySelector('.catalog__filter');
	const catalogChoice = document.querySelector('.catalog__choice');

	const createChoiceItem = (content) => {
		return (`<div class="choice__item choice-btn">
		<span class="icon-close"></span>
		<span class="choice-btn__name">${content}</span>
		</div>`);
	}

	if (catalogFilter && catalogChoice) {

		catalogFilter.querySelectorAll('.count').forEach(count => {
			if (count.textContent === '0') {
				count.style.visibility = 'hidden';
			}
		});

		catalogFilter.addEventListener('change', (event) => {
			const target = event.target;


			// **-------------РАБОТАЕМ ВНУТРИ ОДНОГО ФИЛЬТРА, ГДЕ БЫЛ CHECK------------
			const closestFilter = target.closest('.filter__item');
			const inputsArr = closestFilter.querySelectorAll('.custom-checkbox__input');
			let checkedInputCounter = 0;

			inputsArr.forEach(input => {
				if (input.checked) {
					checkedInputCounter += 1;
				}
			});

			// если фильтры содержат чекбокс с опцией выделить все позиции;
			const allInput = closestFilter.querySelector('.all');
			if (allInput) {
				if (target === allInput && allInput.checked) {
					inputsArr.forEach(input => {
						if (input !== allInput && !input.checked) {
							input.checked = true;
							checkedInputCounter += 1;
						}
					});
				}
				if (target === allInput && !allInput.checked && checkedInputCounter === 9) {
					closestFilter.querySelectorAll('.custom-checkbox__input').forEach(input => {
						input.checked = false;
						if (input !== allInput) {
							checkedInputCounter -= 1;
						}
					});
				}
				if (target !== allInput && allInput.checked) {
					if (checkedInputCounter !== 10) {
						allInput.checked = false;
						checkedInputCounter -= 1;
					}
				}
				if (target !== allInput && !allInput.checked && checkedInputCounter === 9) {
					allInput.checked = true;
					checkedInputCounter += 1;
				}
			}
			// если фильтры содержат чекбокс с опцией выделить все позиции-End---;

			// **-------------РАБОТАЕМ ВНУТРИ ОДНОГО ФИЛЬТРА, ГДЕ БЫЛ CHECK-END-----------



			//  !!-------------РАБОТАЕМ ВНУТРИ ВСЕГО КАТАЛОГА (ПО ВСЕМ ФИЛЬТРАМ)------------
			const allInputs = catalogFilter.querySelectorAll('.custom-checkbox__input');
			const allCheckedInputs = [];
			const checkboxAll = catalogFilter.querySelector('.all');
			catalogChoice.innerHTML = '';

			allInputs.forEach(input => {
				if (checkboxAll.checked) {
					if (!(input.closest('.filter__item').querySelector('.all')) && input.checked) {
						allCheckedInputs.push(input);
					}
				} else {
					if (input.checked) {
						allCheckedInputs.push(input);
					}
				}
			});

			if (allCheckedInputs.length) {
				catalogChoice.innerHTML = `<button class="choice__item clear-btn choice-clear-btn">
				<span class="choice-btn__name">Clear all</span>
				</button>`;
				catalogChoice.style.display = 'flex';
				allCheckedInputs.forEach(input => {
					const content = input.closest('.custom-checkbox').querySelector('.checkbox-content').textContent;
					catalogChoice.insertAdjacentHTML('afterbegin', createChoiceItem(content));
				});
				catalogChoice.addEventListener('click', (e) => {
					const clickedElement = e.target;
					if (clickedElement.classList.contains('choice-clear-btn') || clickedElement.closest('.choice-clear-btn')) {
						catalogChoice.innerHTML = '';
						allCheckedInputs.forEach(input => {
							input.checked = false;
							const count = input.closest('.filter__item').querySelector('.count');
							count.textContent = 0;
							count.style.visibility = 'hidden';
							count.classList.remove('icon-close');
							count.innerHTML = "";
						})
					}
					if (clickedElement.classList.contains('icon-close') || clickedElement.closest('.icon-close')) {
						const btnContent = clickedElement.closest('.choice-btn').querySelector('.choice-btn__name').textContent;
						allCheckedInputs.forEach(input => {
							if (input.closest('.custom-checkbox').querySelector('.checkbox-content').textContent === btnContent) {
								input.checked = false;
								let ctr = 0;
								const filter = input.closest('.filter__item');
								filter.querySelectorAll('.custom-checkbox__input').forEach(item => {
									if (item.checked) {
										ctr += 1;
									}
								});
								if (ctr !== 0) {
									filter.querySelector('.count').textContent = ctr;
								}

								const deletedButtonText = input.closest('.custom-checkbox').querySelector('.checkbox-content').textContent;
								let allChouceBlockItems = catalogChoice.querySelectorAll('.choice__item');
								if (allChouceBlockItems.length !== 0) {
									allChouceBlockItems.forEach(button => {
										if (button.querySelector('.choice-btn__name').textContent === deletedButtonText) {
											button.remove();
											allChouceBlockItems = catalogChoice.querySelectorAll('.choice__item');
											if (allChouceBlockItems.length === 1) {
												catalogChoice.querySelector('.clear-btn').remove();
											}
										}
									});
								}
							}
						})
					}

				})
			}
			//  !!-------------РАБОТАЕМ ВНУТРИ ВСЕГО КАТАЛОГА (ПО ВСЕМ ФИЛЬТРАМ)-END-----------

			//-----------Clear-btn-----------
			const caption = closestFilter.querySelector('.filter__item-caption .count');
			const clearBtn = closestFilter.querySelector('.count-clear-btn');
			caption.innerHTML = checkedInputCounter;
			if (caption.textContent !== "0") {
				let tagContent = caption.textContent;
				caption.style.visibility = 'visible';
				caption.addEventListener('mouseover', () => {
					if (checkedInputCounter === 0) {
						caption.style.visibility = 'hidden';
						clearBtn.style.visibility = 'hidden';
						clearBtn.style.opacity = 0;
						caption.classList.remove('icon-close');
						caption.innerHTML = "";
					} else {
						caption.style.visibility = 'visible';
						clearBtn.style.visibility = 'visible';
						clearBtn.style.opacity = 1;
						caption.classList.add('icon-close');
						caption.innerHTML = "";
						caption.addEventListener('click', () => {

							closestFilter.querySelectorAll('.custom-checkbox__input').forEach(input => {
								input.checked = false;

								const deletedButtonText = input.closest('.custom-checkbox').querySelector('.checkbox-content').textContent;
								let allChouceBlockItems = catalogChoice.querySelectorAll('.choice__item');
								if (allChouceBlockItems.length !== 0) {
									allChouceBlockItems.forEach(button => {
										if (button.querySelector('.choice-btn__name').textContent === deletedButtonText) {
											button.remove();
											allChouceBlockItems = catalogChoice.querySelectorAll('.choice__item');
											if (allChouceBlockItems.length === 1) {
												catalogChoice.querySelector('.clear-btn').remove();
											}
										}
									});
								}
							});
							tagContent = '0';
							caption.innerHTML = tagContent;
							caption.style.visibility = 'hidden';
							clearBtn.style.visibility = 'hidden';
							clearBtn.style.opacity = 0;
						});
					}

				});
				caption.addEventListener('mouseout', () => {
					caption.classList.remove('icon-close');
					caption.innerHTML = tagContent;
					if (tagContent !== '0') {
						caption.style.visibility = 'visible';
					}
					clearBtn.style.visibility = 'hidden';
					clearBtn.style.opacity = 0;
				})

			} else {
				caption.style.visibility = 'hidden';
			}
		});
		//-----------Clear-btn-End----------

		// ----чекбоксы-End------
	}


	// ------блок выбора цвета------
	// const colorSelect = document.querySelector('.color-select');

	if (colorSelect) {
		colorSelect.addEventListener("click", (el) => {
			const target = el.target;
			if (target.classList.contains('color-select__btn')) {
				colorSelect.querySelectorAll('.color-select__list-item').forEach(listItem => {
					listItem.classList.remove('color-select__btn--active');
				})
				target.closest('.color-select__list-item').classList.add('color-select__btn--active');
				const selectedText = colorSelect.querySelector('.card__select--selected');
				selectedText.textContent = target.textContent;
			}
		});
	}
	// -----блок выбора цвета---End

	// ------блок выбора размера------
	// const sizeSelect = document.querySelector('.size-select');
	if (sizeSelect) {
		sizeSelect.addEventListener("click", (el) => {
			const target = el.target;
			if (target.classList.contains('size-select__btn')) {
				sizeSelect.querySelectorAll('.size-select__btn').forEach(btn => {
					btn.classList.remove('size-select__btn--active');
				})
				target.classList.add('size-select__btn--active');
				const selectedText = sizeSelect.querySelector('.card__select--selected');
				selectedText.textContent = target.textContent;
			}
		});
	}
	// ------блок выбора размера-End-----

	// -----count-btn-block on card-page----
	const countBtnBlock = document.querySelector('.count-btn-block');
	if (countBtnBlock) {
		countBtnBlock.addEventListener("click", (el) => {
			const element = el.target;
			const elem = countBtnBlock.querySelector('.count-btn-block__count');
			let countElement = Number(elem.textContent);

			if (element.classList.contains('icon-minus') || element.closest('.icon-minus')) {
				if (countElement > 1) {
					countElement -= 1;
					elem.textContent = countElement;
				}
			}

			if (element.classList.contains('icon-plus') || element.closest('.icon-plus')) {
				countElement += 1;
				elem.textContent = countElement;
			}
		})
	}
	// -----count-btn-block on card-page-End---

	if (document.querySelector('.to-top')) {
		document.querySelector('.to-top').addEventListener('click', (e) => {
			e.preventDefault();
			const header = document.querySelector('.header');
			header.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}

}