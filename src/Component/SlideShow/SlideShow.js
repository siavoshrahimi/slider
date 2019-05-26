import React,{Component} from 'react';


//icon
import {NavigateNext,NavigateBefore} from '@material-ui/icons'

import Card from './Card/Card';
//data
import data from '../../assets/data/data';
//css
import './SlideShow.scss'

class SlideShow extends Component{
    state = {
      properties:data.properties,
      property:data.properties[Math.floor(data.properties.length/2)]
    }
    componentWillMount() {
        document.title = 'Hummingbird | slide show'
    }
    nextHandler = () =>{
        const nextProp = this.state.property.index+1;
        this.setState({property:this.state.properties[nextProp]})
    }
  prevHandler = () =>{
    const prevProp = this.state.property.index-1;
    this.setState({property:this.state.properties[prevProp]})
  }
    render(){
        const {property,properties} = this.state;
        return(
          <div className='slide-show-container'>
            {
              !(property.index === 0)&&
              <span className='navigate before' onClick={this.prevHandler}><NavigateBefore/></span>
            }
            {
              !(property.index === data.properties.length-1) &&
              <span className='navigate next' onClick={this.nextHandler}><NavigateNext/></span>
            }

            <div className='card-slider'>
              <div className='card-slider-wrapper' style={{
                'transform': `translateX(-${property.index*(100/properties.length)}%)`
              }}>
                {properties.map(card => <Card active={card.index === property.index} property={card} key={card._id}/>
                )}

              </div>
            </div>
          </div>

        )
    }
}
export default SlideShow