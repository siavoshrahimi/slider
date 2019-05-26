import React,{Component,Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";

//backdrop
import Backdrop from '../../UI/Backdrop/Backdrop';

//style
import './SideDrawer.scss'


class Menu extends Component{
    render(){
        const {show,backdropClosed,ProfileData} = this.props;
        let addClass =['side-menu'];
        if(show){
            addClass.push('showe');
        }
        return(
            <Fragment>
                <Backdrop show={show} backdropClosed={backdropClosed}/>
                <div className={addClass.join(' ')}>
                    {ProfileData.isAuth && <img src={ProfileData.profile.photo} alt={ProfileData.profile.name}/>}
                    <span>{ProfileData.profile.name}</span>
                    <span>{ProfileData.profile.email}</span>
                    <ul className='menu-items'>
                        <li><NavLink to='/' >Landing Page</NavLink></li>
                        <li><NavLink to='/dashboard' >Dashboard</NavLink></li>
                        <li><NavLink to='/slide-show' >Slide Show</NavLink></li>
                        <li><NavLink to='/single-slider' >Single Slider</NavLink></li>
                        <li><NavLink to='/carousel' >Carousel</NavLink></li>
                    </ul>
                </div>
            </Fragment>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        ProfileData: state.auth,
    }
}


export default connect(mapStateToProps)(Menu);
