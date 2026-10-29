# BSG Lab Homepage

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## 내용 수정 (코드 수정 불필요)
| 파일 | 내용 |
|---|---|
| `src/site.ts` | 연구실 이름, 소개 문구, GitHub 링크 |
| `src/data/members.yaml` | 구성원 (사진은 `public/members/`에 넣고 `photo: /members/x.jpg`) |
| `src/data/publications.yaml` | 논문 |
| `src/data/news.yaml` | 소식 |

YAML 형식이 틀리면 빌드가 실패하며 어느 항목이 문제인지 알려줍니다 (`src/content.config.ts`의 스키마).

## 로컬 실행
```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```

## GitHub Pages 배포
1. GitHub에 저장소 생성 후 push (`main` 브랜치).
2. 저장소 Settings → Pages → Source: **GitHub Actions**.
3. 저장소 이름이 `<org>.github.io`가 아니면 `astro.config.mjs`의 `site`, `base` 주석을 풀고 채우기.
4. push할 때마다 `.github/workflows/deploy.yml`이 자동 배포.
