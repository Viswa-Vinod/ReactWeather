var React = require('react');

// var About = React.createClass({

// 	render: function() {
// 		return (
// 			<h3>About Component </h3>
// 		);
// 	}
// });

//simplified stateless functional component
// var About = function(props){
// 	render: function() {
// 		return (
// 			<h3>About Component </h3>
// 		);
// 	}
// }
//simplify further withn arrow functions
var About = () => {
	return (
			<div>
				<h1 className = "text-center">About</h1>
				<p>This is a weather application built on react. 
				</p>
				<p>
					here are some of the tools I used:
				</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This was the js framework used. 
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> - Openweather map  was used to get the temperature for any city
					</li>	

				</ul>
			</div>
		);
}

module.exports = About; 