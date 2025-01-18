type Plant = {
  name: string;
  lifecycle: '한해살이' | '다년생' | '두해살이';
  /* 인덱스 서명(signature) */
  [key: string]: string | number;
};

const plant: Plant = {
  name: '망고 나무',
  lifecycle: '다년생',
  family: '옻나무과', // 없는 속성이라 오류 발생
};

type Major = 'Phyiscs' | 'Engineering' | 'Mathemtaics';

type Tuition = Record<Major, { fee: number }>;

const tuition: Tuition = {
  Phyiscs: {
    fee: 5000,
  },
  Engineering: {
    fee: 10000,
  },
  Mathemtaics: {
    fee: 3000,
  },
};
