import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar"
import "./styles/Usuario.css"
function Usuario() {
   
    return(
        <div id="usuario">

            <div className="column" id="left">
                <SideBar />
            </div>

            <div className="column" id="right">
                <Header />
                <MainSection />
            </div>

        </div>
    )
}

export default Usuario; 