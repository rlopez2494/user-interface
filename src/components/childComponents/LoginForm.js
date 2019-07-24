import React, { Component } from 'react';
import './styles/LoginForm.css'
import Advertencia from '../../img/advertencia.jpg'

class LoginForm extends Component{
    state = {
    error : false,
    errorType : 3,
    nacionalidad: "v",
    cedula: "",
    password: ""
    }

    renderSwitch (param) {
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
                        <select name="nacionalidad">
                            <option value="v">V-</option>
                            <option value="v">E-</option>
                        </select>
    
                        <input type="text" name="cedula" placeholder="12345678" />
    
                        <input type="text" name="password" placeholder="CONTRASE;A"/>
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
    
                <form>
                    <button type="submit" id="registrarse">REGISTRARSE</button>
                    <button type="submit" id="ingresar">INGRESAR</button>
                </form>
                
            </div>
        );
    }
}

export default LoginForm;