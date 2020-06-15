var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	ESRI = require("./models/esri.js")

//MONGO CONFIGRATION
 var uri = process.env.DATABASEURI || "mongodb+srv://sudhanshumohan:hesoyam@cluster0-3z3hj.mongodb.net/hospital_data?retryWrites=true&w=majority"

mongoose.connect(uri,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true
}).then(()=>{
	console.log("Connected to Database");
}).catch(err =>{
	console.log("ERROR:",err.message);
});

//==========================
//SOME OTHER PACKAGES CONFIG
//==========================

app.set("view engine","ejs");
//setting view engine to ejs
app.use(express.static(__dirname + '/public'));
//serving custom resources
app.use(bodyParser.urlencoded({extended:true}));
//using bodyparser so recieve req object

//Serving HomePage
app.get('/',function(req,res){
	res.render("index");
})

app.post("/",function(req,res){
	var X = req.body.X;
	var Y = req.body.Y;

	res.send(req.body);
	});

//LISTENER PROCESS
var port = process.env.PORT || 31000
app.listen(port,process.env.IP,function(){
	console.log("Server started at port:"+port);
})
