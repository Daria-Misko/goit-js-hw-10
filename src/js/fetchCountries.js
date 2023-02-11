export default function fetchCountries(country) {
	return fetch(
		`https://restcountries.com/v3.1/name/${country}?field=name,population,flag,languages`
	).then(response => {
		if (!response.ok) {
			throw new Error(response.status)
		} 
		return response.json();
	 })
}