var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b4fb4986dade94eebc418906c4075159&units=metric';

//b4fb4986dade94eebc418906c4075159
module.exports = {
	getTemp: function(place){
		var encodedLocation = encodeURIComponent(place);
		//this is necessary because the place may have a space in it 
		//(or some other character) and the resulting url should have some 
		//special characters inserted in place of those special characters. 

		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			
			if (res.data.cod && res.data.message){
				console.log('made connection: ',res.data.message);
				console.log('made connection: ', res.data.cod);
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(err){
			console.log('connection itself could not be made')
			throw new Error('Unable to fetch weather for that location');
		})
	}
}