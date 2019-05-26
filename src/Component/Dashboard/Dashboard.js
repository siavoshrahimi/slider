import React,{Component} from 'react';



class Dashboard extends Component{
    componentWillMount() {
        document.title = 'Hummingbird | dashboard'
    }


    render(){
        return(
            <h1>dashboard</h1>
        )
    }
}


export default Dashboard;