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
					breakDown(location, current, forecast);
					toggleContainer();
					toggleInfoOff();
					toggleOption();
				})
				.catch((err) => {
					console.log(err);
				});
  }

  function breakDown(locationObj, currentObj, forecastObj) {

	// destructure locationObj
	let {
		city, 
		country
	} = locationObj;

	// destructure currentObj
	
	let {
		apparent_temperature,
		humidity,
		precipitation_probability,
		temperature_max,
		temperature_min,
		weather_description,
		wind_speed,
	} = currentObj;

	// destructure forecastObj
	let {
		daily
	} = forecastObj;

	// grab todays div 
	const today = document.querySelector('#today')
	

	// todays Div 
	const todaysDivs = today.querySelector('#apparentTemp');

	const todaysTemp = todaysDivs.lastElementChild

	// set todays temp 
	todaysTemp.textContent = apparent_temperature + '°';
	
	// grab todays element
	const todaysPic = document.querySelector('#todayDescription');

	// find todays pic 
	const emoji = findEmoji(weather_description)

	// set todays pic
	todaysPic.textContent = emoji

	// create function for todays stats id
	// low, high, percipitaion,
	const percip = precipitation_probability * 100
	const max = temperature_max
	const min = temperature_min


	const todaysStats = document.querySelector('#todayStats')
	todaysStats.firstElementChild.textContent = `${min}°/${max}°`;
	todaysStats.children[1].textContent = `Precipitation: ${percip}%`

		// humidity, wind
		todaysStats.children[2].textContent = `Humidity: ${humidity}%`;
		todaysStats.lastElementChild.textContent = `Wind: ${wind_speed}m/s`;
	wind_speed

	// grab forecast div
	const forecast = document.querySelector('#forecast')
	
	const day1 = forecast.firstElementChild
	const day2 = forecast.children[1]
	const day3 = forecast.lastElementChild


	dailyTemps(daily[0], day1);
	dailyTemps(daily[1], day2);
	dailyTemps(daily[2], day3);

	// change location info on bottom of screen 
	
	const locationDiv = document.querySelector('#location')
	locationDiv.firstElementChild.textContent = city
	locationDiv.lastElementChild.textContent = country
	
		// create function to deal with the forecast
		// deal with dates and figure out the day of the week
		// set pics for each day, low, high and percipitation

  }

  // function to find wheather emoji
  function findEmoji(string) {
	for (let description of descriptions) {
		if (string === description[0]) {
			return description[1]
		}
	}
  }

  function dailyTemps (obj, parentDiv) {

		let {
			date,
			humidity,
			precipitation_probability,
			temperature_max,
			temperature_min,
			weather_description,
			wind_speed,
   } = obj;

		let pic = findEmoji(weather_description)
		let min = temperature_min
		let max = temperature_max
		let currentDate = date
		let percip = precipitation_probability * 100


		// grab pic div 
		parentDiv.children[1].textContent = pic
		parentDiv.children[2].textContent = `${min}°/${max}°`
		parentDiv.lastElementChild.textContent = `Precipitation: ${percip}%`;

		// function to find day of the week
		currentDate = findDate(date)
		parentDiv.firstElementChild.textContent = currentDate

	}

	function findDate(string) {
		let date = new Date(string)
		let dateArray = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		];

		let dayOfWeek = dateArray[date.getDay()]

		return dayOfWeek
	}

	





	// 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
