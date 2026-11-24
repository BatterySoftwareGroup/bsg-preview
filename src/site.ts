export const SITE = {
  name: 'BSG',
  fullName: 'Battery Software Group',
  fullNameKo: '', // 한글 정식 명칭 — 받으면 입력. 비우면 해당 줄 숨김
  department: 'Department of Energy Engineering', // 에너지공학부 (KENTECH 단일 학부)
  affiliation: 'KENTECH',
  affiliationFull: 'Korea Institute of Energy Technology',
  mission: 'Predicting batteries with physics and code.', // hero 한 문장 (00_baseline.md)
  tagline: 'Mathematical models for battery cells, packs, BMS algorithms, and energy systems.',
  // 홈 "About" 문단 (기존 PI 소개를 연구실 관점으로 고쳐 씀 — PI 확인 필요)
  about: 'We seek to understand the dynamics of energy systems and to optimize their physical designs and algorithms by building mathematical models. Our work spans electrode and material microstructures, battery cells, packs, and management algorithms, to techno-economic evaluations of energy systems, and we validate our models in our own battery testing lab.',
  address: 'Office 201, Research Building 1, KENTECH, 21 Kentech-gil, Naju-si, Jeonnam-Gwangju, Republic of Korea',
  addressKo: '전남광주통합특별시 나주시 켄텍길 21, 한국에너지공과대학교 연구 1동 201호',
  email: 'jsong@kentech.ac.kr',
  phone: '', // 없으면 숨김
  office: 'Research Building 1, Room 201',
  mapQuery: '한국에너지공과대학교', // Google 지도 검색어 (장소명이 좌표보다 정확)
  recruiting: 'We have multiple open positions for PhD students and Postdoctoral Fellows. If interested, please contact Prof. Song by email with a short CV and your research interests.',
  github: '', // 랩 GitHub 조직 주소 — 비우면 footer 링크 숨김
  // 홈 첫 사진 (SD Kang Lab식: 사진 + 설명 한 줄). public/home/ 아래, 가로 사진 권장.
  homePhoto: '/home/talk.jpg',
  homePhotoCaption: 'Prof. Song giving a talk at the BMS Symposium, 2026 Korean Battery Society Fall Meeting (Nov 6, 2026).',
  // true면 검색 엔진에 안 잡힘(프리뷰용). 정식 공개 때 false로.
  noindex: true,
};
