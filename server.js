  
const express = require("express");
const app = express();
const Articles = require('./models/article')
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const methodOverride = require("method-override")


mongoose.connect("mongodb://localhost/blogdb",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});



app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))  //so that we can access the fields of form
app.use(methodOverride('_method'))

//from inside the 'article' route
app.get("/",async (req,res)=>{
    var articles = await Articles.find().sort({createdAt: "desc"})
    res.render("articles/index",{articles:articles});
});

app.use('/articles',articleRouter)

app.listen(5000)