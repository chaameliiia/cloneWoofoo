import React from 'react';

const Aside = () => {
  return (
    <aside
      className="quickMenu"
      // className="quickMenu hover"
    >
      {/* <!-- 퀵메뉴 시작 --> */}
      <ul className="quickMenu__box">
        <li><button type="button">앱 다운로드</button></li>
        <li><button type="button">버디 지원</button></li>
        <li><button type="button">카톡 상담</button></li>
        <li><button type="button">위로 가기</button></li>
      </ul>
      {/* <!-- 퀵메뉴 끝 --> */}
    </aside>
  );
};

export default Aside;