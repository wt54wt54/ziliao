import React ,{Component,Fragment} from 'react'
import './model.css'
class Model extends Component{
  render(){
    return(
        <div className='model'>
          <div> 
            暂未登录，请先登录
            <button>goLogin∫</button>
          </div>
        </div>
      )   
  }
}
export default Model