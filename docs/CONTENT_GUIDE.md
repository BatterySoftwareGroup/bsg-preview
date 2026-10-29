# 홈페이지 콘텐츠 작성 가이드

기존 Google Sites(battery-software)의 내용을 2026-10-29에 이관했습니다. 아래 "받아야 할 정보"만 채우면 됩니다.

## 0. 받아야 할 정보 체크리스트
- [ ] 랩 한글 정식 명칭 → `src/site.ts` `fullNameKo`
- [x] 소속 학과 → Department of Energy Engineering (적용됨)
- [ ] 교수 한글 이름 → `members.yaml` jsong `name_ko`; 전화·수상·ORCID·CV → `professor.yaml`
- [ ] 구성원 한글 이름 15명 → `members.yaml` `name_ko`
- [ ] 관심사 비어 있는 4명(Jueun Kim, Yongjin Sim, Seojun Lee, Minseong Seo)
- [ ] Alumni 5명 현 소속 → `current`
- [ ] 과제 종료일·정식 과제명·공개 가능 여부 → `projects.yaml` (지금은 News 기준 추정)
- [ ] 논문 교신저자 `*` 표시, Highlights 5편 확정 → `publications.yaml`
- [ ] 랩 GitHub 주소 → `src/site.ts` `github`
- [x] 학교 로고 (적용됨) · [ ] hero 영상, Research 이미지 3장 (docs/IMAGE_PROMPTS.md)

**Hero란?** 홈 첫 화면에서 스크롤하기 전에 보이는 큰 영역(배경 이미지/영상 + 랩명 + 한 줄 소개 + 버튼)입니다. 삼성SDI·LG엔솔 홈페이지 첫 화면과 같은 것입니다.
파일을 고치면 `npm run dev` 화면에 바로 반영되고, 형식이 틀리면 빌드 시 어느 항목이 문제인지 알려줍니다.

## 1. 랩 기본 정보 — `src/site.ts`
| 항목 | 예시 | 비고 |
|---|---|---|
| name | BSG Lab | 영문 랩명 (헤더·타이틀) |
| 정식 명칭 (한/영) | Battery Safety & ... Laboratory / 배터리 ○○ 연구실 | hero에 표시 (1단계 작업 시 추가) |
| tagline | 한 줄 소개 (20단어 이내) | 홈 첫 화면 |
| affiliation | KENTECH, Department of ... | footer |
| address / email / phone / office | | Contact 페이지, footer |
| mapQuery | Google 지도 검색어 | Contact 지도 |
| recruiting | 모집 안내 문단 | Contact 'Join us' 박스 |
| github | 랩 GitHub 주소 | footer |

## 1-1. 첫 화면 배경 / 학교 로고 — `src/site.ts`
- `heroImage`: `public/hero/hero.jpg` (지금은 임시 그래픽). 가로 1920×1080 이상 JPG.
- `heroVideo`: mp4를 `public/hero/hero.mp4`로 넣고 경로를 적으면 데스크톱에서 무음 자동재생 영상으로 바뀜(모바일·데이터 절약 모드는 heroImage만 보여줌).
  **영상 제작 조건**: 1280×720, 10~15초, 24~30 fps, **무음(필수)**, H.264 MP4, 2~4 MB(최대 6 MB). 느린 움직임과 어두운/저채도 장면이 글자 가독성과 루프에 유리. 시작·끝 장면이 비슷하면 반복 티가 안 남.
  변환(ffmpeg): `ffmpeg -ss 0 -t 12 -i source.mov -vf "scale=1280:-2,fps=30" -an -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 26 -maxrate 2.5M -bufsize 5M -movflags +faststart public/hero/hero.mp4`
  첫 프레임을 poster로: `ffmpeg -i public/hero/hero.mp4 -frames:v 1 -q:v 3 public/hero/hero.jpg`
- `partnerLogo`: KENTECH 로고 파일(`public/logo/kentech.svg` 또는 png)을 넣고 경로를 적으면 헤더·footer·모바일 메뉴에 표시. 지금은 비어 있어 숨김.

## 1-2. 교수 소개 — `src/data/professor.yaml`
직함, 소속, 소개글(3~5문장), 학력(학위·기관·연도), 경력(직위·기관·기간), 수상, CV·Scholar·ORCID 링크. 이름·사진·이메일은 members.yaml의 PI 항목을 사용.

