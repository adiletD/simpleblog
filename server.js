const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");
app.set('view engine','ejs')

app.use('/articles',articleRouter)

app.get("/",(req,res)=>{
    var articles = [{
        title: "Title 1",
        createdAt: new Date(),
        description: "Description 1"
    },
    {
        title: "Title 2",
        createdAt: new Date(),
        description: "Description 2"
    },
    {
        title: "Title 3",
        createdAt: new Date(),
        description: "Description 3"
    }
    ]

    res.render("articles/index",{articles:articles});
});

app.listen(5000)