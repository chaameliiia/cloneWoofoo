import React from 'react';
import styled from 'styled-components';

const TitlesStyled = styled.ul`
  padding-bottom: 5rem;
  text-align: center;
  width: 100%;

  li {
    ${'' /* color: ${props => props.colors.grayDark}; */}
    cursor: pointer;
    font-size: 20px;
    line-height: 1.25em;
    margin-right: 1.5rem;
    padding-bottom: .2em;
  
    &.active {
      border-bottom: 4px solid ${props => props.colors.greenLight};
      color: $black;
    }
  }
`;

const titlesList = [
  {
    id: 1,
    class: "active",
    contents: "전문 훈련사 출동 서비스",
  },
  {
    id: 2,
    class: "",
    contents: "반려동물 안전 보험",
  },
  {
    id: 3,
    class: "",
    contents: "안심존 케어",
  },
  {
    id: 4,
    class: "",
    contents: "라이브 트래킹",
  },
];

const Title = ({ _class, _contents, colors }) => {
  return (
    <li
      colors={colors}
      className={_class}
    >
      {_contents}
    </li>
  );
};

const IntroWfTitles = ({ colors }) => {
  return (
    <TitlesStyled
      colors={colors}
      className="introWoofoo__category"
    >
      {titlesList.map(v => {
        return(
          <Title
            key={v.id}
            _class={v.class}
            _contents={v.contents}
            colors={colors}
          />
        )
      })}
    </TitlesStyled>
  );
};

export default IntroWfTitles;