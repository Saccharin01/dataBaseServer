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
      // console.log(chunk)
      body += chunk.toString();
      console.log(body)
      console.log(container)
      // todo submit data가 많아질 경우에 대한 json 폼팩터가 필요하진 않은지?
    });
    req.on('end', ()=>{

      // todo 단위테스트 변경 객체 속에 객체 집어넣어서 json으로 밀어내기

      // fs.writeFile(`storage/UserId.json`, body, (err)=>{
      //   if(err){
      //     console.log(err)
      //   }
      // })
      // console.log(body)
    })
    // console.log(body)
  }
})
let PORT = 8088
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)