var webpack = require('webpack');
module.exports = {

	entry: [//order of scripts loading is important. 
			//jquery has to precede foundation. jQuery and Foundation 
	//need to be global scripts because they were not designed to work together 
	//with Webpack.
			//"style!", "css!", and "script!" allow us to use loaders for our files. 
			//This lets us require things we normally wouldn't be able to
			'script!jquery/dist/jquery.min.js',
			'script!foundation-sites/dist/foundation.min.js',
			'./app/app.jsx'
			], //where webpack needs to start processing our files
	externals: {
		jquery:'jQuery'
	},//set the global variable jQuery equal to the result of require('jquery')
	//Externals is needed because the Foundation script expects a jQuery
	//  variable to be globally available. This is the webpack way of 
	//creating a global that can be used in your scripts. 
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})

	],
	output: {
		path: __dirname, //folder where to generate the output
		filename: './public/bundle.js' //file path in folder where the output is to be generated

	},
	resolve:{
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Weather: 'app/components/Weather.jsx',
			WeatherForm: 'app/components/WeatherForm.jsx',
			WeatherMsg: 'app/components/WeatherMsg.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			openWeatherMap: 'app/api/openWeatherMaps.jsx'
		},
		extensions: ['','.js','.jsx'] // you can now require('file') instead of require('file.js')
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}