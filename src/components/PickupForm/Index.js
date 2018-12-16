import './Styles.less';
import '../../less/template.less';
import '../../img/mark.png';

import React, { Component } from 'react';
import RadioButton from '../RadioButton/Index';


class PickupForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      normalized: false
    };

    ymaps.ready(() => {
      this.collection = new ymaps.GeoObjectCollection({},{
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38]
      });

      for (let point of this.props.points) {
        this.collection.add(new ymaps.Placemark(point.coord));
      }
      
      // Указывается идентификатор HTML-элемента.
      this.map = new ymaps.Map("pickup-delivery-map", {
        center: [55.753215, 37.622504],
        zoom: 10
      });
      this.map.behaviors.disable('drag');
      this.map.geoObjects.add(this.collection);
    });
  }

  componentDidUpdate(){
    if(!this.state.normalized){
      setInterval(() => {
        const centerAndZoom = ymaps.util.bounds.getCenterAndZoom(
          this.collection.getBounds(),
          this.map.container.getSize()
        );
        this.map.setCenter(
          centerAndZoom.center,
          centerAndZoom.zoom
        );
      }, 500);
      this.setState({normalized: true});
    }
  }

  renderCheckbox(point, idx){
    const id = `point-${idx}`;
    return(
      <div key={point.id} className="pf__radio-btn-container pf_col-50">
        <RadioButton id={id}
                     defaultChecked={idx===0}
                     name="pointId"
                     type='radio'
                     value={point.id}
                     className='pf__radio-btn'>
          {point.name}
        </RadioButton>
      </div>
    )
  }

  render(){
    return (
      <form className="pf" action="/delivery" noValidate method="POST">
        {this.props.points.map(this.renderCheckbox)}
        <div id='pickup-delivery-map' className='pf__map-container'/>
        <div className="pf__submit-btn-container">
          <button type="submit" className="submit-btn">Отправить</button>
        </div>
      </form>
    )
  }
}

export default PickupForm;