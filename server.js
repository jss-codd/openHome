const express = require("express");




process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

var app = express();




// app.use(require("./app/middleware/authInterceptor").authorizeApi);
app.get('/',(req,res)=>{
    res.send("Weclome to AWS EC2")
});
app.listen(parseInt(process.env.PORT, 10) || 8080, () => {
	console.log("App running");
});