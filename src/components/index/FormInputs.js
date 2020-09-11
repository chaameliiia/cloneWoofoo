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

const FormInputs = () => {
  return (
    <>
      <InputContents
        _class="reserve__box__form__address"
        _heading="주소"
        _placeHolder="서비스가 필요한 지역이 어디신가요?"
      />
      <InputContents
        _class="reserve__box__form__date"
        _heading="날짜"
        _placeHolder="언제 서비스가 필요하신가요?"
      />
    </>
  );
};

export default FormInputs;