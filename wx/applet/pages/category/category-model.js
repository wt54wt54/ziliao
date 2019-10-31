import Base from '../../utils/util.js'

class Category extends Base {
  constructor() {
    super()
  }
  isExit=(typename)=>{
    // 判断想要的数据本地有没有
    let localData=wx.getStorageSync('category')||[]
    /*
    [
      {name:'面食',info:'',imgpath}
      {name:'酒水',info:'',imgpath}
    ]

    */ 
    let index=-1 //数据没有 
    for(var i=0;i<localData.length;i++){
      if (localData[i].name === typename){
         index=i
      }
    }
    return index

  }
  localCategoryData=()=>{

  }
}
/*
1.先判断本地是否有数据
2. 有 数据源从本地来
3. 没有 请求数据 并且将数据存到本地

*/ 
export default Category