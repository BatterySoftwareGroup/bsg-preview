export const SITE = {
  name: 'BSG',
  fullName: 'Battery Software Group',
  fullNameKo: '', // 한글 정식 명칭 — 받으면 입력. 비우면 해당 줄 숨김
  department: 'Department of Energy Engineering', // 에너지공학부 (KENTECH 단일 학부)
  affiliation: 'KENTECH',
  affiliationFull: 'Korea Institute of Energy Technology',
  affiliationUrl: 'https://www.kentech.ac.kr/', // 학교 로고 클릭 시 이동
  mission: 'Predicting batteries with physics and code.', // hero 한 문장 (00_baseline.md)
  tagline: 'Mathematical models for battery cells, packs, BMS algorithms, and energy systems.',
  // 홈 "About" 문단 (기존 PI 소개를 연구실 관점으로 고쳐 씀 — PI 확인 필요)
  about: 'We seek to understand the dynamics of energy systems and to optimize their physical designs and algorithms by building mathematical models. Our work spans electrode and material microstructures, battery cells, packs, and management algorithms, to techno-economic evaluations of energy systems, and we validate our models in our own battery testing lab.',
  address: 'Office 206, Research Building 1, KENTECH, 21 Kentech-gil, Naju-si, Jeonnam-Gwangju, Republic of Korea',
  addressKo: '전남광주통합특별시 나주시 켄텍길 21, 한국에너지공과대학교 연구 1동 206호',
  email: 'jsong@kentech.ac.kr',
  phone: '', // 없으면 숨김
  office: 'Research Building 1, Room 206',
  mapQuery: '한국에너지공과대학교', // Google 지도 검색어 (장소명이 좌표보다 정확)
  recruiting: 'We have multiple open positions for PhD students and Postdoctoral Fellows. If interested, please contact Prof. Song by email with a short CV and your research interests.',
  github: '', // 랩 GitHub 조직 주소 — 비우면 footer 링크 숨김
  // 학교 로고: public/logo/kentech.svg(또는 .png)을 넣고 경로를 적으면 헤더·footer에 표시됩니다. 비우면 숨김.
  partnerLogo: '/logo/kentech.png',
  // 첫 화면(hero) 배경. heroVideo(mp4, 무음)가 있으면 영상(데스크톱에서만) → 없으면 heroImage → 둘 다 비면 코드 애니메이션. public/hero/ 아래.
  heroImage: '', // 영상의 poster로도 쓰임. 예: '/hero/hero.jpg'
  heroVideo: '',
  // true면 검색 엔진에 안 잡힘(프리뷰용). 정식 공개 때 false로.
  noindex: true,
};
