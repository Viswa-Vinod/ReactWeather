
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
//the style and css loader are both required to get this to work.
// The css loader loads in the styles file.
// The style loader ensures these styles are actually used when 
//viewing the application in the browser.
//It's a shortcut for when you want to require/import a file but don't 
//need to create a new variable to store any of the files exports.
//The "name!" syntax is used to tell webpack which loaders to use. 
//The exclamation mark is just the convention they (makers of webpack) picked.
//These two loaders will process the css file and add the styles to the project. 
//The css! loader will run first and then style! will execute.
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

ReactDOM.render(
			<Router history={hashHistory}> 
				<Route path = "/" component={Main}>
					<Route path = "about" component = {About}/>
					<Route path = "examples" component={Examples}/>
					<IndexRoute component={Weather}/>
				</Route>
			</Router>,
			document.getElementById('app')
);