import * as React from 'react';
import  List from '../List/List';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import Buscador  from '../buscador/Buscador';
import './styles.css';


const items = [
    { text:<List  expandIcons={true}/>},
   
];

const Tem = () => {
    const [ expanded, setExpanded] = React.useState(true);
    const [selectedId, setSelectedId] = React.useState(items.findIndex(x => x.selected === true));
    const handleClick = () => { setExpanded(prevState => !prevState);   
};


    return (
        <div>
            <Drawer
                expanded={expanded}
                position={'start'}
                mode={'push'}
                mini={true}
                items={items.map(
                    (item, index) => ({ ...item, selected: index === selectedId }))}
            >        
                <DrawerContent className="DrawerContent">   
                  <Buscador/> 
                 
                    <button className="k-button2" onClick={handleClick}>
                        {expanded&& <button className="k-button"></button>}    
                     </button>
                    <div className="footer"></div>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Tem;