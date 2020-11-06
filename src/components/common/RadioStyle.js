import React from 'react';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';

const icCheckStyle = {
  fontSize: '24px',
  marginRight: '.25rem',
};

const RadioStyle = ({ isChecked }) => {
  return (
    <>
      {
        isChecked ?
        <MdRadioButtonChecked style={icCheckStyle} /> :
        <MdRadioButtonUnchecked style={icCheckStyle} />
      }
    </>
  );
};

export default RadioStyle;