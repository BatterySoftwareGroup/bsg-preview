# Research 분야 이미지 생성 프롬프트

Gemini / Midjourney / DALL-E 등에 아래 프롬프트를 그대로 넣으세요. 결과는 `public/research/<slug>.png` (1200×800 또는 3:2 비율)로 저장하면 됩니다. 지금은 기존 Google Sites 그림이 자리하고 있습니다.

**공통 스타일 (각 프롬프트 끝에 붙이기)**
> clean scientific illustration, dark navy background (#0d316f) with cyan (#00abe9) accent light, isometric perspective, no text, no letters, no logos, 3:2 aspect ratio, high detail, soft studio lighting, subtle glow

**공통 네거티브 프롬프트** (지원하는 도구에서)
> text, letters, numbers, watermark, people, faces, cartoon, low quality, blurry

---

## 1. `cells-packs-bms.png` — Battery Cells, Packs, and BMS Algorithms
> Exploded view of a lithium-ion battery pack: rows of cylindrical cells, a battery management system circuit board with glowing cyan data traces hovering above, a translucent thermal heat-map overlay on some cells, and a fast-charging cable connected at one end, + 공통 스타일

## 2. `microstructures.png` — Electrode and Material Microstructures
> Microscopic cross-section of a porous battery electrode: spherical active-material particles of varying sizes packed in a matrix, lithium ions flowing through tortuous pores shown as thin glowing cyan streams, solid-electrolyte grain boundaries visible between particles, + 공통 스타일

## 3. `techno-economic.png` — Techno-economic Evaluations
> Abstract system diagram connecting a large stationary battery storage container, a wind and solar farm, and a city skyline with flowing cyan energy lines; a floating translucent cost-curve chart and a glowing price-per-kilowatt-hour gauge in the foreground, + 공통 스타일

---

## 선택: Home hero 배경 이미지 (영상 전 임시)
> Wide cinematic shot of a modern battery research laboratory at dusk, rows of battery test chambers with soft cyan status lights, dark navy tones, shallow depth of field, no people, no text, 16:9

## 팁
- 세 장을 같은 세션에서 연속 생성하면 톤이 맞습니다. 하나 마음에 들면 "same style as previous"로 이어가세요.
- 글자가 생기면 네거티브에 "text"를 강조하거나 생성 후 크롭.
- 배경이 너무 밝으면 카드 위 제목 글자와 겹치지 않으니 문제없지만, 홈 카드 톤이 맞게 어두운 쪽을 고르세요.

---

# Hero 배경 영상 생성 프롬프트

Design 캔버스(Artifact)는 정지 이미지·인터랙티브 화면만 만들 수 있고 **영상 파일은 못 만듭니다**. 영상은 AI 영상 생성 도구(Google Veo, Runway Gen-3, Kling, Pika, Luma)에 아래 프롬프트를 넣어 만든 뒤 CONTENT_GUIDE §1-1의 ffmpeg 명령으로 압축하면 됩니다. 10초 내외 클립을 2~3개 만들어 가장 잔잔한 것을 고르세요.

**공통 조건 (프롬프트 끝에 붙이기)**
> slow cinematic camera movement, dark navy and deep blue tones with subtle cyan highlights, shallow depth of field, no text, no people, no logos, seamless loop, 16:9, 10 seconds

## A. 배터리 셀 (추천 — 우리 로고 색과 가장 잘 맞음)
> Macro shot of rows of cylindrical lithium-ion battery cells on a dark surface, soft cyan light slowly sweeping across the metal caps, faint glowing data lines drifting above the cells like a heat-map overlay, + 공통

## B. 연구실 장비
> Slow dolly shot through a modern battery testing laboratory at night, battery cycler racks with small blinking cyan and white status LEDs, cables and cell holders slightly out of focus in the foreground, + 공통

## C. 추상 데이터/모델 (영상이 글자를 방해하지 않음)
> Abstract 3D visualization of a battery electrode microstructure: thousands of translucent spherical particles slowly rotating in dark space, thin cyan lines of ion flow passing between them, gentle particle glow, + 공통

**네거티브**: text, letters, watermark, people, hands, fast motion, flicker, bright white background

**루프 팁**: 생성 도구에 "seamless loop" 옵션이 있으면 켜고, 없으면 ffmpeg로 정방향+역방향을 이어 붙이면 됩니다:
`ffmpeg -i clip.mp4 -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[v]" -map "[v]" -an loop.mp4`

**영상 없이 가는 방법**: 코드로 만든 애니메이션(입자·셀 윤곽이 천천히 움직이는 캔버스)은 파일 용량 0, 완벽한 루프, 모바일에서도 가벼움. 사진·영상이 준비될 때까지의 대안으로 쓸 수 있습니다.
