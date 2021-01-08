import react, {useState} from 'react';
import style from './style.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,ListItemIcon,ListItemText, Divider, Button, makeStyles} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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

const Listado =(props)=>{
    const  classes = estilos()
    
    return(
        <div className="container">
        <div className={classes.appbar}>   <div className="boton"> 
             <Button>
               <div className="boton"> 
                <Button className={classes.menuButton} color="primary" onClick={()=>props.accionAbrir()}> 
                        <ChevronLeftIcon className="buttonmenu" ></ChevronLeftIcon>
                </Button>
               </div>
            </Button>
             </div>
             </div>
          
          
            <List component='ul'>
          
                <div className="menu"> 
                <Divider/>
                <ListItem>
                       <ListItemIcon className="texto2"> Selecione la versíon Sobre el que va realizar la consulta</ListItemIcon>  
                       
                </ListItem>
              
                    <ListItem  button>
                        <ListItemIcon >
                            <ChevronRightIcon  color="primary"/>
                        </ListItemIcon>
                        <ListItemText className="texto bg-blue-500" color="primary" primary="Versíon 8.0"/>
                    </ListItem>
              
                    <div component='ul' className="contenido">
                        <ListItem  button>
                            <ListItemIcon  className="contenido1">
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText className="texto1" color="primary" secondary="Aranda CMDB"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1" />
                            </ListItemIcon>
                            <ListItemText className="texto1" color="primary" secondary="Aranda Device Management"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText className="texto1" color="primary" secondary="Aranda Service Desk"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText className="texto1" color="primary" secondary="Aranda Service Desk OLAP"/>
                        </ListItem>
                    </div>

                 
                    {/* segundo titulo */}
                    <ListItem  button>
                        <ListItemIcon >
                            <ChevronRightIcon  color="primary"/>
                        </ListItemIcon>
                        <ListItemText className="texto" color="primary" primary="Versíon 9.0"/>
                    </ListItem>

                    <div  component='li' className="contenido">
                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1" />
                            </ListItemIcon>
                            <ListItemText  className="texto1"  color="primary" secondary= "Aranda 360"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >     
                                <ChevronRightIcon  className="contenido1" />
                            </ListItemIcon>
                            <ListItemText  className="texto1"  color="primary" secondary="Aranda CMDB"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1" />
                            </ListItemIcon>
                            <ListItemText  className="texto1"  color="primary" secondary="Aranda CMDB OLAP"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText  className="texto1" color="primary" secondary="Aranda Field Service"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText  className="texto1" color="primary" secondary="Aranda Entreprise Mobile"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText  className="texto1" color="primary" secondary="Aranda Query manager"/>
                        </ListItem>
                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText  className="texto1" color="primary" secondary="Aranda Service Desk"/>
                        </ListItem>

                        <ListItem  button>
                            <ListItemIcon >
                                <ChevronRightIcon  className="contenido1"/>
                            </ListItemIcon>
                            <ListItemText  className="texto1" color="primary" secondary="Aranda Service Desk OLAP"/>
                        </ListItem>
                    </div>
                </div>
            </List>
        </div>
    )
}

export default Listado;