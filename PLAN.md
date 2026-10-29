# BSG (Battery Software Group) 홈페이지 제작 계획

작성일: 2026-10-29 · 스택: Astro + Tailwind CSS → GitHub Pages (GitHub Actions 자동 배포)

## 1. 레퍼런스 조사 요약

### Battery Intelligence Lab (Oxford) — 포맷 레퍼런스
- Jekyll + 자체 테마, GitHub Actions(`deploy-pages`)로 배포. gh-pages 브랜치 없음. **우리와 같은 구조.**
- 데이터: `_data/people.yml`(역할 그룹별), `_data/articles.yml`, 뉴스는 `_posts/날짜-제목.md`, 연구 프로젝트는 `research/<분야>/<프로젝트>.md`.
- 메뉴: Research / People / Publications / Data and code / Contact.
- 홈: 전체폭 hero 사진 → 단체 사진 + PI 한 줄 → Mission → News 7개 → Sponsors 로고 → footer.
- 아쉬운 점(우리는 개선): 논문이 연도별 정렬·필터 없음, DOI가 텍스트로 안 보임, BibTeX 없음, Alumni가 텍스트뿐.

### hansonwade.com — 디자인 레퍼런스
- 흰 배경 + 네이비→블루 그라데이션 hero, 큰 흰색 헤드라인. 로고 색과 잘 맞음.
- 카드 그리드 + 섹션마다 "View all" 버튼, 우측 상단 Contact CTA 버튼, 내용 많은 footer.

### nemoproject.eu — 디자인 레퍼런스
- 다크 테마 + 애니메이션 배경 hero + "Scroll to explore", pill 모양 버튼, 대문자 라벨, "→" 링크.
- 홈에 News 티저 3개 + "See all", footer에 메뉴 반복·SNS·펀딩 고지.

### dsso.kr(연구실 제작 업체) 및 포트폴리오 (MEET Lab KENTECH, SNU 전기화학, 한양대 SSBL)
업체가 제공하는 기능과 우리의 대응:

| 업체 제공 기능 | 정적 사이트(우리)에서 반영 방법 |
|---|---|
| 반응형(모바일 햄버거 메뉴) | Tailwind 반응형 + 햄버거 메뉴 컴포넌트 |
| Publications 연도별 자동 정렬, Journal/Conference/Patent 탭, PDF 다운로드 | YAML에 `type`·`year`·`doi`·`pdf` 필드 → 빌드 시 자동 정렬·그룹·DOI 링크 |
| Projects 진행/완료 분리, 연도별 목록 | `projects.yaml` + `status` 필드 |
| Research 주제 분류(3~4개 카드 + 상세) | `src/content/research/*.md` (Markdown 1개 = 주제 1개) |
| Members 분류(Professor/Students/Alumni) 관리 | 이미 있음. Alumni에 `current` 필드 추가 |
| 게시판(News/Gallery), 홈 최근 글 프리뷰 | News = Markdown 포스트, Gallery = 이미지 폴더 + YAML |
| 팝업 공지 | YAML 플래그 1개로 홈 상단 배너 (팝업 대신 배너: 모바일 친화) |
| 관리자 모드, 로그인, 방문자 통계 | **제외.** 수정은 YAML/Markdown 편집 + git push. 통계는 필요 시 Cloudflare/GoatCounter 스크립트 1줄 |
| 네이버 검색 등록, 호스팅·도메인 | GitHub Pages 무료. 사이트맵 자동 생성(`@astrojs/sitemap`) + 학교 도메인 CNAME |
| 평생 하자보수 | 해당 없음. 코드가 우리 것 |

### 반응형 직접 테스트 결과 (hansonwade, nemo — 375 / 768 / desktop)
- 두 곳 모두 768px 이하에서 햄버거 메뉴, 카드 1열(태블릿 2열), 제목 글자 크기 자동 축소, 가로 스크롤 없음. 깨짐 없음.
- 주의점: 스크롤 등장(fade-in) 애니메이션 때문에 첫 화면 글자가 늦게 보임 → 우리는 애니메이션을 최소화. 쿠키 배너가 모바일 하단 1/4을 차지 → 우리는 쿠키 배너 없음(추적 안 함).

