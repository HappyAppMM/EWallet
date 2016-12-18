var MenuConfig = require('./models/menuconfig');

module.exports = function(app) {
	app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
	
	app.post('/api/menuconfig', function(req, res){
		var menuconfig = new MenuConfig();
		menuconfig._id = req.body.id;
		menuconfig.value = req.body.value;
		menuconfig.action = req.body.action;
		menuconfig.parentid = req.body.parentid;
		menuconfig.orderid = req.body.orderid;
		menuconfig.enabled = req.body.enabled;
		menuconfig.appversion = req.body.appversion;
		
		menuconfig.save(function(err){
			if(err)
				res.send(err);
			res.json({message: 'success'});
		});
	});
	app.get('/api/menuconfig', function(req, res){
		MenuConfig.find(function(err, menu){
			if(err)
				res.send(err);
			res.json(menu);
		});
	});
	app.get('/api/menuconfig/:menuid', function(req, res){
		MenuConfig.findById(req.params.menuid, function(err, menu){
			if(err)
				res.send(err);
			res.json(menu);
		});
	});
	app.put('/api/menuconfig/:menuid', function(req, res){
		MenuConfig.findById(req.params.menuid, function(err, menu){
			if(err)
				res.send(err);
			menu._id = req.body.id;
			menu.value = req.body.value;
			menu.action = req.body.action;
			menu.parentid = req.body.parentid;
			menu.orderid = req.body.orderid;
			menu.enabled = req.body.enabled;
			menu.appversion = req.body.appversion;
			
			menu.save(function(err){
				if(err)
					res.send(err);
				res.json({message: 'success'});
			});
		});
	});
}