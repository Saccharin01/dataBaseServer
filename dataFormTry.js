const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const server = http.createServer((req, res)=>{
  console.log(req.url)
  if(req.url === `/`){
    req.on(`data`,(chunk)=>{
      let container = [];
      
      fs.readFile(`parseData.json`,(err,data)=>{
        if(err){ //? 파일이 없다면
          container.push(JSON.parse(chunk))
          console.log(container)
          let userId = JSON.stringify(container, null, 2) 
          fs.writeFile(`parseData.json`, userId, (err)=>{
            if(err){
              console.log(`WF Caution : ${err}`);
            }
            else{
              console.log(`Process Tracking`)
            }
          })


        }
      })

      // console.log(chunk)
      // let container = [];
      // let parseData = JSON.parse(chunk);
      // console.log(parseData)
      // container.push(JSON.parse(chunk));
      // console.log(container)

    });
    // fs.readFile(`parseData.json`,(err,data)=>{
    //   if(err){

    //     console.log(`caution : ${err}`)

    //     req.on(`data`, (chunk)=>{

    //       let container = [];
    //       console.log(chunk)

    //     })
    //   }else{
    //     console.log(`passed : ${data}`)
    //   }
    // })
  };

})

let PORT = 8088
server.listen(`${PORT}`)
console.log(`server running on: http://localhost:${PORT}/`)
