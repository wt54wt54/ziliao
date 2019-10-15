// 老佛爷本身 是一个函数 有2参数 参数修改前端全局state数据 参数2 奏折 action
//  根据奏折（action）修改state 数据 返回修改过的数据
import State from './state'
export default (prevState=State,action)=>{
 
  let newData=prevState
   // 根据action修改数据
  return newData
}