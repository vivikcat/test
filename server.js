const express = require('express')
const compress = require('compression')
const port = process.env.PORT || 3000
const app = new (express)()


app.use(compress())

app.use('/', express.static('.'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(port, function(error){
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})