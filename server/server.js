const express = require("express");
const pdfParse = require("pdf-parse");
const fileUpload = require("express-fileupload");

const app = express();

const path = require('path')

const port = process.env.PORT || 3000;



app.get("/api",(req,res) =>{
    res.json({"users":['1','2','3']})
})

app.use(express.static(path.join(__dirname + "/public")))

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

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
