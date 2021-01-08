import reaact,{useState} from 'react';
import style from './style.css'; 
// import Hidden from '@material-ui/core';
import Listado from '../Listado/Listado';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {withWidth, hidden, Hidden,Button, makeStyles} from '@material-ui/core';

const estilos =makeStyles (theme=> ({
    
    appbar: {
        [theme.breakpoints.up('sm')]:{
          width:'calc(100% - ${240}px)',
          marginleft:240,
        }
      },
    
      menuButton: {
          marginRight:theme.spacing(2),
          [theme.breakpoints.up('sm')]:{
            display:'none',
          }
      },
    }))


const Buscador = (props) =>{

    const  classes = estilos()
    

    return(
        <>
            < div>     
                <div className="Buscador " >
                        <input className="buscadortexto " type="text"/>
                <a className="buscadoricono" href=""></a>
                </div>
            </div>
        </>
    )
}

export default Buscador;