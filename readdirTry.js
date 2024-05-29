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
    req.on('data', (chunk)=>{
      // console.log(chunk)
      body += chunk.toString();
      let jsondata = JSON.stringify(body, null, 2)
      console.log(jsondata)
      console.log(container) // todo 같이 지워야 함
      // todo submit data가 많아질 경우에 대한 json 폼팩터가 필요하진 않은지?
    });
    req.on('end', ()=>{

      // todo 단위테스트 변경 객체 속에 객체 집어넣어서 json으로 밀어내기

      // fs.writeFile(`storage/UserId.json`, body, (err)=>{
      //   if(err){
      //     console.log(err)
      //   }
      // })
      fs.readdir(`storage`,(err, data)=>{
        // ! caution
        //! 스토리지 폴더에 파일이 늘지 않음. readdir로 읽어온다고 해도 파일이 생기지 않으면 길이값의 의미가..
        //? 연산 시키면 되는거 아님?
        try {
          console.log(`check out this on readdir: `,data)
          for(let i = 0; i < data.length; i++){

            fs.writeFile(`storage/userId.json`, body, (err,data)=>{
              if(err){
                console.log(`check out this error : `,err)
              }else{
                console.log(`!!!`+data)
                // * fs로 파일 작성은 문제없이 구동하고 있음. 단위 로직 조정 필요
              }
            })
            
          }








        } catch (error) {
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
