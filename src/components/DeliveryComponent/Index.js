import './Styles.less';
import React, { Component } from 'react';

class DeliveryComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedId: 0
    };
  }

  onItemClick(idx){
    if(this.state.selectedId !== idx)
      this.setState({selectedId: idx});
  }
  
  renderTab = (tab, idx) => {
    const selected = idx === this.state.selectedId;
    return (
      <li key={idx} className={`dc__tab ${selected ? 'dc__tab_selected' : ''}`} 
          onClick={this.onItemClick.bind(this, idx)}>
        <span className='dc__text'>{tab.title}</span>
      </li>
    );
  }

  renderContent = (tab, idx) => {
    const selected = idx === this.state.selectedId;
    return (
      <div className="dc__section" key={idx}>
        <div className={`dc__expander ${selected ? 'dc__expander_selected' : ''}`} 
             onClick={this.onItemClick.bind(this, idx)}>
          <span>{tab.title}</span>
          <div className='dc__arrow'/>
        </div>
        <div className={`dc__content ${selected ? '' : 'dc__content_hidden'}`} >
          {<tab.component selected={!selected} {...tab.props}/>}
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className="dc">
        <div className="dc__container">
          <div className="dc__title">Выберите способ доставки</div>
          <ul className="dc__tabs">
            {this.props.tabs.map(this.renderTab)}
          </ul>
          {this.props.tabs.map(this.renderContent)}
        </div>
      </div>
    )
  }
}

export default DeliveryComponent;