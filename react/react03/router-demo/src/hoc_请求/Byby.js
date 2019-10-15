import React ,{Component,Fragment} from 'react'
import hoc from  './hoc'

class Byby extends Component{
  render(){
    return(
        <div className='hello'>
          再见：{this.props.name}
        </div>
      )   
  }
}
export default hoc(Byby)