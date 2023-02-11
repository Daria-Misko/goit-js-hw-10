import '../css/styles.css';
import fetchCountries from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box')
const countryList = document.querySelector('.country-list')
const countyInfo = document.querySelector('.country-info')

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY))

function searchCountries(e) {
	let countryName = e.target.value;
	fetchCountries(countryName)
	.then(dataCountries => {
		console.log(dataCountries)
	})
	.catch(error => {
		Notify.failure(`Oops, there is no country with that name`)
	})
}

