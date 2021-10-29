import { isValidSchool } from '../shcool/School'
import HYUH from './HYUH'

// export const Subject = {
//   COMMON_KOREAN: '공통 국어',
//   SPEACH_WRITE: '화법과 작문',
//   READING: '독서',
//   LANG_AND_MEDIA: '언어와 매체',
//   LITERATURE: '문학',
//   PRACTICAL_KOREAN: '실용 국어',
//   ADVANCED_KOREAN: '심화 국어',
//   CLASSIC_READING: '고전 읽기',
//
//   COMMON_MATH: '공통 수학',
//   DIFF_INTEGRAL_CLAC: '미적분',
//   PROBS_STATS: '확률과 통계',
//   GEOMETRY: '기하',
//   ECONOMY_MATH: '경제 수학',
//   PRACTICAL_MATH: '실용 수학',
//
//   ENGLISH: '영어',
//   ENGLISH_CONVERS: '영어 회화',
//   EGLISH_RW: '영어 독해와 작문',
//   ENGLISH_CULTURE: '영어권 문화',
//   EN_LITERATURE_READING: '영미문학읽기',
//   VOCATIONAL_EN: '진로 영어',
//
//   KOREAN_HISTORY: '한국사',
//   COMMON_SOCIAL: '통합 사회',
//   KOREAN_GEO: '한국지리',
//   INTERNATIONAL_GEO: '세계지리',
//   WORLD_HISTORY: '세계사',
//   ECONOMICS: '경제',
//   PLITICS_LAW: '정치와 법',
//   SOCIAL_STUDIES_CULTURE: '사회, 문화',
//   EVERYDAY_ETHICS: '생활과 윤리',
//   ETHICAL_IDEOLOGY: '윤리와 사상',
//   CLASSIC_ETHICS: '고전과 윤리',
//   TRAVELING_GEO: '여행 지리',
//   SOCIAL_ISSUE: '사회 문제 탐구',
//
//   COMMON_SCIENCE: '통합 과학',
//   SCIENTIFIC_RESEARCH: '과학 탐구 실험',
//   PHYSICS: '물리',
//   CHEMISTRY: '화학',
//   BIOSCIENCE: '생명과학',
//   GEOSCIENCE: '지구과학',
//   FUSION_SCIENCE: '융합과학',
//   SCIENCE_HISTORY: '과학사',
//   LIFE_AND_SCIENCE: '생활과 과학',
//
//   PHYSICAL_EDUCATION: '체육',
//   EXERCISE_HEALTH: '운동과 건강',
//   SPORTS_LIFE: '스포츠 생활',
//   PHYSICAL_EDUCATION_RESEARCH: '체육 탐구',
//   MUSIC: '음악',
//   ART: '음악',
//   PLAY: '연극',
//
//   TECH_AND_HOME: '기술 가정',
//   COMPUTER_INFORMATION: '정보',
//   SECOND_FOREIGN_LANG: '제 2외국어',
//   CHINESE_CHAR: '한문',
//   CREATIVE_EXP: '창체',
//   SELF_GOVERN: '자치',
//   CAREER: '진로',
//
//   LUNCH: '점심',
//
//   isValid(name: string) {
//     return Object.values(Subject).includes(name)
//   },
// }

export interface Times {
  subject: string
  startAt: string
  endAt: string
}

export interface TimeTable {
  MON: string[]
  TUE: string[]
  WED: string[]
  THU: string[]
  FRI: string[]
}

export const getSchoolTimeTable = (school: string): TimeTable[][] | null => {
  if (!isValidSchool(school)) return null

  switch (school) {
    case 'HYUH':
      return HYUH

    default:
      return null
  }
}

export const getToday = () => {
  const day = new Date().getDay()
  return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][day - 1]
}

export const getTodayKo = () => {
  const day = new Date().getDay()
  return ['일', '월', '화', '수', '목', '금', '토'][day]
  // return ['월', '화', '수', '목', '금', '토', '일'][day - 1]
}

export const getTodayTime = (table: TimeTable) => {
  const day = getToday()

  switch (day) {
    case 'MON':
      return table.MON
    case 'TUE':
      return table.TUE
    case 'WED':
      return table.WED
    case 'THU':
      return table.THU
    case 'FRI':
      return table.FRI

    default:
      return null
  }
}

export const getZoomLink = (subject: string, type: number = 0) => {
  const zoom =
    'https://us05web.zoom.us/j/9733198448?pwd=cXh3V2tsTllmZW44RTk0bDNDZWRhQT09'
  // TODO : Real Link
  return zoom
}
