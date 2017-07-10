var React = require('react');

// var WeatherMsg = React.createClass({

// 	render: function() {

// 		var {place, temp} = this.props;
		
// 		return (
// 			<p>{place} has a temperature of {temp} Degrees Celcius</p>
// 		);
// 	}
// });

var WeatherMsg = ({place, temp}) => {
				
		return (
			<h3 className="text-center">{place} has a temperature of {temp} Degrees Celcius</h3>
		);
}

module.exports = WeatherMsg;
