import { Notify } from "notiflix";

export default function renderCounries(dataCountries) {
	const countryList = document.querySelector('.country-list')
	const countyInfo = document.querySelector('.country-info')

	// змінна для кількості країн
	let quantityCountries = dataCountries.length
	// змінна для масиву країн
	let countryItems = []
	let currentCountry = dataCountries[0];

	if (quantityCountries > 10) {
		Notify.info(`Too many matches found. Please enter a more specific name.`)
	} else if (quantityCountries >= 2 && quantityCountries <= 10) {
		dataCountries.map(country => {
			countryItems.push(`
			<li class="country_item">
				<img src="${country.flags.svg}" alt="flag" class="flag"/>
				<span class="country_name">${country.name.official}</span>
			</li>
			`)
		})
		countryList.innerHTML = countryItems.join('');
		countyInfo.innerHTML = '';

	} else {
		countyInfo.innerHTML = `
		<div class="wrapper"><img src="${currentCountry.flags.svg}" alt="flag" width=40/>
			<span class="country_name_single">${currentCountry.name.official}</span>
			</div>
			<div class="country_card">
			<p><span class="country_card_sub">Capital:</span> ${currentCountry.capital}</p>
			<p><span class="country_card_sub">Population:</span> ${currentCountry.population}</p>
			<p><span class="country_card_sub">Languages:</span> ${Object.values(currentCountry.languages).join(', ')}</p>
			</div>
		`;

		countryList.innerHTML = '';
	}
}