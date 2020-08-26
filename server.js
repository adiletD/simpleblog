const express = require("express");
const app = express();
const Articles = require('./models/article')
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");

mongoose.connect("mongodb://localhost/blogdb",{ useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))  //so that we can access the fields of form
                                             //from inside the 'article' route
app.get("/",async (req,res)=>{
    var articles = await Articles.find().sort({createdAt: "desc"})
    res.render("articles/index",{articles:articles});
});

app.use('/articles',articleRouter)

app.listen(5000)