class UserInfo{
  constructor(data){
    this.userId = data.userId;
    this.userPw = data.pw;
    this.Email = data.email;
    this.PhoneNum = data.phoneNum
  }
}
let data = {
  email:'',
  phoneNum:'ㅁㄴㅇㄹ',
  pw:'ㅁㄴㅇㄹ',
  pwConfirm:'ㅁㄴㅇㄹ',
  userId:'ㅁㄴㅇㄹ'
}
console.log(data.phoneNum)
let test = new UserInfo(data)

console.log(test)

// let test22 = JSON.stringify(test,null,2)
// console.log(object.test22)

const fs = require('fs')
fs.writeFile('testJson.json', JSON.stringify(test, null, 2), 'utf-8', (err)=>{
  if(err){
    console.log(`error!!!! : ${err}`)
  }
})