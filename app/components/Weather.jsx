var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	
	getInitialState: function() {
		return {isLoading: false}
	},
	handleSearch: function(place){
		var that=this;
		
		this.setState({
			isLoading: true,
			errorMsg: undefined, //required for modal
			place: undefined, //to prevent old data from lingering 
			temp: undefined //to prevent old data from lingering
		});


		openWeatherMap.getTemp(place).then(function(temp){
			that.setState({
				place:place,
				temp:temp,
				isLoading: false,

			});
		}, function(e){
			console.log('received message from owp: ', e.message);
			that.setState({
				isLoading:false,
				errorMsg: e.message //set error msg of modal when error occurs
			});			
		})
		
	},
	componentDidMount: function() {
		var place = this.props.location.query.location; //we are using location as the key name in the url
		if (place && place.length>0) {
			this.handleSearch(place);
			window.location.hash='#/';//resets the url to home page by removing
			// the location query param once it has been extracted 
			//in the previous steps; this is simply programmatic navigation
		}
	},
	componentWillReceiveProps: function(newProps){
		var place = newProps.location.query.location; //we are using location as the key name in the url
		if (place && place.length>0) {
			this.handleSearch(place);
			window.location.hash='#/';//resets the url to home page by removing
			// the location query param once it has been extracted 
			//in the previous steps
		}
	},
	render: function() {
		var {isLoading, place, temp, errorMsg} = this.state;
		
		function renderMessage() {
			if (isLoading) {
				return <p className="text-center">fetching weather...</p>;
			} else if (typeof temp !== 'undefined' && typeof place !== 'undefined') {
				return <WeatherMsg place={place} temp={temp}/>
			}
		}

		//conditionally display modal
		function renderError(){
			
			if(typeof errorMsg === 'string'){
				console.log('setting ErroModal message: ', errorMsg)
				return(
					<ErrorModal msg={errorMsg}/>
				);
			}
		}

		return (

			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onPlaceEntry={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;