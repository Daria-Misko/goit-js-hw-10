import '../css/styles.css';
import fetchCountries from './fetchCountries';
import renderCounries from './renderCounries';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box')
const countryList = document.querySelector('.country-list')
const countyInfo = document.querySelector('.country-info')

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY))

function searchCountries(e) {
	let countryName = e.target.value.trim();

	if (countryName) {
		fetchCountries(countryName)
	.then(dataCountries => {
		renderCounries(dataCountries)
	})
	.catch(error => {
		Notify.failure(`Oops, there is no country with that name`)
	})	
	} else {
		countyInfo.innerHTML = '';
		countryList.innerHTML = '';
	}
}

