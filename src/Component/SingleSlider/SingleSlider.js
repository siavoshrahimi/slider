import React,{Component} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

//data
import data from '../../assets/data/data';
//card
import Card from './Card/Card';
//css
import './SingleSlider.scss';



class SingleSlider extends Component{
    state = {
      properties:data.properties,
      property:data.properties[0],
    }
    componentWillMount() {
        document.title = 'Hummingbird | single slider'
    }
    //set interval
    componentDidMount (){
      this.myInterval = setInterval(() => {
        let nextProp ;
        if(this.state.property.index === data.properties.length-1){
          nextProp = 0;
        }
        else{
          nextProp = this.state.property.index+1;
        }
        this.setState({property:this.state.properties[nextProp]})
      },15000);
    }
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }


    render(){
        const {property} = this.state;
        return(
            <div className='single-card-wrapper'>
                <h1>Our offer for you</h1>
                <div className='time-bar-wrapper'>
                    <div className='time-bar'></div>
                </div>
              <TransitionGroup>
                <CSSTransition
                  key={property._id}
                  timeout={4000}
                  classNames='fade'
                >
                  <Card property={property}/>
                </CSSTransition>
              </TransitionGroup>
            </div>
        )
    }
}
export default SingleSlider