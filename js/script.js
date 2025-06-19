AOS.init({
	once: true,
	duration: 600
});
document.addEventListener("DOMContentLoaded", function() {
	let servicesSwiper = new Swiper(".services__slider", {
		loop: true,
		spaceBetween: 24,
		slidesPerView: 1,
		navigation: {
			nextEl: ".services__next",
			prevEl: ".services__prev",
		},
		pagination: {
			el: ".services__pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 3,
			},
			1280: {
				slidesPerView: 4,
			},
		},
	});
	let reviewsSwiper = new Swiper(".reviews__slider", {
		loop: true,
		spaceBetween: 24,
		slidesPerView: 1,
		navigation: {
			nextEl: ".reviews__next",
			prevEl: ".reviews__prev",
		},
		pagination: {
			el: ".reviews__pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1280: {
				slidesPerView: 3,
			},
		},
	});

	const langWrapper = document.querySelector('.header__lang');
	const langSelected = document.querySelector('.header__lang-selected');
	langSelected.addEventListener('click', (e) => {
		e.stopPropagation();
		langWrapper.classList.toggle('active');
	});
	document.addEventListener('click', (e) => {
		if (!langWrapper.contains(e.target)) {
			langWrapper.classList.remove('active');
		}
	});
	const menuOpenBtn = document.querySelector('.header__menu-open');
	const catalogBlock = document.querySelector('.header__bottom-catalog');
	menuOpenBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		catalogBlock.classList.toggle('active');
	});
	document.addEventListener('click', (e) => {
		if (!catalogBlock.contains(e.target) && !menuOpenBtn.contains(e.target)) {
			catalogBlock.classList.remove('active');
		}
	});


	const inputs = document.querySelectorAll('.form-input');
	inputs.forEach(input => {
		input.addEventListener('blur', () => {
			if (input.value.trim() !== '') {
				input.classList.add('not-empty');
			} else {
				input.classList.remove('not-empty');
			}
		});
		input.addEventListener('input', () => {
			if (input.value.trim() !== '') {
				input.classList.add('not-empty');
			} else {
				input.classList.remove('not-empty');
			}
		});
	});


	const popup = document.querySelector('.popup');
	const popupInner = document.querySelector('.popup__inner');
	const popupOpenButtons = document.querySelectorAll('.popup-open');
	const popupCloseButton = document.querySelector('.popup__close');
	popupOpenButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
			popup.classList.add('active');
		});
	});
	document.addEventListener('click', (e) => {
		if (
			popup.classList.contains('active') &&
			!popupInner.contains(e.target) &&
			!e.target.closest('.popup-open')
		) {
			popup.classList.remove('active');
		}
	});
	if (popupCloseButton) {
		popupCloseButton.addEventListener('click', () => {
			popup.classList.remove('active');
		});
	}
});

function checkScroll() {
	const header = document.querySelector('.header');
	let scrollThreshold;
	if (window.innerWidth < 768) {
		scrollThreshold = 60;
	} else if (window.innerWidth < 1000) {
		scrollThreshold = 140;
	} else {
		scrollThreshold = 129;
	}
	if (window.scrollY > scrollThreshold) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
}
checkScroll();
window.addEventListener('resize', checkScroll);
window.addEventListener('scroll', checkScroll);

resizeHeight()
function resizeHeight() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', () => {
	resizeHeight()
});

const headerAdress = document.querySelector('.header__adress');
const headerBlock = document.querySelector('.header__block');
const headerBoxes = document.querySelectorAll('.header__box');
const headerBottom = document.querySelector('.header__bottom');
const headerLang = document.querySelector('.header__lang');
const headerEnd = document.querySelector('.header__end');
function moveHeaderElements() {
	if (window.innerWidth < 768) {
		if (!headerBlock.contains(headerAdress)) {
			headerBlock.prepend(headerAdress);
		}
		if (!headerBottom.contains(headerBlock)) {
			headerBottom.append(headerBlock);
		}
		if (!headerBottom.contains(headerLang)) {
			headerBottom.append(headerLang);
		}
	} else {
		if (!headerBoxes[0].contains(headerAdress)) {
			headerBoxes[0].append(headerAdress);
		}
		if (!headerBoxes[1].contains(headerBlock)) {
			headerBoxes[1].prepend(headerBlock);
		}
		if (!headerEnd.contains(headerLang)) {
			headerEnd.append(headerLang);
		}
	}
}
moveHeaderElements();
window.addEventListener('resize', moveHeaderElements);
const headerBurger = document.querySelector('.header__burger');
const headerCloseBtn = document.querySelector('.header__bottom-close');
const headerBgClose = document.querySelector('.header__bg-close');
if (headerBurger && headerBottom) {
	headerBurger.addEventListener('click', () => {
		headerBottom.classList.toggle('active');
		headerBgClose.classList.toggle('active');
	});
}
if (headerCloseBtn && headerBottom) {
	headerCloseBtn.addEventListener('click', () => {
		headerBottom.classList.remove('active');
		headerBgClose.classList.remove('active');
	});
}
if (headerBgClose && headerBottom) {
	headerBgClose.addEventListener('click', () => {
		headerBottom.classList.remove('active');
		headerBgClose.classList.remove('active');
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll('.complex__block .product__item, .products__item, .imageBlock__item');
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.1
	});
	items.forEach(item => observer.observe(item));
});


const aboutNumber = document.querySelector('.about__number');
if (aboutNumber) {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					aboutNumber.classList.add('animated');
				}, 1000);
				observer.unobserve(aboutNumber);
			}
		});
	}, {
		threshold: 0.5
	});
	observer.observe(aboutNumber);
}


const ratingBlocks = document.querySelectorAll('.reviews__slide-rating');
ratingBlocks.forEach(block => {
	const rating = parseInt(block.getAttribute('data-rating')) || 0;
	block.innerHTML = '';
	for (let i = 1; i <= 5; i++) {
		const star = document.createElement('span');
		if (i <= rating) {
			star.classList.add('active');
		}
		block.appendChild(star);
	}
});

const pricesButtons = document.querySelectorAll('.prices__select-btn');
const pricesBlocks = document.querySelectorAll('.prices__block');

pricesButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		const selected = btn.getAttribute('data-prices-select');
		pricesButtons.forEach(b => b.classList.remove('active'));
		btn.classList.add('active');
		pricesBlocks.forEach(block => {
			const result = block.getAttribute('data-prices-result');
			if (result === selected) {
				block.classList.add('active');
			} else {
				block.classList.remove('active');
			}
		});
	});
});

const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
	const title = item.querySelector('.faq__item-title');
	title.addEventListener('click', () => {
		if (item.classList.contains('active')) {
			item.classList.remove('active');
		} else {
			faqItems.forEach(i => i.classList.remove('active'));
			item.classList.add('active');
		}
	});
});