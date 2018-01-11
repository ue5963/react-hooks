import React, { Component } from 'react';
import './App.css';
import ListItem2 from './ListItem2';
import img_elImage from './images/ListItem1_elImage.jpg';


export default class ListItem1 extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
  
    const style_list = {
        overflow: 'hidden',  // This element is not in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData2').items);
    
    const style_image = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_textBlock = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_textBlock2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const dataSheet_listData2 = this.props.appActions.getDataSheet('listData2');
    
    return (
      <div className="ListItem1" style={baseStyle}>
        <div className="layoutFlow">
          <div className="flowRow flowRow_ListItem1_elList">
          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItem2 dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
          
          </div>
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
        </div>
        <div className="foreground">
          <div className='baseFont elTextBlock' style={style_textBlock}>
            <div>{this.props.locStrings.listitem1_textblock_110732}</div>
          </div>
          <div className='baseFont elTextBlock2' style={style_textBlock2}>
            <div>{this.props.locStrings.listitem1_textblock2_983025}</div>
          </div>
        </div>
      </div>
    )
  }
  

}
