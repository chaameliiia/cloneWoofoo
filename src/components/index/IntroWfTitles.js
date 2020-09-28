import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorContext } from 'contexts/ColorContext';

const TitlesStyled = styled.ul`
  padding-bottom: 5rem;
  text-align: center;
  width: 100%;

  li {
    color: ${props => props.colors.grayDark};
    cursor: pointer;
    font-size: 20px;
    line-height: 1.25em;
    margin-right: 1.5rem;
    padding-bottom: .2em;
  
    &.active {
      border-bottom: 4px solid ${props => props.colors.greenLight};
      color: ${props => props.colors.black};
    }
  }
`;

const titlesList = [
  {
    id: 1,
    class: "active",
    descript: "전문 훈련사 출동 서비스",
  },
  {
    id: 2,
    class: "",
    descript: "반려동물 안전 보험",
  },
  {
    id: 3,
    class: "",
    descript: "안심존 케어",
  },
  {
    id: 4,
    class: "",
    descript: "라이브 트래킹",
  },
];

const IntroWfTitles = () => {
  const colors = useContext(ColorContext);
  
  return (
    <TitlesStyled colors={colors}>
      {titlesList.map(v => {
        return(
          <li
            key={v.id}
            colors={colors}
            className={v.class}
          >
            {v.descript}
          </li>
        )
      })}
    </TitlesStyled>
  );
};

export default IntroWfTitles;