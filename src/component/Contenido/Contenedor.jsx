import react from 'react';
import  { Hidden, makeStyles,Button} from '@material-ui/core'
import Navbar from '../navbar/Navbar';
import Cajon from '../Cajon/Cajon';
import Buscador from '../buscador/Buscador';


const estilos = makeStyles(theme=> ({
  root:{
    display: 'flex'
  },
  Toolbar: theme.mixins.toolbar,
  content:{
    flexGrow:4,
    backgroundColor: theme.palette.default,
    padding: theme.spacing(8),  
  },

}))

const Contenedor = () => {
  const classes = estilos();

  const[abrir, setabrir] = react.useState(false)

  const accionAbrir = () =>{
    setabrir(!abrir)
  
  }

   return (
      <>
        <div className={classes.root}>
          <Navbar/> 
        
         < Hidden xsDown >
              <Cajon 
              variant="permanent"
              open={abrir}
              />
         </Hidden>    
         < Hidden smUp >
              <Cajon 
              variant="temporary"
              open={abrir}
              onClose={accionAbrir}
              // 
              />
         </Hidden>   
         <Buscador/>
          <div className={classes.content}>
            <div className={classes.Toolbar}>
              
            </div>
           contenido 
           <Button  onClick={()=>accionAbrir()}> </Button>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa molestias provident facere, est ea repellat cumque quas ut quis saepe odit sunt, perferendis libero dicta magnam impedit distinctio consequuntur laboriosam.</p>
          </div>
        </div>
      </>
   )
}
export default Contenedor ;