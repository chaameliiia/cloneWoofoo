import React from 'react';
import InputContents from './InputContents';

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