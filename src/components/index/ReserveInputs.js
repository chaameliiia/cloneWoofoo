import React from 'react';
import styled from 'styled-components';

const InputsStyled = styled.input`
  border: 1px solid ${props => props.colors.grayLight};
  border-radius: 4px;
  padding: .5rem 1rem;
  width: 100%;
`;

const InputContents = ({ colors, _class, _heading, _placeHolder }) => {
  return (
    <div className={_class}>
      <h4>
        {_heading}<strong>*</strong>
      </h4>
      <InputsStyled
        colors={colors}
        type="text"
        placeholder={_placeHolder}
      />
    </div>
  );
};

const ReserveInputs = ({ colors }) => {
  return (
    <>
      <InputContents
        colors={colors}
        _class="reserve__box__form__address"
        _heading="주소"
        _placeHolder="서비스가 필요한 지역이 어디신가요?"
      />
      <InputContents
        colors={colors}
        _class="reserve__box__form__date"
        _heading="날짜"
        _placeHolder="언제 서비스가 필요하신가요?"
      />
    </>
  );
};

export default ReserveInputs;