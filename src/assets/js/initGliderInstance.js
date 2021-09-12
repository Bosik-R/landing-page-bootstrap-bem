import Glider from './gliderClass';

export const initGliderInstance = () => {
	window.addEventListener('load', function () {
		new Glider(document.querySelector('.glider'), {
			slidesToShow: 'auto',
			slidesToScroll: 1,
			draggable: true,
			itemWidth: 425,
			exactWidth: true,
			arrows: {
				prev: '.glider-prev',
				next: '.glider-next',
			},
			responsive: [
				{
					breakpoint: 1440,
					settings: {
						slidesToShow: 'auto',
						slidesToScroll: 1,
						exactWidth: true,
					},
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						exactWidth: false,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						exactWidth: false,
					},
				},
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						exactWidth: false,
					},
				},
			],
		});
	});
};
