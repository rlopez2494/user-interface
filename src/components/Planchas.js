import React, {Component} from 'react';
import Plancha from "./Plancha";
import "./styles/Planchas.css";
import Axios from 'axios';

class Planchas extends Component{
    state = {
        data: []
    }

    componentDidMount = () => {
        Axios.get('http://localhost:9000/planchas')
        .then( response => this.setState({
            data: response.data
        }))
        .catch( err => {console.log(err)})
    }

    render() {
        console.log(this.state.data)
        return (
            <div className="planchas main-box">

                {
                    this.state.data.map ( (plancha, index) => {
                        
                        return(
                            <Plancha 
                            key={plancha['_id']}
                            id={plancha['_id']}
                            routeProps={this.props}
                            data={plancha}
                        />
                        )
                    })
                }

                <Plancha 
                    handleClick={this.handleClick}
                    tipo="agregarPlancha"
                    routeProps={this.props}
                />
            </div>
        );
    }
};

export default Planchas;