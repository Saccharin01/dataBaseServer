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

      /**
       * todo json 데이터를 수용할 폼팩터를 제작
       * * 지금은 빈 문자열(body)에 서비스 서버에서 넘어온 데이터를 온 로딩하고 있는데
       * * 하나의 탬플릿을 만들어서(html 탬플릿 같은) 서비스 서버에서 넘어온 데이터를 배열 순환 혹은 객체 메서드로 끼워넣어서 json 데이터로 가공 시키고 저장하는 방식
       * * readdir 방식과 다른 점은 파일을 여러개 만들지 않음. 폼팩터가 하나 있기 때문에 기존 폼팩터에서 하위로 추가되기만 함
       * * 쉽게 설명하자면 객체 속에 n개의 객체가 생기게 되는 것. 
       * todo 컨테이너 역할의 객체에는 user의 데이터가 들어갈텐데 그 데이터를 색인할 key값이 필요함
       * todo 위에서 만든 key 값에 할당되는 value는 폼팩터로 제작된 데이터의 폼을 따라감
       * todo 해당 과정은 리터럴 작업을 최대한 배제해야 함
       */

      // fs.readdir(`storage`,(err, data)=>{
      //   try {
      //     console.log(`check out this on readdir: `,data)
      //     fs.writeFile(`storage/userId.json`, body, (err,data)=>{
      //       if(err){
      //         console.log(`check out this error : `,err)
      //       }else{
      //         console.log(`!!!`+data)
      //       }
      //     })








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
