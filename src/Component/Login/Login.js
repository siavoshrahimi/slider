import React,{Component} from 'react';
import {loginAction} from '../../Redux/Actions/AuthAction';
import { connect } from 'react-redux';

import {googleAuthProvider,firebase} from '../../Firebase/firebase';

class Login extends Component {
    loginHandler = () =>{
        firebase.auth().signInWithPopup(googleAuthProvider);

    }
    render(){
        return (
            <div>
                <button onClick={this.loginHandler}>Login with Google Account</button>
            </div>
        )
    }

}
/*map dispatch to props */
const mapDispatchToProps = dispatch => ({
    loginAction: () => dispatch(loginAction())
});


export default connect(null,mapDispatchToProps)(Login);