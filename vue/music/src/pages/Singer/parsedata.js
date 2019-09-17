
function avator(mid){
  var mid=mid||'004AlfUb0cVkN1'
  return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
}

export const  parseData=(list)=>{
  // 处理数据
  let obj={
    'hot':{
      title:"hot",
      items:[]
    }
  }
  // 将数据以首字母进行分组
  for (let i = 0; i < list.length; i++) {
     let {Findex,Fsinger_mid,Fsinger_name} =list[i]
     let nowItem ={Findex,Fsinger_mid,Fsinger_name}
     nowItem.avator=avator(Fsinger_mid);
     let index=nowItem.Findex
     
     if(i<20){
       obj['hot'].items.push(nowItem)
     }
     
     if(obj[index]){
      // obj有没有首字母 有 添加
        obj[index].items.push(nowItem)
     }else{
        obj[index]={
          title:index,
          items:[]
        }
        obj[index].items.push(nowItem)
     }
    
  }
  let hot=[]
  let indexArr=[]
  for (const key in obj) {
    if(key==='hot'){
      hot.push(obj[key])
    }else{
      indexArr.push(obj[key])
    }
  }
  indexArr.sort((a,b)=>{
    return a.title.charCodeAt()-b.title.charCodeAt()
  })
  let rusult =hot.concat(indexArr)
  console.log(rusult)
  return rusult 
}