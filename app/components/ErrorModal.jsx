var React = require('react');
var ReactDOM = require('react-dom'); 
var ReactDOMServer = require('react-dom/server'); 

var ErrorModal = React.createClass({

	getDefaultProps: function() {
		return {
			title: 'Error'
		}
	},
	propTypes: {
		title: React.PropTypes.string,
		msg:React.PropTypes.string.isRequired
	},
	componentDidMount: function(){
		//all of this had to be placed in this function because of 
		//the conflict over the DOM between foundation and react.
		var {title,msg} = this.props;
		var modalMarkup =  (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{msg}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup)); //takes jsx code and returns the string version
		$(ReactDOM.findDOMNode(this)).html($modal);
		
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function() {
		

		return (
			<div>
			</div>
		);
		
	}
});

module.exports = ErrorModal;