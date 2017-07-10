var React = require('react');

var WeatherForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();
		var place = this.refs.place.value;

		if (place.length >0) {
			this.refs.place.value='';
			this.props.onPlaceEntry(place);
		}
	},
	render: function() {

		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="place" placeholder="Enter City"/>
					<button className="button expanded hollow">Get Weather</button>

				</form>
			</div>
		);
	}
});

module.exports = WeatherForm;