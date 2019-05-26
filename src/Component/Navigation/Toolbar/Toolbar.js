import React,{Component} from 'react';
import {connect} from "react-redux";
//icon
import { Menu,KeyboardArrowDown } from '@material-ui/icons';

//css
import "./Toolbar.scss"
import {firebase, googleAuthProvider} from "../../../Firebase/firebase";
import {logoutAction} from "../../../Redux/Actions/AuthAction";


class Toolbar extends Component{
    loginHandler = () =>{
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
    logoutHandler = () => {
        this.props.logoutAction();
        firebase.auth().signOut();
    }
    render(){
        const {sideDrawerToggle,ProfileData} = this.props;
        return(
            <header>
                {(ProfileData.isAuth) &&
                    <div className='login-profile'>
                        <img src={ProfileData.profile.photo} alt={ProfileData.profile.name}/>
                        <span className='profile-name'>
                            {ProfileData.profile.name}
                            <KeyboardArrowDown className='arrow-down'/>
                            <span onClick={this.logoutHandler}>logout</span>
                        </span>
                    </div>
                }
                {(!ProfileData.isAuth) &&
                    <div className='login-button'>
                        <button onClick={this.loginHandler}>Login</button>
                    </div>
                }
                <Menu className='icon-toggle' onClick={sideDrawerToggle}/>

            </header>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        ProfileData: state.auth,
    }
}
const mapDispatchToProps = dispatch =>({
    logoutAction:() => dispatch(logoutAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);