import React from 'react';

const InputContents = ({ _class, _heading, _placeHolder }) => {
  return (
    <div className={_class}>
      <h4>{_heading}<strong>*</strong></h4>
      <input
        type="text"
        placeholder={_placeHolder}
      />
    </div>
  );
};

export default InputContents;