class Base{
  constructor(){
    this.baseUrl ='http://localhost:3003'
  }
  axios(method,url,data){
     return new Promise((resolve,reject)=>{
       wx.request({
         url: this.baseUrl+url,
         method: method||'GET',
         data: data,
         success:(data)=>{
           resolve(data.data)
         },
         fail:(err)=>{
           reject(err)
         }
       })
     })
  }
  // 获取事件传参
  getDataSet(e,key){
    if(key){
      return e.currentTarget.dataset[key]
    }else{
      return e.currentTarget.dataset
    }
  }
}

export default Base
