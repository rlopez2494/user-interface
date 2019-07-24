import React, { Component } from 'react';
import './styles/LoginForm.css';
import Advertencia from '../../img/advertencia.jpg';
import axios from 'axios';

class LoginForm extends Component{
    state = {
    error : false,
    errorType : 3,
    nacionalidad: "v",
    cedula: "",
    password: ""
    }

    apiCall = () => {

        const { cedula, password } = this.state;
        console.log(cedula, password);

        axios.post('http://localhost:9000/login', {
            cedula,
            password
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
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
  
    renderSwitch =  (param) => {
        switch (param) {
            case 1: 
            return(<p>Contraseña incorrecta</p>);

            case 2:
            return(<p>El usuario no esta registrado</p>);

            case 3:
            return(<p>Error de servidor, vuelva a intentarlo</p>);

            default:
            return null;
        }
    }

    render() {
        return(
            <div id="login-form">
    
                <p id="bienvenido">BIENVENIDO</p>
    
                <div id="login-fields">
    
                    <div>
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
                                <img src={Advertencia} alt="warning" width="20" height="20"/>
    
                                {/*Conditional Rendering for errorType*/}
                                
                                {this.renderSwitch(this.state.errorType)}                            
                                
                            </div>
                        
                        : null
                    }   
    
                    <a href="#">Recuperar contraseña</a>
            
                </div>
    
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" id="registrarse">REGISTRARSE</button>
                    <button type="submit" id="ingresar">INGRESAR</button>
                </form>
                
            </div>
        );
    }
}

export default LoginForm;