class UserInfo{
  constructor(id,pw,Email,PhoneNum){
    this.userId = id;
    this.userPw = pw;
    this.Email = Email;
    this.PhoneNum = PhoneNum
  }
}

let test = new UserInfo(1,2,3,4)

console.log(test)
let object = {
  'id' : test
};

let test22 = JSON.stringify(test,null,2)
console.log(object.test22)

const fs = require('fs')
fs.writeFile('testJson.json', test22, 'utf-8', (err)=>{
  if(err){
    console.log(`error!!!! : ${err}`)
  }
})