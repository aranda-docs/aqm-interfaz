import react, {useState} from 'react';
import style from './style.css';

const Navbar =() =>{
    return(
        <>
            <div className="container " >
                <nav className="navbar" xl>
                    <a href=""  className="navbarimg"> </a>

                    <div className="recuadro xl"></div>
                    <span className="navbartri"></span>
                   <div className="reportes">
                        <h3 className="reportestexto">Dashboard</h3>
                    </div>

                    <div className="dashboard">
                         <ul>
                            <a href=""><img className="dashboardicono"/>
                            <h6 className="dashboardtexto">Dashboard</h6></a>    
                        </ul> 
                    </div>

                    <div className="reportescubo">
                        <ul>    
                            <a href=""><img className="reportesicono"/></a>
                            <a href=""><h6  className="reportestexto1">Reportes</h6></a>
                        </ul>
                    </div>

                    <div className="catalogo">
                        <ul>
                            <a href=""><img className="catalogoicono"/></a>
                            <a href=""><h6 className="catalogotexto">Catálogo</h6></a>
                        </ul>    
                    </div>
                    
                    <div className="configuracion">
                            <a href=""> <h3 className="configuraciontexto">Configuración</h3>
                            <img  className="configuracionicono"/></a>
                    </div>

                    <div className="logOut">
                        <a href="" ><h5 className="logOuttexto" >|  Log Out</h5></a>
                    </div>

                    <div className="nombreUsuario">
                        <h3 className="nombreUSuario1">Jhonatan Ricardo López Gonzalez</h3>
                    </div>
                </nav>  
            </div>
        </>
    )
}

export default  Navbar;