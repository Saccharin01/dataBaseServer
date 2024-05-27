const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const server = http.createServer((req, res)=>{
  let container = {};
  if(req.method === 'POST' && `/`){
    console.log(req.url)
    let body = ""
    req.on('data', (chunk)=>{
      body += chunk.toString();
    });
    req.on('end', ()=>{
      fs.writeFile(`storage/UserId.json`, body, (err)=>{
        if(err){
          console.log(err)
        }
      })
      console.log(body)
    })
    // console.log(body)
  }
})
let PORT = 8088
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)