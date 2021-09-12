export const amountBtnEvent = () => {
	const btnClassSelected = 'amount-btn--state--selected';
	const buttons = document.querySelectorAll('.amount-btn');

	for (let button of buttons) {
		button.classList.remove(btnClassSelected);

		button.addEventListener('click', () => {
			for (let btn of buttons) {
				if (btn !== button) {
					btn.classList.remove(btnClassSelected);
				}
			}
			if (button.getAttribute('class').includes(btnClassSelected)) {
				button.classList.remove(btnClassSelected);
			} else {
				button.classList.add(btnClassSelected);
			}
		});
	}
};
