var http = require('http'),
    urrl = require('url'),
    path = require('path'),
	mime = require('mime'),
	fs = require('fs');

 http.createServer(function(req,res){
	
	var pathname = __dirname + req.url;
	
	console.log(pathname);
	
	fs.stat(pathname,function(err,stats){
		if(err){
			res.writeHead(404);
			res.write('Bad request 404\n');
			res.end();
		}else if(stats.isFile()){
			var Type = mime.lookup(pathname);
			console.log(Type, pathname);
			res.setHeader('Content-Type', Type);
			
			
			//200 status -found, no errors
			res.statusCode = 200;
			
			//create and pipe readable stream
			var file = fs.createReadStream(pathname);
			file.on('open',function(){
				file.pipe(res);
			});
			
			file.on('error',function(err){
				console.log(err);	
			});
			
		}else{
			res.writeHead(403);
			res.write('Directory access is forbidden');
			res.end();
		}
		
		
		
	});
	
	
	 
 }).listen(8125);
 
 console.log('Server started on 8125');
 
 /**
  * Retrieve League game info
  */
