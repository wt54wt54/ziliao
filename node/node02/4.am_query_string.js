const qs=require('querystring')
// let string='us@wangyi!ps@123!age@16'
// console.log(qs.parse(string,'!','@'))
// let obj={us:'wangyi',ps:123,age:16}
// console.log(qs.stringify(obj))

let  string='us=网易&ps=123'
console.log(qs.escape(string))
let  code='us%3D%E7%BD%91%E6%98%93%26ps%3D123'
console.log(qs.unescape(code))