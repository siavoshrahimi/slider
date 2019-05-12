import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
//import Dashboard from '../Component/Dashboard/Dashboard';


const PrivateRoute = ({isAuth, component:Component, ...rest}) =>{
    return <Route {...rest} component={(props) =>{
        return  (isAuth)? (<Component {...props}/>) :(<Redirect to='/login'/>);
}}/>
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth
    }
}
export default connect(mapStateToProps)(PrivateRoute);