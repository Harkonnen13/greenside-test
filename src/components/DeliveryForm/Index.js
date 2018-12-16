import './Styles.less';
import '../../less/template.less';

import React, { Component } from 'react';
import LabelInput from '../LabelInput';
import LabelTextarea from '../LabelTextarea';

class DeliveryForm extends Component {

  setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  mask = (e) => {
    var elem = e.currentTarget,
        matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = elem.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    elem.value = matrix.replace(/./g, (a) => 
    /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a);
    if (e.type === "blur") {
      if (elem.value.length === 2) 
        elem.value = "";
    }
    else 
      this.setCursorPosition(elem.value.length, elem);

    if(elem.value.length < 17)
      elem.setCustomValidity('Введите телефон');
    else
      elem.setCustomValidity('');
  }

  render(){
    return (
      <form className="df" action="/delivery" method="POST">
        <LabelInput id='fullName'
                    name="FullName"
                    className="df__label-input df_col-50"
                    placeholder="Только кириллица"
                    pattern='^[А-Яа-яЁё\s\-]+$'
                    required
                    errorMessage='Введите полное имя'>ФИО</LabelInput>
        <LabelInput id='tel'
                    className='df__label-input df_col-50'
                    name="Phone" 
                    placeholder="+7 (___) ___-__-__"
                    onInput={this.mask}
                    onFocus={this.mask}
                    onBlur={this.mask}
                    required
                    errorMessage='Введите телефон'>Телефон</LabelInput>
        <LabelInput id='address'
                    name="Address"
                    className="df__label-input"
                    placeholder="Город, улица, дом"
                    required
                    errorMessage='Введите адрес'>Адрес доставки</LabelInput>
        <LabelTextarea id='comment'
                       name="Comment"
                       className="df__label-textarea"
                       style={{height: 114}}>Комментарий</LabelTextarea>
        <div className="df__submit">
          <button type='submit' className="submit-btn">Отправить</button>
        </div>
      </form>
    )
  }
}

export default DeliveryForm;