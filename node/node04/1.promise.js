// setTimeout(() => {
//    console.log(1)
//    setTimeout(() => {
//     console.log(2)
//     setTimeout(() => {
//       console.log(2)
//       setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//           console.log(2)
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 2000);
function fun1(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         console.log(1)
        //  resolve('执行ok') //执行ok
        reject('执行失败') 
      },2000)
  })
}
function  fun2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(2)
      resolve('ok')
    },1000)
  })
}
// console.log(fun1())
fun1()
.then(()=>{
  console.log('fun1成功执行')
  return fun2()
})
.then(()=>{
  console.log('fun2成功执行')
})
.catch(()=>{
  console.log('catch')
})
// 