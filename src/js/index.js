import { getProject, types as t } from "@theatre/core";
import studio from "@theatre/studio";

studio.initialize();

const proj = getProject("Animation Practice");
const sheet = proj.sheet("Bouncing Box");

const boxObj = sheet.object("Box", {
  y: 0,
  stretch: t.number(1, { nudgeMultiplier: 0.01 }),
});

const boxDiv = document.querySelector(".box");
boxObj.onValuesChange(({ y, stretch }) => {
  boxDiv.style.transform = `translateY(${-y}px) scale(${
    1 / stretch
  }, ${stretch})`;
});

// Control box label and range addition HIGHLIGHT
// if (process.env.NODE_ENV === "development") {
//   studio.initialize();
// }

// const proj = getProject("My first project");
// const sheet = proj.sheet("A Sheet");
// const dummy = sheet.object("Some Object", {
//   n: 10,
//   b: false,
//   position: {
//     x: t.number(0, { label: "Horizontal" }),
//   },
//   streetLight: t.stringLiteral(
//     "green",
//     {
//       green: "Green",
//       red: "Red",
//       yellow: "Yellow",
//     },
//     { as: "switch" }
//   ),
// });

//Initial Box Animation HIGHLIGHT
// window.sheet = sheet;

// const box = sheet.object("Box", {
//   position: {
//     x: 0,
//     y: 0,
//   },
// });

// const div = document.createElement("div");
// div.style.cssText = `
// position: absolute;
// width: 100px;
// height: 100px;
// background: #EEE;
// `;

// setTimeout(() => {
//   document.body.appendChild(div);
// });

// box.onValuesChange((newValue) => {
//   div.style.left = newValue.position.x + "px";
//   div.style.top = newValue.position.y + "px";
// });
