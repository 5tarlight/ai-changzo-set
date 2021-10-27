import { TimeTable } from './times'
import Subject from './Subject'

const HYUH: TimeTable[][] = [
  [
    // 1st grade
    {
      // 1
      MON: [
        Subject.KOREAN_HISTORY,
        Subject.ENGLISH,
        Subject.COMMON_KOREAN,
        Subject.COMMON_SOCIAL,
        Subject.COMMON_MATH,
        Subject.SCIENTIFIC_RESEARCH,
      ],
      TUE: [Subject.COMMON_KOREAN],
      WED: [Subject.COMMON_KOREAN],
      THU: [Subject.COMMON_KOREAN],
      FRI: [Subject.COMMON_KOREAN],
    },
    {
      // 2
      MON: [Subject.COMMON_KOREAN],
      TUE: [Subject.COMMON_KOREAN],
      WED: [Subject.COMMON_KOREAN],
      THU: [Subject.COMMON_KOREAN],
      FRI: [Subject.COMMON_KOREAN],
    },
    {
      // 3
      MON: [
        Subject.ART,
        Subject.COMMON_SOCIAL,
        Subject.COMMON_MATH,
        Subject.COMMON_SCIENCE,
        Subject.COMMON_KOREAN,
        Subject.COMPUTER_INFORMATION,
      ],
      TUE: [
        Subject.COMMON_KOREAN,
        Subject.ART,
        Subject.COMMON_SOCIAL,
        Subject.KOREAN_HISTORY,
        Subject.SCIENTIFIC_RESEARCH,
        Subject.CREATIVE_EXP,
        Subject.ENGLISH,
      ],
      WED: [
        Subject.COMMON_MATH,
        Subject.COMMON_KOREAN,
        Subject.CAREER,
        Subject.ENGLISH,
        Subject.COMMON_SCIENCE,
        Subject.SELF_GOVERN,
        Subject.CA,
      ],
      THU: [
        Subject.COMMON_SOCIAL,
        Subject.COMMON_MATH,
        Subject.COMMON_KOREAN,
        Subject.KOREAN_HISTORY,
        Subject.ENGLISH,
        Subject.PHYSICAL_EDUCATION,
        Subject.COMMON_SCIENCE,
      ],
      FRI: [
        Subject.COMMON_SOCIAL,
        Subject.DANCE,
        Subject.COMMON_SCIENCE,
        Subject.COMMON_MATH,
        Subject.ART,
        Subject.KOREAN_HISTORY,
        Subject.ENGLISH,
      ],
    },
    {
      // 4
      MON: [
        Subject.COMMON_SCIENCE,
        Subject.COMMON_KOREAN,
        Subject.CREATIVE_EXP,
        Subject.LUNCH,
        Subject.ART,
        Subject.ENGLISH,
      ],
      TUE: [
        Subject.COMMON_SCIENCE,
        Subject.ENGLISH,
        Subject.COMMON_KOREAN,
        Subject.COMMON_SOCIAL,
        Subject.COMMON_MATH,
        Subject.KOREAN_HISTORY,
        Subject.COMPUTER_INFORMATION,
      ],
      WED: [
        Subject.COMMON_KOREAN,
        Subject.PHYSICAL_EDUCATION,
        Subject.KOREAN_HISTORY,
        Subject.COMMON_SOCIAL,
        Subject.COMMON_MATH,
        Subject.SELF_GOVERN,
        Subject.SELF_GOVERN,
      ],
      THU: [
        Subject.KOREAN_HISTORY,
        Subject.ART,
        Subject.ENGLISH,
        Subject.COMMON_SOCIAL,
        Subject.CAREER,
        Subject.COMMON_MATH,
        Subject.SCIENTIFIC_RESEARCH,
      ],
      FRI: [
        Subject.COMMON_MATH,
        Subject.COMMON_KOREAN,
        Subject.ENGLISH,
        Subject.COMMON_SCIENCE,
        Subject.COMMON_SOCIAL,
        Subject.ART,
        Subject.COMMON_SCIENCE,
      ],
    },
  ],
  // [
  //   // 2nd grade
  // ],
  // [
  //   // 3rd grade
  // ],
]

export default HYUH
