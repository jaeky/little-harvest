# 꼬마 텃밭 🌱

글을 읽기 전 어린이도 터치와 드래그로 즐기는 텃밭·도마·믹서기 놀이입니다.

- [게임 바로 하기](https://jaeky.github.io/little-harvest/)
- [인터넷 없이 실행할 단일 HTML](https://jaeky.github.io/little-harvest/little-harvest.html) — 파일로 저장한 뒤 브라우저에서 열기

## 놀이

- **텃밭:** 씨앗 봉투를 밭에 끌어 심고, 물뿌리개로 물을 준 뒤 채소를 바구니에 끌어 담습니다. 큰 밭은 위의 밭 그림으로 전환하고 씨앗은 선반 화살표로 넘겨 봅니다.
- **도마:** 재료를 고른 뒤 도마 어디든 눌러 썹니다. 재료마다 최소 10회 썰 수 있고, 다 썬 상태는 다른 재료를 고르기 전까지 유지됩니다.
- **믹서기:** 재료를 넣어 색을 섞고, 완성된 믹서 통을 왼쪽 컵으로 끌어 주스를 따릅니다.

당근·오이·딸기·블루베리·복숭아·수박·사과·오렌지·파프리카·가지·고추·버섯, 총 12종이 있습니다.

## 파일과 실행

`dist/`가 웹 배포본입니다. `dist/game.js`에 게임 로직과 Canvas 그림, `dist/fruit-3d.js`에 3D 절단 표현이 있습니다. 별도의 패키지 설치나 외부 CDN 요청 없이 실행됩니다.

```sh
python3 -m http.server 8080 --directory dist
```

브라우저에서 `http://localhost:8080`을 엽니다.

## 단일 파일 생성 및 검사

```sh
python3 scripts/build-standalone.py
node --check dist/game.js
node --check dist/fruit-3d.js
node tests/game.test.cjs
python3 tests/sprites.test.py
```

이미지 경계 검사에는 Python Pillow가 필요합니다. 단일 파일은 `dist/little-harvest.html`과 저장소 상위의 `little-harvest.html`에 생성됩니다.

## 게시

GitHub Pages는 `gh-pages` 브랜치의 루트를 게시합니다. 소스를 수정한 뒤 다음과 같이 배포합니다.

```sh
python3 scripts/build-standalone.py
git add dist scripts tests README.md .gitignore
git commit -m "fix: 꼬마 텃밭 개선"
git push origin main
git subtree push --prefix dist origin gh-pages
```

## 소재와 라이브러리

이미지 제작 기록은 [dist/assets/README.md](dist/assets/README.md)에 있습니다. Matter.js 0.20.0과 Three.js r160을 로컬에 포함하며 각 MIT 라이선스는 `dist/vendor/`에 함께 보관합니다.

크롬과 모바일 화면 에뮬레이션에서 확인했습니다. 실제 휴대폰·아이패드 터치 검증은 아직 하지 않았습니다.
