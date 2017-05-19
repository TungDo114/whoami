var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami',function(req, res){
	var ipAddress = req.ip;
	var language =  req.headers["accept-language"];
	var softWare = req.get('User-Agent');
	res.json({
		'ipaddress':ipAddress, 
		'language':language[0],
		'software' :softWare});
});


module.exports = router;
