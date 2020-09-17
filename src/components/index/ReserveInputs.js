import React from 'react';
import styled from 'styled-components';

const InputsStyled = styled.input`
  border: 1px solid ${props => props.colors.grayLight};
  border-radius: 4px;
  padding: .5rem 1rem;
  width: 100%;
`;

const reserveInputDetails = [
  {
    id: 1,
    eng: 'address',
    kor: '주소',
    placeHolder: '서비스가 필요한 지역이 어디신가요?'
  },
  {
    id: 2,
    eng: 'date',
    kor: '날짜',
    placeHolder: '언제 서비스가 필요하신가요?'
  },
];


const ReserveInputs = ({ colors }) => {
  return (
    <>
      {reserveInputDetails.map(v => {
        return(
          <div
            key={v.id}
            className={`reserve__box__form__${v.eng}`}
          >
            <h3>
              {v.kor}
              <strong>*</strong>
            </h3>
            <InputsStyled
              colors={colors}
              type="text"
              placeholder={v.placeHolder}
            />
          </div>
        )
      })}
    </>
  );
};

export default ReserveInputs;