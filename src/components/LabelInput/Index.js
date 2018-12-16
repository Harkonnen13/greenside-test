import './Styles.less';
import '../../less/template.less';

import React from 'react';

const LabelInput = (props) => {
  const { className = '', errorMessage = '', disabled = false, children = 'Title'} = props;
  const inputProps = Object.assign({}, props);
  delete inputProps.children;
  delete inputProps.className;
  delete inputProps.errorMessage;
  
  return (
    <div className={`label-input ${className}`}>
      <label htmlFor={props.id} 
             className={`label-input__label ${disabled ? 'label-input__label_disabled' : ''}`}
             disabled={disabled}>
        {children}
      </label>
      <input className='label-input__input  text-input' {...inputProps}/>
      <div className="label-input__error">
        {errorMessage}
      </div>
    </div>
  );
}

export default LabelInput;