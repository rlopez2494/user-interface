import React, { Component } from 'react';
import './styles/LoginForm.css';
import Advertencia from '../img/advertencia.jpg';
import axios from 'axios';
import { Link } from "react-router-dom";
import validate from "validate.js"

class LoginForm extends Component{
    state = {
        errorType : "",
        nacionalidad: "v",
        cedula: "",
        password: "",
        isAdmin: false,
    }

    componentDidMount = () => {

        console.log(this.props.match.path)

        if(this.props.match.path === "/admin") {

            this.setState({
                isAdmin: true
            })
        }
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

    apiCall = (cedula, password, isAdmin) => {

        axios.post('http://localhost:9000/login', {
            cedula,
            password,
            isAdmin
        })
        .then((response) => {
            console.log(response.data);

            const bearerToken = response.data
            this.dataCall(bearerToken)
        })
        .catch((err) => {
            console.log(err);
            if(err.response && err.response.data) {
                this.setState({
                    errorType: err.response.data
                })
            }
            else {
                this.setState({
                    errorType: "Problema de servidor"
                })
            }
        })
    }
 
    handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "cedula") {
            parseInt(name, 10)
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {

        e.preventDefault();
        
        const { cedula, password, isAdmin } = this.state;
        
        if (!validate.isEmpty(cedula)) {

            if(validate.isInteger(parseInt(cedula))) {

                if(!validate.isEmpty(password)){
                    this.apiCall(cedula, password, isAdmin)
                }
                else {
                    this.setState({
                        errorType: "Ingrese contraseña"
                    })
                }
                
            }
            else {
                this.setState({
                    errorType: "Usuario invalido"
                })
            }
            
        }
        else {
            this.setState({
                errorType: "Ingrese un usuario"
            })
        }

    }
  

    render() {
        return(
            <div id="login-form">
    
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
                        (this.state.errorType) ?
    
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
                    

                    <button 
                        type="submit" 
                        id="registrarse"
                    >REGISTRARSE

                    </button>

                </form>
                
            </div>
        );
    }
}

export default LoginForm;