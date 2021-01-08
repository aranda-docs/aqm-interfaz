import React from 'react';
import {withWidth, hidden, Hidden} from '@material-ui/core';
import Listado from '../Listado/Listado';

const Oculto = (props) =>{
    return(
        
        <Hidden xs>
            <Listado/>
        </Hidden>
    )
}
export default Oculto;