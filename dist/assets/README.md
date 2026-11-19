# Food atlas v1

Generated with the built-in image_gen tool, 2026-11-19. Used by the board, blender, and ingredient previews. The standalone HTML embeds the same PNG as a data URL.

Prompt specification: high-quality semi-realistic 3D food, natural fine textures, fresh rich colors, warm soft upper-left studio light, consistent near-overhead camera with slight visible front depth. Truly transparent cutouts, no text, no background, no emoji or flat vector appearance. One regular 4-column by 6-row atlas. Rows 1–3: whole carrot, strawberry, cucumber, blueberry, peach, watermelon, apple, orange, golden bell pepper, eggplant, chili, brown button mushroom. Rows 4–6: corresponding anatomically recognizable cut sections with visible flesh, rind, seeds and narrow lower-edge depth. Bell pepper has scalloped bright yellow walls, white ribs, a few tiny ivory seeds and a truly transparent hollow center; no brown fill.

Pixel rectangles and silhouette widths were read from alpha only; generated pixels are preserved unchanged. No external image requests are needed at runtime.

Sprite regions use the actual connected alpha silhouettes rather than a uniform grid, which prevents neighboring fruit fragments and clipped bottoms. The approved v1 artwork is retained.

Matter.js 0.20.0 (MIT) is vendored at ../vendor/matter.min.js from https://github.com/liabru/matter-js/tree/0.20.0. It handles detached slices in the top-down board plane; thin pieces can overlap visually. The knife uses a damped spring animation. Both the library and food atlas are embedded by scripts/build-standalone.py for offline HTML use.


## Knife v1

`knife-v1.png` was generated with the built-in image_gen tool. Prompt: isolated premium 3D cooking-game chef knife, horizontal silver blade pointing left, contoured dark walnut handle on the right with two flush steel rivets, near-overhead camera with slight front-edge thickness, satin brushed steel and narrow polished bevel, warm upper-left studio light, softly rounded family-friendly shape, full object on transparent alpha, no board, hands, text, baked background shadow, or flat-vector outlines. Original pixels are preserved; the crop is read from alpha bounds.

Whole-food draw width is derived from original image aspect ratio. Cast shadows use the image silhouette. Knife movement is a single contact and smooth monotonic lift (320 ms), without an oscillating spring.


## Lying fruit v1

`lying-fruit-v1.png`, built-in image_gen. Prompt: three isolated semi-realistic 3D cooking-game fruits (apple, watermelon, orange) lying lengthwise on an imaginary board, stem-to-blossom axis along board depth, far stem pointing away and mostly occluded, near blossom pointing toward viewer, same elevated front camera and warm upper-left studio light. No upright stem on visible top surface, no ground or board, no slices or text, genuine transparent alpha. This corrects the mismatch between upright whole-food photos and front-facing cut ends. Actual alpha silhouettes supply crop bounds and cut widths. Pixels remain unchanged.


## Round-fruit rendering

Apple, watermelon, peach and orange now use local Three.js r160 geometry, aligned axial clipping planes, actual circular cap meshes, and one elevated orthographic camera. The existing full-resolution fruit photos are camera-projected onto the curved skin with UVs; flesh/seed images are mapped to the real cut planes. Cached WebGL frames are composed into the existing Canvas scenes. No external runtime downloads. Three.js is MIT-licensed and vendored at ../vendor/three.min.js from https://github.com/mrdoob/three.js/tree/r160.

Detached slices use low velocity, high damping and negligible angular motion. They overlap in a shallow pile; their collisions with each other are disabled to prevent artificial explosions. Board boundaries remain enforced. WebGL-unavailable clients use the prior Canvas path.


## Peach, pepper, mushroom and tactile play update

`peach-lying-v1.png` was generated with built-in image_gen. Prompt: one fresh pink-yellow peach lying on its side, far stem mostly hidden at the back silhouette, near blossom scar toward viewer, natural longitudinal seam, camera 60 degrees above board from near end, realistic velvety fuzz and warm soft upper-left light, genuine alpha, no leaves/board/shadows/text. Original pixels are retained and projected on the peach mesh. Artificial stem/blossom meshes are hidden to avoid duplicate markers. Peach stone cross-section is visible only when the cut reaches the central pit volume.

Pepper preserves its upright photo and uses a rotated 3D x-axis cut, a vertical knife, longitudinal cream ribs and seeds, and transparent hollow interior. Mushroom stalk/cap cross-cuts use matching simple flesh surfaces instead of compressing the lengthwise mushroom image.

Farm packets are large illustrated objects on a shelf. Drag seed packets into soil, drag the watering can from the garden tool station, then drag mature crops into the basket. Invalid drops return the object; completed crops are removed only on a valid basket drop. Blender pouring requires dragging the finished jar to the left cup, through the left spout opposite the right handle.


## Large garden and continuous jar dragging

Garden virtual stage is 720×900. One large active bed is displayed at a time; three pictorial bed selectors retain all three independent plots. A shelf shows three large seed packets per page, with visual previous/next arrows. Watering can and basket have enlarged graphics and drop targets. Canvas resolution, pointer conversion and hit target percentages use the active scene height, so seed/water/crop dragging stays aligned.

Finished blender jar follows the pointer at full distance while held. On a valid cup drop, it starts from the actual released pose, aligns the left spout over the cup, pours, then returns smoothly. Liquid transfer begins only after alignment. Invalid drops ease back over 220 ms.
