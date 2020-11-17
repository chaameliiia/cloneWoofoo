import React, { createContext } from 'react';

export const ReviewContext = createContext();

const Reviews = props => {
  const reviews = [
    [
      {
        id: 0,
        profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
        writer: '쿠미 보호자님',
        date: '3시간 전',
        descript: '감사합니다.',
      },
      {
        id: 1,
        profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
        writer: '조이 보호자님',
        date: '3시간 전',
        descript:
          '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습한데 감사함니다~',
      },
      {
        id: 2,
        profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
        writer: '망고 보호자님',
        date: '5시간 전',
        descript:
          '습한데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
      },
    ],
    [
      {
        id: 3,
        profilePic: require('../assets/img/index/review/img_reviewer4.jpg'),
        writer: '영이 보호자님',
        date: '5시간 전',
        descript: '저희 강아지 산책을 알아서 잘해주셔서 너무 좋습니다^^',
      },
      {
        id: 4,
        profilePic: require('../assets/img/index/review/img_reviewer5.jpg'),
        writer: '진구 보호자님',
        date: '오늘',
        descript:
          '항상 믿고 맡기는 펫시터님이에요♡ 출장이나 여행갈때면 정말 큰 힘이 됩니다. 찡이도 너무너무 편하게 생각하고 세심하게 챙겨주셔서 이번에도 정말 감동이었어요 ㅠㅠ 다시한번 감사드립니다:)',
      },
      {
        id: 5,
        profilePic: require('../assets/img/index/review/img_reviewer6.jpg'),
        writer: '세나 보호자님',
        date: '오늘',
        descript:
          '늘 믿고 맡길수있어서 좋아요! 이사를가게되서 이젠 못뵐것같지만 ㅠㅠ 그동안 감사했습니다!',
      },
    ],
    [
      {
        id: 6,
        profilePic: require('../assets/img/index/review/img_reviewer7.jpg'),
        writer: '경수 보호자님',
        date: '오늘',
        descript:
          '항상 감사드려용!! 세마리라 정신없을텐데 애기들이뻐해주시구 감사해용>_<',
      },
      {
        id: 7,
        profilePic: require('../assets/img/index/review/img_reviewer8.jpg'),
        writer: '뻥봉이 보호자님',
        date: '오늘',
        descript:
          '으앗 시터님께서 오늘 정말 많이 고생하셨네요!!😭비오는날 뻥봉이 데리구 나갔다와주시구.. 정수기까지 ㅠㅠ 너무 감사합니다😭♥️ 원래 그 장난감은 뻥봉이가 잘안갖고 놀아서 ㅠㅠ묵혀뒀던건데 오늘 가지고놀았다니 넘 신기하네요!!!!👍👍♥️오늘도 넘넘 감사합니다♥️♥️♥️♥️♥️',
      },
      {
        id: 8,
        profilePic: require('../assets/img/index/review/img_reviewer9.jpg'),
        writer: '체다 보호자님',
        date: '오늘',
        descript:
          '꼼꼼히 아이들 잘 봐주셔서 넘 감사해요😀 그 사이에 집에 환묘가 와서 집 오래 비우는게 너무 신경 쓰였는데, 이젠 혹시 일 생기면 펫시터님께 부탁드리고 맘 편히 다녀올 수 있겠네요ㅎㅎ 매번 애들 예뻐해주셔서 감사합니다!!',
      },
    ],
    [
      {
        id: 9,
        profilePic: require('../assets/img/index/review/img_reviewer10.jpg'),
        writer: '라온라라 보호자님',
        date: '오늘',
        descript:
          '오늘 날씨가 생각보다 겨울치고 덥더라구요 괜히 옷 입혓나 싶기도사고 그리고ㅠ비가 잠깐쏟아진거같았는데 그전에 산책해서 다행이예요 ㅎㅎ',
      },
      {
        id: 10,
        profilePic: require('../assets/img/index/review/img_reviewer11.jpg'),
        writer: '호두 보호자님',
        date: '1일 전',
        descript:
          '그릇 세척 안 하셔도 되는데 굳이 그렇게까지...! 호두가 하네스 하는 걸 싫어해서 어려우셨을 것 같아요ㅠㅠ 하는 건 싫어하는데 하고 나서는 얼른 나가자고 보챈답니다 ㅋㅋ 정말 애쓰셨습니다...! 가시기 전에 노즈워크 만들어 놓고 가셨다는 것에 또 감동했어요..🙏🏻',
      },
      {
        id: 11,
        profilePic: require('../assets/img/index/review/img_reviewer12.jpg'),
        writer: '장금이 보호자님',
        date: '1일 전',
        descript:
          '항상 정성 가득한 라이브 카드 읽으면서 너무 감동받아요 ㅠㅠ 언제나 저희집 와주셔서 감사하고 다음에도 와주시면 좋겠어요 오늘도 너무 감사했습니다!',
      },
    ],
    [
      {
        id: 12,
        profilePic: require('../assets/img/index/review/img_reviewer13.jpg'),
        writer: '통쿠 보호자님',
        date: '1일 전',
        descript:
          '오늘도 너무 감사합니다~ 우리 애기랑 쉬지않고 놀아주시고~~ 애기가 집사인 저보다 시터님을 좋아하는 이유가 다 있는 거 같아요~ 다른 것들도 너무 잘 챙겨주시고 늘 감사드립니당~~',
      },
      {
        id: 13,
        profilePic: require('../assets/img/index/review/img_reviewer14.jpg'),
        writer: '도비 보호자님',
        date: '1일 전',
        descript: '매번 도비 잘 돌봐주셔서 감사합니다 🙇🏻‍♀️',
      },
      {
        id: 14,
        profilePic: require('../assets/img/index/review/img_reviewer15.jpg'),
        writer: '뻥봉이 보호자님',
        date: '1일 전',
        descript:
          '마지막에 문 빼꼼 열고 찍어주신 사진이 너무 귀여워요 ㅠㅠ 매번 노즈워크도 해주시고 😭항상 감사합니다♥️♥️예쁜 사진들도 넘넘 감사드려요~~♥️',
      },
    ],
    [
      {
        id: 15,
        profilePic: require('../assets/img/index/review/img_reviewer16.jpg'),
        writer: '폴이 보호자님',
        date: '1일 전',
        descript: '오늘도 우리 폴이 너무 좋아하네요 감사합니다',
      },
      {
        id: 16,
        profilePic: require('../assets/img/index/review/img_reviewer17.jpg'),
        writer: '동서즈 보호자님',
        date: '2일 전',
        descript:
          '저번에 한번 오셨었는데 목소리 솔톤으로 친절하게 잘 돌봐주셔서 이번에도 신청했어요❤ 역시나 처음부터 끝까지 잘 챙거주시더라구요 서로가 가끔 물기도 해서 걱정했는데 적절한 타이밍으로 잘 케어해주셔서 넘나 감사했어요! 이번주 목요일도 잘 부탁드립니다',
      },
      {
        id: 17,
        profilePic: require('../assets/img/index/review/img_reviewer18.jpg'),
        writer: '패딩이 보호자님',
        date: '2일 전',
        descript:
          '영상보는데 ㅋㅋㅋ패딩이 공보고 짖구 난리난리 ㅋㅋㅋ씐나게 놀아주셔서 넘감사해요! 사진도 다 너무 귀엽고 ~ 마무리까지 넘넘 감사합니다!',
      },
    ],
  ];

  return (
    <ReviewContext.Provider value={reviews}>
      {props.children}
    </ReviewContext.Provider>
  );
};

export default Reviews;