import React from 'react';

const Support = () => {
  return (
    <section className="support">
      {/* <!-- 고객센터 배너 시작 --> */}
      <h2 className="support__title nonVisible">고객센터</h2>
      <div className="support__descript">
        <span>우푸 서비스에 대한
        <br />
        궁금증을 해결해 드립니다.</span>
      </div>
      <div className="support__contact">
        <div>
          <span>1877-4166</span>
          <a href="/" title="카톡 문의하기">카톡 문의하기</a>
        </div>
        <p>평일 10:30 ~ 19:30</p>
      </div>
      {/* <!-- 고객센터 배너 끝 --> */}
    </section>
  );
};

export default Support;