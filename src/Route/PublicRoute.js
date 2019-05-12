import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


const PublicRoute = ({isAuth, component:Component, ...rest}) =>{
    return <Route {...rest} component={(props) =>{
         return (isAuth)? (<Redirect to='/dashboard'/>): (<Component {...props}/>)
    }}/>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth.isAuth
    }
}
export default connect(mapStateToProps)(PublicRoute);