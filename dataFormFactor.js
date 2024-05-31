const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const server = http.createServer((req, res)=>{
  let container = {}; // todo 지워야 함
  if(req.method === 'POST' && `/`){
    console.log(req.url)

    let body = ""
    let condition;
    console.log(condition)
    req.on('data', (chunk)=>{
      let container = []
      body += chunk.toString();
      let parseData = JSON.parse(body)

      // console.log(container)
      // console.log(typeof(body))
      // console.log(typeof(parseData))
      // console.log(Object.values(parseData))
      // console.log(Object.entries(parseData))
      // console.log(container)

      let inputId = Object.values(parseData)[0]
      console.log(inputId)
      console.log(typeof(inputId))


      console.log(condition)
      container.push(parseData)
      console.log(container)
      

 


      fs.writeFile(`parseData.json`, JSON.stringify(container, null, 2), (err)=>{
        if(err){
          console.log(err)
        }
      })



    });

    req.on('end', ()=>{
      console.log(condition)

      console.log(body)
    })
  }
})
let PORT = 8088
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)
