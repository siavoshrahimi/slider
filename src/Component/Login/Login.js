import React,{Component,Fragment} from 'react';

//css
import './Login.scss';
import {connect} from "react-redux";

class Login extends Component {
    componentWillMount() {
        document.title = 'Hummingbird | login'
    }

    render(){
        const {ProfileData} = this.props;
        return (
            <Fragment>
                {!ProfileData.isAuth && <div className='login-content'>
                    <p>For accessing to Dashboard you should login to app </p>
                    <p>For login to app press the login button in the menu on top of the page </p>
                </div>}
                {
                    ProfileData.isAuth && <div className='login-content'>
                        <h1>Hi {ProfileData.profile.name}</h1>
                        <p>You are already login to the app</p>
                    </div>
                }
            </Fragment>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        ProfileData: state.auth,
    }
}

export default connect(mapStateToProps)(Login);