var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	
	getInitialState: function() {
		return {isLoading: false}
	},
	handleSearch: function(place){
		var that=this;
		
		this.setState({isLoading: true});


		openWeatherMap.getTemp(place).then(function(temp){
			that.setState({
				place:place,
				temp:temp,
				isLoading: false
			});
		}, function(errMsg){
			that.setState({
				isLoading:false
			});
			alert(errMsg);
			
		})
		
	},
	render: function() {
		var {isLoading, place, temp} = this.state;
		
		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">fetching weather...</h3>;
			} else if (typeof temp !== 'undefined' && typeof location !== 'undefined') {
				return <WeatherMsg place={place} temp={temp}/>
			}
		}

		return (

			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onPlaceEntry={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;