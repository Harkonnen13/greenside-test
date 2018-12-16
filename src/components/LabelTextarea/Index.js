import './Styles.less';
import '../../less/template.less';

import React from 'react';

const LabelTextarea = (props) => {
  const { className = '', errorMessage = '', disabled = false, children = 'Title'} = props;
  const inputProps = Object.assign({}, props);
  delete inputProps.children;
  delete inputProps.className;
  delete inputProps.errorMessage;
  
  return (
    <div className={`label-textarea ${className}`}>
      <label htmlFor={props.id} 
             className={`label-textarea__label ${disabled ? 'label-textarea__label_disabled' : ''}`}>
        {children}
      </label>
      <textarea className='label-textarea__input text-input' {...inputProps}/>
      <div className="label-textarea__error">
        {errorMessage}
      </div>
    </div>
  );
}

export default LabelTextarea;