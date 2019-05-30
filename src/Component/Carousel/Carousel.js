import React,{Component} from 'react';
import Card from './Card/Card';

//data
import data from '../../assets/data/data';
//css
import './Carousel.scss';
//icon
import {NavigateNext,NavigateBefore} from '@material-ui/icons';


class Carousel extends Component{
    state= {
        properties:data.properties,
        property:data.properties[0]
    }
    componentWillMount() {
        document.title = 'Hummingbird | carousel'
    }
  nextHandler = () =>{
    const nextProp = this.state.property.index+3;
    this.setState({property:this.state.properties[nextProp]})
  }
  prevHandler = () =>{
    const prevProp = this.state.property.index-3;
    this.setState({property:this.state.properties[prevProp]})
  }
    render(){
        const {property,properties} = this.state;
        return(
          <div className='carousel-container'>
            {
              !(property.index === 0)&&
              <span className='navigate before' onClick={this.prevHandler}><NavigateBefore/></span>
            }
            {
              !(property.index === data.properties.length-3) &&
              <span className='navigate next' onClick={this.nextHandler}><NavigateNext/></span>
            }
            <h3><span>Best Offers</span></h3>
            <div className='carousel-wrapper'>
              <div className='carousel' style={{
                'transform': `translateX(-${property.index*(100/properties.length)}%)`
              }}>
                {properties.map(card => <Card property={card} key={card._id}/>)}
              </div>

            </div>
          </div>

        )
    }
}
export default Carousel