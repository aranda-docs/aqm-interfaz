import * as React from 'react'
import style from './style.css'

import { TreeView } from '@progress/kendo-react-treeview';

const tree = [{ 
    text: <div> <span className="sectiontext">Seleccione la versión sobre el que va realizar la consulta</span></div>
},{
text:
    <div className="icons"> <a className="text1" >Versión 8.0</a></div>, expanded: true, items: [
    { text:<div 
        className="content"><a className="text" href="">Aranda CMDB</a></div> },
    { text: <div className="content"><a className="text" href="">Aranda Device Management</a> </div>},
    { text: <div className="content"><a className="text" href="">Aranda Service Desk</a></div> }],
}, { 
text: <div className="icons1"> <a className="text2">Versión 9.0</a></div>, expanded: true, items: [
    { text: <div className="content"><a className="text" href="">Aranda 360</a></div> } ,
      { text: <div className="content"><a className="text" href="">Aranda CMDB</a></div>  },
      { text: <div className="content"><a className="text" href="">Aranda CMDB OLAP</a></div>  },
      { text: <div className="content"><a className="text" href="">Aranda Field Service</a></div> },
      { text: <div className="content"><a className="text" href="">Aranda Entreprise Mobile</a></div>  },
      { text: <div className="content"><a className="text" href="">Aranda Query Manager</a> </div> },
      { text: <div className="content"><a className="text" href="">Aranda Service Desk</a></div> },
      { text: <div className="content"><a className="text" href="">Aranda Service Desk OLAP</a></div>  }]
}];


class list extends React.Component {
    render() {
        return (
            <TreeView
                data={tree}
                expandIcons={true}
                onExpandChange={this.onExpandChange}
                aria-multiselectable={true}> 
                    
            </TreeView> 
           
        );
    }

    onExpandChange = (e) => {
       e.item.expanded = !e.item.expanded
    }
}

export default list