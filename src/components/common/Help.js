import React from 'react';

const Help = () => {
  return (
    <section
      className="help"
    >
      <h2 className="help__title nonVisible">고객센터</h2>
      <div className="help__descript">
        <span>우푸 서비스에 대한
        <br />
        궁금증을 해결해 드립니다.</span>
      </div>
      <div
        className="help__contact"
      >
        <div>
          <span>1877-4166</span>
          <a href="/" title="카톡 문의하기">카톡 문의하기</a>
        </div>
        <p>평일 10:30 ~ 19:30</p>
      </div>
    </section>
  );
};

export default Help;