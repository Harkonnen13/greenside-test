import './index.less';

import React from 'react';
import { render } from 'react-dom';

import DeliveryComponent from './components/DeliveryComponent';
import DeliveryForm from './components/DeliveryForm';
import PickupForm from './components/PickupForm';

const tabs = [
  { title: 'Доставка', component: DeliveryForm, props: {} },
  { 
    title: 'Самовывоз', 
    component: PickupForm, 
    props: { 
      points: [
        { id: 0, name:'Пункт выдачи заказов Песчаная улица, дом 13', coord: [55.801131, 37.508167] },
        { id: 1, name:'Пункт выдачи заказов Подсосенный переулок, 11', coord: [55.757556, 37.651592] },
        { id: 2, name:'Пункт выдачи заказов Зеленоград корп. 1131', coord: [55.992296, 37.169583] },
      ]
    }
  }
];

render(
  <DeliveryComponent tabs={tabs}/>
, document.getElementById("root"));