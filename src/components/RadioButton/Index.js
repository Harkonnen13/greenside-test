import './Styles.less';
import React from 'react';

const RadioButton = (props) => {
  const { className = '', children = ''} = props;
  const inputProps = Object.assign({}, props);
  delete inputProps.children;
  delete inputProps.className;
  delete inputProps.errorMessage;
  
  return (
    <div className={`radio-button ${className}`}>
      <input type="radio" className="radio-button__input" id={props.id} {...inputProps}/>
      <label className="radio-button__label" htmlFor={props.id}>
        <div className="radio-button__circle"></div>
        {children}
      </label>
    </div>
  );
}



export default RadioButton;