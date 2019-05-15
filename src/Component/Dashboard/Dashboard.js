import React,{Component} from 'react';
import { connect } from 'react-redux';
import {logoutAction} from '../../Redux/Actions/AuthAction';
import {firebase} from '../../Firebase/firebase';

class Dashboard extends Component{
    lougoutHandler = () => {
        //this.props.logoutAction();
        firebase.auth().signOut();
    }
    render(){
        console.log(this.props.antoni)
        return(
            <button onClick={this.lougoutHandler}>Logout</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        antoni: state.isAuth,
    }
}

export default connect(mapStateToProps)(Dashboard);