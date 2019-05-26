import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//style
import "./landing.scss"
//icons
import { Menu } from '@material-ui/icons';


class Landing extends Component{
    componentWillMount() {
        document.title = 'Hummingbird | landing'
    }
    render(){
        return(
            <div className="landing-wrapper">
                <h1>Welcome to hummingbird</h1>
                <p>
                    this app is the demo of hummingbird coders to show you different types of sliders for selling houses or rents
                </p>
                <div>
                    <p>
                        You can access to <Link to="/dashboard">dashboard</Link> to add your house data for different type of sliders view.you can also use toggle menu icon <Menu className='menu-icon'/> to open menu and access to other part of application
                        to access slideshow you can use menu or click on this link <Link to="/slide-show">slide show</Link> to access single slider you can use menu or click on this link <Link to="/single-slider">single slider</Link> to access carousel you can use menu or click on this link <Link to="/carousel">carousel</Link>
                    </p>
                </div>
                <p>
                    <strong>first you need login to app to add your sliders data to database these data including:</strong>
                </p>
                <ul>
                    <li>city</li>
                    <li>title</li>
                    <li>images</li>
                    <li>address</li>
                    <li>bathroom</li>
                    <li>description</li>
                    <li>parking spot</li>
                    <li>count of beds</li>
                    <li>count of rooms</li>
                    <li>time of expiration</li>
                    <li>price for rent or sell</li>
                </ul>

            </div>
        )
    }
}

export default Landing