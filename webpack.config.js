module.exports = {

	entry: './app/app.jsx', //where webpack needs to start processing our files
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
		extensions: ['','.js','.jsx']
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