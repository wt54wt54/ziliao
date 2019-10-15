import React ,{Component,Fragment} from 'react'
import hoc from  './hoc'

class Hello extends Component{
  render(){
    return(
        <div className='hello'>
          你好：{this.props.name}
        </div>
      )   
  }
}
export default hoc(Hello)