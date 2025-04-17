export const mockPosts = [
  {
    id: "1",
    title: "맥북 16인치 16기가 1테라 정도 사용이면 얼마에 팔아야 하나요?",
    content: "맥북 중고가격 궁금해요!",
    image: null,
    createdAt: "2024-04-16T12:00:00Z",
  },
  {
    id: "2",
    title: "에어팟 프로 얼마쯤 받을 수 있을까요?",
    content: "사용감 좀 있어요. 배터리도 바꿨어요.",
    image: null,
    createdAt: "2024-04-15T09:00:00Z",
  },
  {
    id: "3",
    title: "아이패드 9세대 64GB 중고 거래가 얼마인가요?",
    content: "화면에 약간 기스 있지만 기능 문제는 없습니다.",
    image: null,
    createdAt: "2024-04-14T17:20:00Z",
  },
  {
    id: "4",
    title: "중고 아이폰 13 미니 128GB 시세 문의합니다",
    content: "충전 사이클 80회 정도, 애플케어는 없습니다.",
    image: null,
    createdAt: "2024-04-13T14:10:00Z",
  },
  {
    id: "5",
    title: "노트북 스탠드 안 쓰는 거 팔고 싶은데 가격 적당선이요?",
    content: "알루미늄 재질이고 각도 조절됩니다.",
    image: null,
    createdAt: "2024-04-12T11:30:00Z",
  },
  {
    id: "6",
    title: "USB-C 허브 샀는데 필요 없어졌어요. 팔릴까요?",
    content: "썬더볼트3 지원되는 제품입니다.",
    image: null,
    createdAt: "2024-04-11T16:45:00Z",
  },
];

// 📁 src/lib/data.js 하단에 추가

export const mockComments = [
  {
    id: "c1",
    postId: "1",
    content: "사용기간은 얼마나 되셨나요?",
    nickname: "중립맨 판다",
    createdAt: "2024-04-16T13:00:00Z",
  },
  {
    id: "c2",
    postId: "1",
    content: "박스랑 충전기 포함인가요?",
    nickname: "알뜰한 토끼",
    createdAt: "2024-04-16T13:10:00Z",
  },
  {
    id: "c3",
    postId: "2",
    content: "배터리 교체는 어디서 하셨나요?",
    nickname: "기계덕후",
    createdAt: "2024-04-15T10:00:00Z",
  },
  {
    id: "c4",
    postId: "3",
    content: "화면 기스 심한가요?",
    nickname: "중립맨 판다",
    createdAt: "2024-04-14T18:00:00Z",
  },
  {
    id: "c5",
    postId: "4",
    content: "미니 모델이면 가볍고 좋죠~",
    nickname: "폰수집가",
    createdAt: "2024-04-13T15:00:00Z",
  },
  {
    id: "c6",
    postId: "5",
    content: "이거 각도 조절 잘 되나요?",
    nickname: "중립맨 판다",
    createdAt: "2024-04-12T12:00:00Z",
  },
  {
    id: "c7",
    postId: "6",
    content: "새 제품인가요? 개봉만 한 건가요?",
    nickname: "알뜰한 토끼",
    createdAt: "2024-04-11T18:00:00Z",
  },
  {
    id: "c8",
    postId: "6",
    content: "포트 종류는 몇 개인가요?",
    nickname: "전문가 부엉이",
    createdAt: "2024-04-11T18:30:00Z",
  },
];
