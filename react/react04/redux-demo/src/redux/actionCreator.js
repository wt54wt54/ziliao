import Store from './store'
export default{
  addnum(){
    let action={
      type:'ADD_NUM',//必须参数
      params:5
    }
    Store.dispatch(action)
    // 通过store下的dispath将action传递给老佛爷
  },
  changeName(params){
    let action={
      type:'CHANGE_NAME',
      params:params||'呵呵哒'
    }
    Store.dispatch(action)
  }
}