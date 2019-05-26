import React,{Component} from 'react';

class Carousel extends Component{
    componentWillMount() {
        document.title = 'Hummingbird | carousel'
    }
    render(){
        return(
            <h1>Carousel</h1>
        )
    }
}
export default Carousel