## 2. 구성원 — `src/data/members.yaml`
항목당: 영문 이름, 한글 이름, 구분(PI/Postdoc/PhD/MS/BS/Staff/Alumni — 석박통합은 PhD), 입학 연월, 이메일, 연구 관심사 한 줄, 사진.
Alumni는 재학 기간 + 현 소속.

**사진 올리는 곳**: `public/members/<id>.jpg` — id는 YAML의 `id`와 같게 (예: `jsong.jpg`, `gspark.jpg`, `hblee.jpg`).
같은 이름으로 덮어쓰면 YAML은 손댈 필요 없음. 지금 들어 있는 사진은 기존 Google Sites 것.
- 세로 3:4 비율(증명사진 비율), **600×800 px 이상**, JPG, 300 KB 이하. 배경은 흰색/단색으로 통일하면 카드가 고르게 보입니다.

**교수 소개**(2단계에 상세 페이지 예정): 학력(학위·기관·연도), 경력, 수상, CV PDF.

## 3. 논문 — `src/data/publications.yaml`
항목당: 종류(journal/conference/patent), 제목, 저자(교신 `*`, 공동1저자 `†`), 저널/학회명, 연도, 권(호)·쪽, **DOI**.
- DOI는 `10.xxxx/...` 부분만. 링크 버튼이 자동으로 생깁니다. 특허·프리프린트처럼 DOI가 없으면 `link:`에 URL.
- 대표 논문은 `highlight: true` → 홈 Highlights와 파란 표시.
- Google Scholar / ORCID에서 BibTeX 내보내기를 받으면 변환해 드릴 수 있습니다(수백 편도 가능).

## 4. 과제 — `src/data/projects.yaml`
과제명, 지원기관, 기간, 진행/완료. 외부 공개 가능한 것만.

## 5. 소식 — `src/content/news/YYYY-MM-DD-제목.md`
**넣는 것**: 논문 게재(`paper`), 과제 수주(`grant`), 수상(`award`), 학회·행사·MOU·언론(`event`).
**넣지 않는 것**: 입학·졸업·환영 인사(Members 페이지의 기간·Alumni로 대신), 채용 공고(Contact의 Join us로 대신), 내부 회식.
파일 하나 = 글 하나. 맨 위에 `title`, `date`, `category`(위 4개 중 하나), (선택) `image`를 적고 아래에 본문(Markdown). 본문은 비워도 됩니다.
파일명이 주소가 되므로 영문 소문자와 하이픈만 사용.

## 6. 연구 분야 — `src/content/research/주제.md`
주제 3~4개. 맨 위에 `title`, `summary`(한 줄), `image`, `order`(표시 순서)를 적고 아래에 설명(Markdown, 2~3문단 + 현재 주제 목록).
이미지 2종: `image`(상세 페이지용 인포그래픽, 1200×800)와 `cover`(홈·목록 카드용, 글자 없는 단순 그림, 600×400). `public/research/`에 저장. cover가 없으면 image를 카드에도 씀. 둘 다 SVG로 저장소에 포함(`<slug>.svg`, `<slug>-cover.svg`). cover는 투명 배경이라 카드 색을 그대로 따름. 글자·수치를 고치려면 SVG 파일의 `<text>`를 직접 편집하거나 요청.

## 6-1. 갤러리 — `src/data/gallery.yaml`
사진당 `image`(public/gallery/ 아래), `caption`, `date`. 최신이 앞으로 자동 정렬. 홈에는 최근 4장.

## 7. 사진·이미지 규격 요약
| 용도 | 크기 | 형식 |
|---|---|---|
| 구성원 프로필 | 600×800 (세로 3:4) | JPG ≤ 300 KB |
| 홈 hero 배경 | 1920×1080 이상 (가로) | JPG ≤ 500 KB, 글자 얹히므로 단순한 사진 |
| 단체 사진 | 1600×1000 이상 | JPG |
| 연구 주제 대표 이미지 | 1200×800 | JPG/PNG |
| 갤러리 | 긴 변 1600px, `public/gallery/YYYY-MM-DD-행사.jpg` | JPG ≤ 500 KB |
| 로고 | 완료 (`public/logo/bsg.svg`) · 학교 로고는 `public/logo/kentech.svg` | SVG/투명 PNG |

## 8. 초안 작성 순서 (추천)
1. `site.ts`의 랩명·태그라인 → 2. 교수 정보 + 사진 → 3. 논문 전체(BibTeX 내보내기) → 4. 학생 정보 + 사진 → 5. 연구 주제 글 → 6. 과제·소식.
