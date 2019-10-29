class Base{
  axios(method,url,data){
     return new Promise((resolve,reject)=>{
       wx.request({
         url: 'http://localhost:3000'+url,
         method: method||'GET',
         data: data,
         success:(data)=>{
           resolve(data)
         },
         fail:(err)=>{
           reject(err)
         }
       })
     })
  }
}

export default Base
