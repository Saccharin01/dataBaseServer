const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const server = http.createServer((req, res)=>{
  if(req.method === 'POST'){
    console.log(req.url)
  }
})
let PORT = 8088
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)