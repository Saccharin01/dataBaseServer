const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const server = http.createServer((req, res)=>{
  console.log(req.url)
  if(req.url === `/`){
    fs.readFile(`parseData.json`,(err,data)=>{
      try {
        console.log(`passed : ${data}`)
        
      } catch (error) {
        console.log(`caution : ${err}`)
      }
    })
  };

})

let PORT = 8088
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)
