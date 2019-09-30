import React, { Component } from 'react';
import './styles/LoginForm.css';
import Advertencia from '../img/advertencia.jpg';
import axios from 'axios';
import { Link } from "react-router-dom";

class LoginForm extends Component{
    state = {
        error : false,
        errorType : "",
        nacionalidad: "v",
        cedula: "",
        password: ""
    }

    dataCall = (bearerToken) => {
        axios.post('http://localhost:9000/usuario', {
            headers: {
                'authorization': `Bearer ${bearerToken}`
            }
        })
        .then((response) => {
            console.log(response.data.user["_id"])
            this.props.history.push("/admin/" + response.data.user["_id"])
        })
        .catch((err) => {
            console.log(err)
        })
    }

    apiCall = () => {

        const { cedula, password } = this.state;
        console.log(cedula, password);

        axios.post('http://localhost:9000/login', {
            cedula,
            password
        })
        .then((response) => {
            console.log(response.data);

            const bearerToken = response.data
            this.dataCall(bearerToken)
            
            // const error = response.data;
            

            //     this.setState({
            //         error: true,
            //         errorType: error
            //     });

            })
        .catch(function (err) {
            console.log(err);
        })
    }
 
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {

        const { cedula, password } = this.state;
        console.log(cedula, password)

        e.preventDefault();
        this.apiCall();

    }
  

    render() {
        return(
            <div 
                id="login-form"
                style={
                    {
                        backgroundColor: 
                        (this.props.match.url === "/admin") ? 
                        "rgba(0, 49, 75, 0.73)" 
                        : 
                        null 
                    }
                }
            >
    
                <p className="highlight">BIENVENIDO</p>
    
                <div id="login-fields">
    
                    
                    <div id="fields-container">

                        <div id="cedula-select">

                            <select 
                            name="nacionalidad" 
                            value={this.state.nacionalidad} 
                            onChange={this.handleChange}
                            >
                                <option value="v">V-</option>
                                <option value="e">E-</option>
                            </select>
        
                            <input 
                            type="text" 
                            name="cedula" 
                            placeholder="12345678" 
                            value={this.state.cedula}
                            onChange={this.handleChange}
                            />

                        </div>

    
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="CONTRASE;A"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />

                    </div>

        
    
                    {/*Conditional Rendering for errors*/}
    
                    {
                        (this.state.error) ?
    
                            <div id="login-error">
                                <img 
                                    src={Advertencia} 
                                    alt="warning" 
                                    width="20" 
                                    height="20"
                                />
    
                                {/*Conditional Rendering for errorType*/}
                                
                                <p>{this.state.errorType}</p>                            
                                
                            </div>
                        
                        : null
                    }   
    
                    <a href="#">Recuperar contraseña</a>
            
                </div>
    
                <form onSubmit={this.handleSubmit}>

                    
                        <button 
                            type="submit" 
                            id="ingresar"
                            >INGRESAR
                        </button>
                    
                    

                    {
                        (this.props.match.url === "/admin") ?
                        null
                        :
                        <button 
                            type="submit" 
                            id="registrarse"
                            >REGISTRARSE
                        </button>
                    }

                </form>
                
            </div>
        );
    }
}

export default LoginForm;