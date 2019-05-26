import React,{Component,Fragment} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        isOpen:false,
    }
    sideDrawerToggleHandler = () => {
        this.setState(prevState => {return {isOpen:!prevState.isOpen}});
    }
    backdropCloseHandler = () => {
        this.setState({isOpen: false})
    }
    render(){
        return(
            <Fragment>
                <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler}/>
                <SideDrawer show={this.state.isOpen} backdropClosed={this.backdropCloseHandler}/>
                <div className="container">
                    <main className='content'>
                        {this.props.children}
                    </main>
                </div>
            </Fragment>
        )
    }
}
export default Layout;