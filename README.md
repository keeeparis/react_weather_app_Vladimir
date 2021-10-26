# react_weather_app_Vladimir

To run application, <b>clone git</b> and <b>npm run dev</b>.

API Key is stored on backend. Add your own in <b>${apiKey}</b> in post requests to work.

List of API used: 
1. WeatherApi. https://weatherapi.com
2. OpenCageData. https://opencagedata.com
3. AutoComplete Maps Api. https://developer.here.com/

How it works.
You start filling in the city name when autocomplete results begin showing up to you.
Then, you select one and press search button. Firstly, the coordinates for selected city are found
and, secondly, we found weather for specific latitude and longtude. Result is present in each card.

Multiple cards available on the same time on the screen, so you can compare weather for 2, 3 or even more locations.
