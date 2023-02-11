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
			<li>
				<img src="${country.flags.svg}" alt="flag" width=40/>
				<span>${country.name.official}</span>
			</li>
			`)
		})
		countryList.innerHTML = countryItems;
		countyInfo.innerHTML = '';

		// countryList.insertAdjacentElement
	} else {
		countyInfo.innerHTML = `<img src="${currentCountry.flags.svg}" alt="flag" width=40/>
			<span>${currentCountry.name.official}</span>
			<div>
			<p>Capital: ${currentCountry.capital}</p>
			<p>Population: ${currentCountry.population}</p>
			<p>Languages: ${Object.values(currentCountry.languages).join(', ')}</p>
			</div>
		`;

		countryList.innerHTML = '';
	}
}