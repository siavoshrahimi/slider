import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Menu extends Component{
    render(){
       return(
           <div>
               <ul>
                   <li><NavLink to='/' >Landing Page</NavLink></li>
                   <li><NavLink to='/dashboard' >Dashboard</NavLink></li>
                   <li><NavLink to='/slide-show' >Slide Show</NavLink></li>
                   <li><NavLink to='/single-slider' >Single Slider</NavLink></li>
                   <li><NavLink to='/carousel' >Carousel</NavLink></li>
               </ul>
           </div>

       )
    }
}

export default Menu;
