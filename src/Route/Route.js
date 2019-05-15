import React,{Fragment,Component} from 'react';
import {Switch,Route,Router} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


import createHistory from 'history/createBrowserHistory';
//import components
import Layout from '../Component/Layout/Layout';
import Login from '../Component/Login/Login';
import Landing from '../Component/Landing/Landing';
import Dashboard from '../Component/Dashboard/Dashboard';
import SingleSlider from "../Component/SingleSlider/SingleSlider";
import SlideShow from "../Component/SlideShow/SlideShow";
import Carousel from "../Component/Carousel/Carousel";

export const history = createHistory();


class Routes extends Component{
    render() {
        return (
            <Router history={history}>
                <Fragment>
                    <Layout>
                        <Switch>
                            <Route exact path='/' component={Landing}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/single-slider' component={SingleSlider}/>
                            <Route path='/slide-show' component={SlideShow}/>
                            <Route path='/carousel' component={Carousel}/>
                            <PrivateRoute  path='/dashboard' component={Dashboard}/>
                        </Switch>
                    </Layout>
                </Fragment>
            </Router>

        );
    }

}

export default Routes;
