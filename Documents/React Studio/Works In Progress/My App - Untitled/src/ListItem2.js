import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ListItem2 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_button = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_button_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListItem2" style={baseStyle}>
        <div className="layoutFlow">
          <div className="flowRow flowRow_ListItem2_elButton">
          <div className='actionFont elButton' style={style_button_outer}>
            <Button style={style_button}  variant="raised" color="primary" >
              {this.props.locStrings.listitem2_button_200599}
            </Button>
          
          </div>
          
          </div>
        </div>
      </div>
    )
  }
  

}
