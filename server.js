var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//the below middleware is required to divert traffic from https to http
app.use(function(req, res, next){
	if (req.headers['x-forwarded-proto']==='http') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		
		next();
	}
});

app.listen(PORT,function(){
	console.log('server running on '+ PORT);
})