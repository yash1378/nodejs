const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url==='/'){
        // res.write('')
        res.end(`Welcome to Our Homepage`)
    }
    if(req.url==='/about'){
        // res.write('')
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(`<h1>Oops</h1>
        <p> We cannot  seem to find this page  you are looking for</p>
        <a href="/">back to home</a>
        `);  
        res.end();
    }
    // res.end(`<h1>Oops</h1>
    // <p> We cannot  seem to find this page  you are looking for</p>
    // <a href="/">back to home</a>
    // `)

})

server.listen(350);