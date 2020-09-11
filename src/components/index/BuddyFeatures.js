import React from 'react';

const featuresDetail = [
  {
    id: 1,
    firstLine: "10단계로 진행되는",
    secondLine: "까다로운 선발 절차",
  },
  {
    id: 2,
    firstLine: "도그워킹, 방문돌봄 전문 교육 수료",
    secondLine: "3개의 버디 테스트 모두 통과",
  },
  {
    id: 3,
    firstLine: "3단계에 걸친",
    secondLine: "확실한 신원 인증",
  },
];

const FeaturesLists = ({ _firstLine, _secondLine }) => {
  return (
   <li>
      <p>
        {_firstLine}
        <br />
        {_secondLine}
      </p>
    </li>
  );
};

const BuddyFeatures = () => {
  return (
    <ul className="introBuddy__contents">
      {featuresDetail.map(v => {
        return (
          <FeaturesLists
            key={v.id}
            _firstLine={v.firstLine}
            _secondLine={v.secondLine}
          />
        )
      })}
    </ul>
  );
};

export default BuddyFeatures;