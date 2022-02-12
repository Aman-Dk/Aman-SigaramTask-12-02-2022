import React, { Component } from 'react'
import List from './components/List';

import './Styles.css'

export default class App extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        id : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
        color:'blue',
        newColor:'red',
        current:'',
        previous:''
      }
    }

    getId = (e) =>{

        if(this.state.current===''){
            this.setState({current:e})
        }else{
            this.setState({previous:this.state.current, current:e})
        }
    }

  render() {

    let display =   this.state.id.map((id)=>{
                        if(this.state.current !==''){
                            if(id===this.state.current){

                                return(
                                    <List key={id} id={id} bg={this.state.newColor} getId={this.getId}/>
                                )
                            }
                        }
                        if(this.state.previous !==''){
                            if(id===this.state.previous){

                                return(
                                    <List key={id} id={id} bg={this.state.newColor} getId={this.getId}/>
                                )
                            }
                        }

                        return(
                            <List key={id} id={id} bg={this.state.color} getId={this.getId}/>
                        )
                    })
    
    return(
        <div className='container'>
        
           <div className='row'>
               
                {
                    display
                }   
                
           </div>
        
        </div>
    )
  }
}
