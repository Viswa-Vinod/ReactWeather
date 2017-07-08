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
				<h3>About</h3>
				<p>Details About this app</p>
			</div>
		);
}

module.exports = About; 