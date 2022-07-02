const HTTP = require("http")
const HOST = '0.0.0.0'
//const DATA = JSON.stringify(require("./data.json"))
const PORT = process.env.PORT || 8000

const REQUEST_LISTENER = function(request, response) {
    response.setHeader("Content-Type", "application/json")
    response.writeHead(200) // HTTP status code 'OK'
    response.end("Hello")
}


const SERVER = HTTP.createServer(REQUEST_LISTENER)
SERVER.listen(PORT, HOST, function() {
    console.log(`Server is running on http://${HOST}:${PORT}`)
})