### dsso 제작 연구실 Publication 페이지 (재접속 성공: MEET, SNU EESL, SSBL)
- 공통 포맷: Journal/Conference/Patent 서브탭 → 연도 탭(전체/2026…/2015~) → 연도 헤더 아래 역순 번호, 제목, 저자(교신 `*`, 공동1저자 `†`), 저널·연도·vol·page, `LINK` 버튼(DOI).
- 검색: 제목/저자/저널 select + 검색어. 페이지네이션. IF·PDF·썸네일 없음.
- 상세 페이지: MEET·SNU는 abstract + DOI, SSBL은 없음. 게시판 UI(작성자·작성일·클릭수)가 그대로 노출되는 단점.

### dsso 포트폴리오 연구실 9곳 조사 → 기능 빈도
(MEET, SNU EESL, SSBL, 서강대 LEES, KENTECH OC2, SNU iNHENS, 영남대 EMSL, SNU MEST, 연세대 ANML21)

| 기능 | 빈도 | 적용 |
|---|---|---|
| Publication 연도별 탭/그룹 | 9/9 | **적용** (빌드 시 자동) |
| 홈 하단 최신 News + Gallery | 8/9 | **적용** |
| Publication DOI `LINK` 버튼 | 7/9 | **적용** (`doi` 필드 → 자동 링크, DOI 텍스트도 표시) |
| 교신 `*` / 공동1저자 `†` 표기 | 7/9 | **적용** (저자 문자열에 그대로 입력) |
| 홈 최신 Publication 미리보기 | 7/9 | **적용** |
| 사진 Gallery | 7/9 | **적용** (2단계) |
| Members: Professor / Current(PhD·MS·BS 탭) / Alumni | 6/9 | **적용** |
| 멤버 카드: 사진·이름(한/영)·과정·이메일·연구분야 | 6/9 | **적용** (`name_ko` 필드 추가) |
| Publication 검색(제목/저자/저널) | 6/9 | **적용** (클라이언트 필터 1개, 서버 불필요) |
| Journal / Conference / Patent 분리 | 5/9 | **적용** (`type` 필드 + 탭) |
| 데스크톱에서도 햄버거 + 전체화면 hero | 5/9 | 햄버거는 모바일만. hero는 적용 |
| 스크롤 애니메이션, hero 슬라이더 | 5/9 | 보류 (가독성 저하, 유지비) |
| 멤버 상세(Education/Experience 연표) | 4/9 | 2단계 (교수 페이지만 먼저) |
| Facilities/장비 목록 | 4/9 | 미적용 (사용자 결정) |
| Publication 썸네일(TOC graphic) | 2/9 | 선택 (`image` 필드만 열어둠) |
| Publication 상세(abstract) | 2/9 | 보류 (DOI로 대체) |
| Contact 지도 embed | 2/9 | **적용** (Google Maps iframe) |
| Video embed | 2/9 | 선택 (YouTube 링크 필드) |
| Project(Ongoing/Completed, 기간·지원기관) | 1/9 | **적용** (연구비 과제 홍보에 유용) |
| Recruiting 안내 | 1/9 | **적용** (Contact에 모집 문단) |
| Impact Factor 필드 | 1/9 | 선택 (`if` 필드, 비우면 숨김) |
| 팝업 공지 | 틀만 6/9, 실사용 0 | 미적용 → 홈 상단 배너로 대체 |
| KO/EN 토글, 다크모드, 자료실 | 0/9 | 미적용 (구조만 열어둠) |

## 2. 사이트 구조 (확정안)

```
Home          hero(로고+랩명 한/영+태그라인) → Research 카드 4개 → 최근 Publications 5편 → 최근 News 3개 → 스폰서/대학 로고 → footer
Research      주제별 카드 → 상세 페이지 (Markdown)
Members       Professor(학력·경력) / Current(PhD·MS·BS 탭: 사진·한영이름·과정·이메일·연구분야) / Alumni(현 소속)
Publications  Journal·Conference·Patent 탭 → 연도 그룹, 저자 *†, DOI 링크, 검색, Highlights, BibTeX 복사
Projects      Ongoing / Completed (과제명·기간·지원기관)
News          날짜순 목록 + 상세 (Markdown)
Gallery       사진 그리드
Contact       주소·이메일·Google 지도·모집 안내·대학 로고
```

## 3. 디자인 방향

