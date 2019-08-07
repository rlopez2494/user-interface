import React from 'react';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import "./styles/Login.css";

function Login () {
    return(
        <div id="login">

            {/* Header Component */}
            <Header />

            {/* MainSection Component */}
            <MainSection />

            {/* Footer Component */}
            <Footer />

        </div>
    );
}

export default Login;


