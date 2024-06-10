class UserInfo{
  constructor(id,pw,Email,PhoneNum){
    this.userId = id;
    this.userPw = pw;
    this.Email = Email;
    this.PhoneNum = PhoneNum
  }
}
let data = {
  'email':'',
'phoneNum':'ㅁㄴㅇㄹ',
'pw':'ㅁㄴㅇㄹ',
'pwConfirm':'ㅁㄴㅇㄹ',
'userId':'ㅁㄴㅇㄹ'
}
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