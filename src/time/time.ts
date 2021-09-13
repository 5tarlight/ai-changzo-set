export const Subject = {
  COMMON_KOREAN: '공통 국어',
  SPEACH_WRITE: '화법과 작문',
  READING: '독서',
  LANG_AND_MEDIA: '언어와 매체',
  LITERATURE: '문학',
  PRACTICAL_KOREAN: '실용 국어',
  ADVANCED_KOREAN: '심화 국어',
  CLASSIC_READING: '고전 읽기',

  COMMON_MATH: '공통 수학',
  DIFF_INTEGRAL_CLAC: '미적분',
  PROBS_STATS: '확률과 통계',
  GEOMETRY: '기하',
  ECONOMY_MATH: '경제 수학',
  PRACTICAL_MATH: '실용 수학',

  ENGLISH: '영어',
  ENGLISH_CONVERS: '영어 회화',
  EGLISH_RW: '영어 독해와 작문',
  ENGLISH_CULTURE: '영어권 문화',
  EN_LITERATURE_READING: '영미문학읽기',
  VOCATIONAL_EN: '진로 영어',

  KOREAN_HISTORY: '한국사',
  COMMON_SOCIAL: '통합 사회',
  KOREAN_GEO: '한국지리',
  INTERNATIONAL_GEO: '세계지리',
  WORLD_HISTORY: '세계사',
  ECONOMICS: '경제',
  PLITICS_LAW: '정치와 법',
  SOCIAL_STUDIES_CULTURE: '사회, 문화',
  EVERYDAY_ETHICS: '생활과 윤리',
  ETHICAL_IDEOLOGY: '윤리와 사상',
  CLASSIC_ETHICS: '고전과 윤리',
  TRAVELING_GEO: '여행 지리',
  SOCIAL_ISSUE: '사회 문제 탐구',

  COMMON_SCIENCE: '통합 과학',
  SCIENTIFIC_RESEARCH: '과학 탐구 실험',
  PHYSICS: '물리',
  CHEMISTRY: '화학',
  BIOSCIENCE: '생명과학',
  GEOSCIENCE: '지구과학',
  FUSION_SCIENCE: '융합과학',
  SCIENCE_HISTORY: '과학사',
  LIFE_AND_SCIENCE: '생활과 과학',

  PHYSICAL_EDUCATION: '체육',
  EXERCISE_HEALTH: '운동과 건강',
  SPORTS_LIFE: '스포츠 생활',
  PHYSICAL_EDUCATION_RESEARCH: '체육 탐구',
  MUSIC: '음악',
  ART: '음악',
  PLAY: '연극',

  TECH_AND_HOME: '기술 가정',
  COMPUTER_INFORMATION: '정보',
  SECOND_FOREIGN_LANG: '제 2외국어',
  CHINESE_CHAR: '한문',

  isValid(name: string) {
    return Object.values(Subject).includes(name)
  },
}

export interface Time {
  subject: string
  startAt: string
  endAt: string
}

export interface TimeTable {
  MON: Time[]
  TUE: Time[]
  WED: Time[]
  THU: Time[]
  FRI: Time[]
}
