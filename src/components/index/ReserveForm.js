import React from 'react';
import styled from 'styled-components';
import ReserveCategory from './ReserveCategory';
import ReserveInputs from './ReserveInputs';

const ReserveFormStyled = styled.form`
  width: 100%;
        
  h3 {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  > div {
    margin-bottom: 1rem;
    width: 100%;

    strong {
      color: ${props => props.colors.pointColor};
    }
  }

  input[type=submit] {
    background: ${props => props.colors.greenDark};
    border-radius: 4px;
    color: ${props => props.colors.white};
    margin-top: 1rem;
    padding: .5rem 0;
    width: 100%;

    &:hover {
      background: ${props => props.colors.greenLight};
    }

    &:active {
      background: ${props => props.colors.greenDark};
    }
  }
`;

const ReserveForm = ({ colors, onClick }) => {
  return (
     <ReserveFormStyled
        action="/"
        method="post"
        colors={colors}
        id="reservation"
        onSubmit={onClick}
      >
        <ReserveCategory
          colors={colors}
          className="reserve__box__form__category"
        />
        <ReserveInputs colors={colors} />
        <input
          type="submit"
          value="우리집 근처 버디 조회"
        />
      </ReserveFormStyled>
  );
};

export default ReserveForm;