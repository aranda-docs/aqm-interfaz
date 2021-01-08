import React from 'react';
import Oculto from '../Oculto/Oculto';
import {makeStyles,Drawer,Divider,Hidden} from '@material-ui/core';


const estilos = makeStyles(theme=>({
    drawer:{
        width: 240,
        flexShrink: 0,
    },
    drawerPaper:{
        width:290,
        Height:40,
        top:63
    },
    Toolbar: theme.mixins.toolbar,
  
}))


const Cajon=(props)=>{
    const classes = estilos()
 return(
     <div>
        <Drawer 
         className={classes.drawer}
         
         classes={{
             paper:classes.drawerPaper,
         }}
         anchor="left"
         variant={props.variant}
         open={props.open}
         onClose={props.onclose ? props.onclose : null}
         >   
             <div className={classes.toolbar}>
                <Oculto className="oculto"/>
             </div>
            
         </Drawer>

         


     </div>
 )
}
export default Cajon;