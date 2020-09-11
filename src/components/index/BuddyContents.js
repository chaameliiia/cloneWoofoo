import React from 'react';

const Lists = ({ details }) => {
  return (
   <li>
      <p>
        {details}
      </p>
    </li>
  );
};

const BuddyContents = () => {
  return (
    <ul className="introBuddy__contents">
      <Lists
        details="10단계로 진행되는<br />까다로운 선발 절차"
      />
      <li>
        <p>
          도그워킹, 방문돌봄 전문 교육 수료
          <br />
          3개의 버디 테스트 모두 통과
        </p>
      </li>
      <li>
        <p>
          3단계에 걸친
          <br />
          확실한 신원 인증
        </p>
      </li>
    </ul>
  );
};

export default BuddyContents;