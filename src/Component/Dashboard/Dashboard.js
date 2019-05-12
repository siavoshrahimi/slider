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
        return(
            <button onClick={this.lougoutHandler}>Logout</button>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logoutAction: () => dispatch(logoutAction())
})

export default connect(null,mapDispatchToProps)(Dashboard);