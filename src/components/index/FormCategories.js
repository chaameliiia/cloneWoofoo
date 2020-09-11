import React from 'react';
import Labels from './ServicesLists';

const services = [
  {
    id: 1,
    class: "active",
    eng: "dogWalking",
    kor: "도그워킹",
    title: "",
  },
  {
    id: 2,
    class: "",
    eng: "doorToDoor",
    kor: "방문돌봄",
    title: "",
  },
  {
    id: 3,
    class: "nonActive",
    eng: "privateCare",
    kor: "펫시팅",
    title: "서비스 예정입니다.",
  },
  {
    id: 4,
    class: "nonActive",
    eng: "dayCare",
    kor: "데이케어",
    title: "서비스 예정입니다.",
  },
]

const ServiceCategories = () => {
  return (
    <ul>
      {services.map((v) => {
        return (
          <Labels
            key={v.id}
            _class={v.class}
            _eng={v.eng}
            _kor={v.kor}
            _title={v.title}
          />
        )
      })}
    </ul>
  );
};

const FormCategories = () => {
  return (
    <div
      className="reserve__box__form__category"
    >
      <h4>서비스<strong>*</strong></h4>
      <ServiceCategories />
    </div>
  );
};

export default FormCategories;