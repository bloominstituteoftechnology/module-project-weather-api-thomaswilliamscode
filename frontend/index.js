async function moduleProject4() {
	// 👇 WORK WORK BELOW THIS LINE 👇
	const footer = document.querySelector('footer');
	const currentYear = new Date().getFullYear();
	footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

	let descriptions = [
		['Sunny', '☀️'],
		['Cloudy', '☁️'],
		['Rainy', '🌧️'],
		['Thunderstorm', '⛈️'],
		['Snowy', '❄️'],
		['Partly Cloudy', '⛅️'],
	];

	// 👉 Tasks 1 - 5 go here

	// putting urls here
	const baseURL = 'http://localhost:3003/api/weather?city=';
	const sanFrancisco = `${baseURL}San+Francisco`;
	const newYork = `${baseURL}New+York`;
	const detroit = `${baseURL}Detroit`;
	const honolulu = `${baseURL}Honolulu`;

	// Task 1 Hide Container by default
	const container = document.querySelector('#weatherWidget');

	container.style.display = 'none';

	// Task 2 Add an event listener to the dropdown
	const option = document.querySelector('#citySelect');

	option.addEventListener('change', () => {
		container.style.display = 'none';
		toggleOption();
		toggleInfoOn();
		const optionSelected = option.options[option.selectedIndex];
		const value = optionSelected.textContent;
    if (value === 'New York') {
      getInfo(newYork)
    } else if (value === 'Detroit') {
      getInfo(detroit);
    } else if (value === 'Honolulu') {
      getInfo(honolulu)
    } else {
      getInfo(sanFrancisco)
    }
	});

	// TASK 3 - Prepare to fetch the weather data

	// disable dropdown
	function toggleOption() {
		option.toggleAttribute('disabled');
	}

	// toggle display
	function toggleContainer() {
		container.style.display = 'block';
	}

	// toggle fetching wheather data... message
	const info = document.querySelector('.info');

	function toggleInfoOn() {
		info.textContent = 'Fetching weather data...';
	}

	function toggleInfoOff() {
		info.textContent = '';
	}

	// TASK 4 - Launch a request to the weather API
  function getInfo (city) {
      axios.get(city)
				.then((res) => {
					let { location, current, forecast } = res.data;
					console.log(location);
          toggleContainer();
					toggleInfoOff();
					toggleOption();
				})
				.catch((err) => {
					console.log(err);
				});
  }


	// 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
