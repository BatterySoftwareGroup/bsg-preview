# 최종 검토 및 예상 피드백 (2026-10-29, 기존 사이트 이관 후)

## 현재 상태
- 27페이지 빌드 통과. 기존 Google Sites 콘텐츠 이관: PI 1, 구성원 10, Alumni 5, 논문 20(저널 17·학회 2·북챕터 1), 연구 분야 3, News 14, 과제 8, 갤러리 22.
- 디자인 2차: 스크롤 리빌(카드 순차 등장, 접근성 설정 시 꺼짐), hero 영상 슬롯(데스크톱만 로딩), News 카테고리 태그.
- 미확인: Google 지도 iframe(앱 브라우저 차단), 실제 GitHub Pages 배포, BibTeX 실제 클릭.

## 사용자가 채워야 하는 것 (★ = YAML 한 줄)
| # | 항목 | 어디 |
|---|---|---|
| 1 | 랩 한글 명칭, 소속 학과 | `site.ts` ★ |
| 2 | 교수·구성원 한글 이름 16명 | `members.yaml` `name_ko` ★ |
| 3 | 교수 전화·수상·ORCID·CV | `professor.yaml` ★ |
| 4 | 관심사 없는 4명 (Jueun, Yongjin, Seojun, Minseong) | `members.yaml` ★ |
| 5 | Alumni 5명 현 소속 | `members.yaml` `current` ★ |
| 6 | 과제 종료일·정식 과제명, 공개 범위 | `projects.yaml` ★ (PI 확인) |
| 7 | 논문 교신저자 `*`, Highlights 5편 확정 | `publications.yaml` ★ (PI 확인) |
| 8 | 랩 GitHub 주소 | `site.ts` ★ |
| 9 | 학교 로고 파일 | `public/logo/kentech.svg` → `partnerLogo` |
| 10 | hero 영상 (규격: CONTENT_GUIDE §1-1) | `public/hero/hero.mp4` → `heroVideo` |
| 11 | Research 이미지 3장 (docs/IMAGE_PROMPTS.md) | `public/research/` |
| 12 | 새 구성원 사진 (기존 사진 품질 제각각) | `public/members/<id>.jpg` |

## 이관하면서 발견한 불일치 (PI 확인 필요)
- Woojin Song 재학 기간: Alumni 페이지 "2023–2025" vs News "2022.10 입학" → 2022.10–2025.02로 넣음.
- KOTI MOU 날짜: News 2023.05.14 vs Gallery 2023.05.09 → 각자 원문 유지.
- 주소: 푸터 "Jeollanam-do" vs Location "Jeonnam-Gwangju / 전남광주통합특별시" → Location 기준.
- 논문 #18(ACS Appl. Polym. Mater.)·#19(EES Batteries) 권/페이지 없음 → 출판 확정 후 보완.
- 2023.09 LGES·2022.12 현대차 과제는 2025.03에 재수주된 것으로 보고 `completed` 처리 — 틀리면 `ongoing`으로.

## 예상 피드백 (디자인·기능)
| # | 예상 피드백 | 대응 | 난이도 |
|---|---|---|---|
| 13 | "첫 화면 배경이 임시 그래픽" | 영상/사진 교체 (사용자) | ★ |
| 14 | "스크롤 애니메이션이 너무 많다/적다" | `data-stagger`·`reveal` 클래스 붙이고 떼기, 속도는 `global.css` 한 줄 | ★ |
| 15 | "한글 페이지" | i18n은 큰 작업. 1차는 한글 병기(명칭·이름·주소) | ★★★ |
| 16 | "대표 논문만 보는 탭" | `highlight` 필터 탭 1개 | ★ |
| 17 | "갤러리 확대 보기" | 라이트박스 | ★★ |
| 18 | "학생 개별 상세 페이지" | `members/[id].astro` + bio 필드 | ★★ |
| 19 | "Impact Factor" | 필드 추가, 수동 입력 | ★★ |
| 20 | "bsg.kentech.ac.kr 도메인" | 전산팀 CNAME + `public/CNAME` | ★ (외부) |

## 운영 메모
- YAML 형식이 틀리면 빌드가 실패하고 이전 버전이 유지됨(사이트 안 깨짐). GitHub Actions 탭에서 어느 항목인지 표시.
- 지도: 학교 방화벽이 Google을 막으면 네이버/카카오 지도 iframe으로 교체 (★).
- 이미지 용량 규격(구성원 ≤300 KB, 갤러리 ≤500 KB)을 지켜야 저장소가 커지지 않음.
- 메뉴 9개: 1024px 미만은 햄버거. 더 늘리지 말 것.