- **색**: 로고 4색을 그대로 사용. Navy `#0d316f`(헤더·헤딩), Blue `#026fc1`(링크·버튼), Sky `#00abe9`(강조), Ink `#0d1c31`(footer·다크 배경). 흰 배경 기본 + hansonwade식 네이비→블루 그라데이션 hero.
- **서체**: 로고와 맞춰 헤딩은 JetBrains Mono ExtraBold(제한적으로), 본문은 Pretendard(한글) / Inter(영문).
- **큰 모니터 대응**: 본문 폭 1200px, 화면 크기별 글자 크기 확대(현재 어색한 부분 해결).
- **반응형**: 모바일 1열 / 태블릿 2열 / PC 3~4열, 모바일 햄버거 메뉴.
- **다국어**: 1차는 영문 단일(KENTECH 다른 랩과 동일). 한글은 추후 `/ko/` 경로로 추가 가능하게 구조만 유지.

## 4. 데이터 관리 방식

| 내용 | 파일 | 추가 방법 |
|---|---|---|
| 랩 정보 | `src/site.ts` | 값 수정 |
| 구성원 | `src/data/members.yaml` + `public/members/사진` | 항목 추가 |
| 논문 | `src/data/publications.yaml` | 항목 추가 (`doi`만 쓰면 링크 자동) |
| 뉴스 | `src/content/news/YYYY-MM-DD-제목.md` | 파일 추가 |
| 연구 주제 | `src/content/research/주제.md` | 파일 추가 |
| 프로젝트 | `src/data/projects.yaml` | 항목 추가 |

형식이 틀리면 빌드가 실패하고 어느 항목이 문제인지 알려줌. GitHub 웹에서도 바로 편집·커밋 가능(로컬 설치 불필요).

## 5. 작업 순서

1. ~~**디자인 기반** — 색·서체 토큰, 헤더(로고, 햄버거 메뉴), footer, hero. 큰 화면 레이아웃 수정.~~ 완료 (2026-10-29)
2. ~~**Publications 고도화** — `type`/`doi`/`highlight`/`pdf` 필드, 탭 + 연도 그룹, 검색, BibTeX 복사.~~ 완료 (2026-10-29)
3. ~~**Research + News + Gallery** — Markdown 콘텐츠 컬렉션, 홈 프리뷰 섹션(최신 논문·뉴스·갤러리).~~ 완료 (2026-10-29)
4. ~~**Members 보강** — 사진, 한/영 이름, 과정 탭, Alumni 현 소속, 교수 상세.~~ 완료 (교수 상세·카드, 2026-10-29)
5. ~~**Contact + Projects + 부가** — 지도, 모집 안내, 과제 목록, 사이트맵, OG 이미지, 404 페이지.~~ 완료 (2026-10-29)
6. **GitHub 업로드 + 배포** — 저장소 생성, Settings → Pages → GitHub Actions, 학교 도메인 연결(선택).
7. ~~실제 콘텐츠 입력~~ 기존 Google Sites 내용 이관 완료 (2026-10-29). 한글 명칭·이름, Alumni 소속, 과제 상세는 사용자 입력 대기 (docs/CONTENT_GUIDE.md §0).
8. **디자인 2차** — 스크롤 리빌 애니메이션, hero 영상 조건부 로딩, News 카테고리 태그 완료 (2026-10-29). hero 영상·Research 이미지·학교 로고는 사용자 제작 대기.

## 6. 로고

`inbox/Gemini_Generated_Image2.png`의 스펙(박스 1.5×2.5 cm, 간격 0.08 cm, 바 0.5×1.2 cm, JetBrains Mono ExtraBold)을 그대로 SVG로 옮김.
- `public/logo/bsg.svg` — 워드마크 (헤더에 사용 중)
- `public/favicon.svg` — "b" 박스 단독
글자를 path로 변환해서 폰트 설치 없이 어디서나 동일하게 보임.

## 7. 대기업 사이트 패턴 조사 (2026-10-29: 삼성SDI, LG에너지솔루션, Apple, Tesla / SK On은 접속 차단)
- Hero: 영상 1(LG, `autoplay muted loop playsinline`), 정지 이미지 2(삼성SDI 100vh, Tesla 72vh), 슬라이더 0. 흰 글자를 미디어 위에 겹침 3/4. 스크롤 화살표 0/4.
- 헤더: 투명 겹침 2, 불투명 1, 반투명 블러 고정 1(Apple).
- 모바일 메뉴: **풀스크린 패널 4/4**(사이드 드로어 0), 우상단 햄버거, X 버튼 또는 아이콘 모핑, 스크롤 잠금 4/4.
- 적용: hero는 이미지/영상 교체 가능 + 하단 어두운 그라데이션, 메뉴는 풀스크린 페이드, 스크롤 화살표 제거.
