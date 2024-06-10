class UserInfo{
  constructor(data){
    this.userId = data.userId;
    this.userPw = data.pw;
    this.Email = data.email;
    this.PhoneNum = data.phoneNum
  }
}

function jsonFS(data){
  let container = {};
  let index = 0;
  let prop = new UserInfo(data)
  // let result = container[index++] = prop
  return container[index] = prop
}








let data = {
  email:'',
  phoneNum:'ㅁㄴㅇㄹ',
  pw:'ㅁㄴㅇㄹ',
  pwConfirm:'ㅁㄴㅇㄹ',
  userId:'ㅁㄴㅇㄹ'
}

jsonFS(data)
console.log(jsonFS(data))
console.log(typeof(jsonFS(data)))

const fs = require('fs')
fs.writeFile('testJson.json',JSON.stringify(jsonFS(data),null,2),(err)=>{
  if(err){
    console.log(`error occur on writeFile : ${err}`)
  }
})


// console.log(data.phoneNum)
// let test = new UserInfo(data)

// console.log(test)

// // let test22 = JSON.stringify(test,null,2)
// // console.log(object.test22)

// const fs = require('fs')


// fs.writeFile('testJson.json', JSON.stringify(test, null, 2), 'utf-8', (err)=>{
//   if(err){
//     console.log(`error!!!! : ${err}`)
//   }
// })

// fs.readFile('testJson.json', 'utf-8',(err,data)=>{
//   let container = {}
//   if(err){
//     fs.writeFile('testJson.json', container, 'utf-8', (err)=>{
//       if(err){
//         console.log(`WriteFile Error: ${err}`)
//       } else {

//       }
//     })
//   }
// })