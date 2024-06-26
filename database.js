const http = require(`http`);
const XMLHttpRequest = require(`xhr2`);
const xml = new XMLHttpRequest();
const fs = require(`fs`)
const htmlTemplate = require(`../../module/module.HTMLtemplate`)

const server = http.createServer((req, res)=>{
  console.log(req.method)
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

        }else{ //?파일이 있다면 data
          // console.log(JSON.parse(data))
          // console.log(typeof(JSON.parse(data)))
          // console.log(Array.isArray(JSON.parse(data)))

            let origindata = JSON.parse(data)
            console.log(origindata)
            console.log(Array.isArray(origindata))

            let userinpt = JSON.parse(chunk)
            console.log(userinpt)
            console.log(typeof(userinpt))

            origindata.push(userinpt)
            console.log(origindata)

            fs.writeFile(`parseData.json`, JSON.stringify(origindata, null, 2), (err)=>{
              if(err){
                console.log(err)
              }else{
                console.log(`Process Tracking`)
              }
            })

        }
      })

      // res.writeHead(200,
      // {"content-Type": "application/json, charset=UTF-8"})
      // res.end()

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
