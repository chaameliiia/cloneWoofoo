import React from 'react';

const ServicesLists = ({ _class, _eng, _kor, _title }) => {
  return (
    <li
      className={_class}
      title={_title}
    >
      <input
        type="checkbox"
        id={_eng}
        name={_eng}
        value={_kor}
      />
      <label for={_eng}>{_kor}</label>
    </li>
  );
};

export default ServicesLists;