const express = require("express");
const pdfParse = require("pdf-parse");
const fileUpload = require("express-fileupload");
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/api",(req,res) =>{
    res.json({"users":['1','2','3']})
})


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/file", express.static("public"));
app.use(fileUpload());

app.post("/extract-text", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
        res.status(400);
        res.end();
    }
    pdfParse(req.files.pdfFile).then(result => {
        res.send(result.text);
    });
});

app.get('/python', function(req, res) {
    const spawn = require('child_process').spawn;
    const process = spawn('python', ['./python/sum.py', req.query.num1, req.query.num2]);
    process.stdout.on('data', (data) => {
        res.send(JSON.stringify({sum: data.toString()}));
    });
})

app.listen(5000,() => {console.log("Server port : 5000")})
