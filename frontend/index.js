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

	// Task 1 Hide Container by default
	const container = document.querySelector('#weatherWidget');

	container.style.display = 'none';

	// Task 2 Add an event listener to the dropdown
	const option = document.querySelector('#citySelect');

	option.addEventListener('change', () => {
    container.style.display = 'none';
    toggleOption()
    toggleInfoOn()
		const optionSelected = option.options[option.selectedIndex];
		const value = optionSelected.textContent;
    toggleContainer();
    toggleInfoOff()
    toggleOption()
		console.log(value);
	});

	// TASK 3 - Prepare to fetch the weather data

  // disable dropdown 
  function toggleOption () {
    option.toggleAttribute('disabled')
  }

  // toggle display
  function toggleContainer() {
    container.style.display.toggleAttribute('none')
  }

  // toggle fetching wheather data... message
  const info = document.querySelector('.info')

  function toggleInfoOn() {
    info.textContent = 'Fetching weather data...'
    
  }

  function toggleInfoOff() {
    info.textContent = '';
  }

	// 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
