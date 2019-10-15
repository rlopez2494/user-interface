import React, { Component } from 'react';

class PlanchaOrgano extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.puestos
        };
        this.handleChange = this.handleChange.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }    

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside)
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (!this.wrapperRef.contains(event.target)) {
            this.props.handleChange(this.props.nombre, this.state)
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div 
            id={this.props.id} 
            ref={this.setWrapperRef} 
            className="plancha-registro__organo">

                    <h2>EPALES</h2>

                    {
                        (this.props.puestos.hasOwnProperty("presidente")) ? 
                            <div className="plancha-registro__puesto">

                                <h4>Presidente</h4>

                                <div className="plancha-registro__puesto--revisar">

                                    <input 
                                        type="text" 
                                        name="presidente" 
                                        value={this.state.presidente}
                                        onChange={this.handleChange}
                                    />

                                    <div className="plancha__organo--disponible"></div>
                                </div>

                            </div>
                        :
                            null
                    
                    }

                    {
                        (this.props.puestos.hasOwnProperty("vicepresidente")) ? 
                            <div className="plancha-registro__puesto">

                                <h4>Vicepresidente</h4>

                                <div className="plancha-registro__puesto--revisar">

                                    <input 
                                        type="text" 
                                        name="vicepresidente" 
                                        value={this.state.vicepresidente}
                                        onChange={this.handleChange}
                                    />

                                    <div className="plancha__organo--disponible"></div>
                                </div>

                            </div>
                        :
                            null
                    
                    }

                    {
                        (this.props.puestos.hasOwnProperty("tesorero")) ? 
                            <div className="plancha-registro__puesto">

                                <h4>Tesorero</h4>

                                <div className="plancha-registro__puesto--revisar">

                                    <input 
                                        type="text" 
                                        name="tesorero" 
                                        value={this.state.tesorero}
                                        onChange={this.handleChange}
                                    />

                                    <div className="plancha__organo--disponible"></div>
                                </div>

                            </div>
                        :
                            null
                    
                    }

                    {
                        (this.props.puestos.hasOwnProperty("secretarioGeneral")) ? 
                            <div className="plancha-registro__puesto">

                                <h4>Secretario General</h4>

                                <div className="plancha-registro__puesto--revisar">

                                    <input 
                                        type="text" 
                                        name="secretarioGeneral" 
                                        value={this.state.secretarioGeneral}
                                        onChange={this.handleChange}
                                    />

                                    <div className="plancha__organo--disponible"></div>
                                </div>

                            </div>
                        :
                            null
                    
                    }

                </div>
        );
    }
}

export default PlanchaOrgano;