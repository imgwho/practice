var http = require("http")

var server = http.createServer(function (req, res) {

    if (req.url !== "/favicon.ico") {

        res.writeHead(200, {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        })

        res.write("hello,i'm from server")

    }

    res.end()

})

server.listen(8888, "localhost", function () {

    console.log("listening...")

})