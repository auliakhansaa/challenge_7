const express = require("express");
const PORT = 8080;
const app = express();
const {Binar} = require("./models");


//Kita perlu line ini sebelum use router
// kita perlu line ini juga untuk hande request dari form

app.use(
express.urlencoded({
    extended:false,
})
);

// kita pakai line ini untuk memasang view engine EJS
app.set("view engine","ejs");

//nah ini portnya
app.listen(PORT,()=>{
    console.log('Listening on http://localhost:${PORT}');
})


//untuk tampilan create
app.get("/binar/create",(req,res) =>{
    res.render("binars/create");
})

// nah setelah tampil, disinal handle form
app.post("/binar",(req,res)=>{
 Binar.create({
     tittle: req.body.titlt,
     body : req.body.body
 })
 .then(binar =>{
     res.send('Binar berhasil dibuat');
 });
});


// ini untuk menampilkan data view
app.get("/binars", (req,res)=>{
    Binar.findAll()
    .then((binars)=>{
        res.render('binars/view',{
            binars
        })
    })
})