const http = require('http');

const server = http.createServer((req, res) =>
{
    if(req.url === '/'){
        res.end('Yo yo wassup')
    }
    if(req.url === '/about'){
        
        res.end('Here is the about page')
    }
    res.end(`
    <h1>404 Page Not Found</h1>
    <p>the page your looking for is not here</p>
    <a href="/">Home</a> `)
})

server.listen(5000)