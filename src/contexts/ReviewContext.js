import React, { createContext } from 'react';

export const ReviewContext = createContext();

const Reviews = (props) => {
  const reviews =
  [
    [{
      id: 0,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 1,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 2,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
    [{
      id: 3,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 4,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 5,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
    [{
      id: 6,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 7,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 8,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
    [{
      id: 9,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 10,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 11,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
    [{
      id: 12,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 13,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 14,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
    [{
      id: 15,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 16,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 17,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
    [{
      id: 18,
      profilePic: require('../assets/img/index/review/img_reviewer1.jpg'),
      writer: '쿠미 보호자님',
      date: '오늘',
      descript: '감사합니다.',
    },
    {
      id: 19,
      profilePic: require('../assets/img/index/review/img_reviewer2.jpg'),
      writer: '조이 보호자님',
      date: '오늘',
      descript: '어쩔 때는 문앞에서 먼저 기다리는데 또 다른 때는 불러도 안간다고 누워만 있을 때가 있어요ㅜㅎ 나가서 잔디 밟으면 엄청 좋아하면서 말이에요! 오늘 너무 습하고 더운데 감사함니다~',
    },
    {
      id: 20,
      profilePic: require('../assets/img/index/review/img_reviewer3.jpg'),
      writer: '망고 보호자님',
      date: '1일 전',
      descript: '습하고 더운데 선생님이 고생많으셨어요. 다음주에 건강하게 뵙겠습니다~',
    }],
  ];

  return (
    <ReviewContext.Provider
      value={reviews}
    >
      {props.children}
    </ReviewContext.Provider>
  );
}

export default Reviews;