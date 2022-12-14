// const content = document.querySelector(".content");
// let player = "X";
// let stepX = [];
// let stepO = [];
// const win = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// let markup = "";

// for (let i = 1; i <= 9; i += 1) {
//   markup += `<div class="item" data-id="${i}"></div>`;
// }

// content.insertAdjacentHTML("beforeend", markup);
// content.addEventListener("click", onClick);

// function onClick(evt) {
//   // '' => !false => true
//   if (!evt.target.textContent) {
//     const id = Number(evt.target.dataset.id);
//     if (player === "X") {
//       stepX.push(id);
//       const isWinner = checkWinner(stepX);
//       if (isWinner) {
//         console.log(`${player} is Winner 😎`);
//         reset();
//         return;
//       }
//     } else {
//       stepO.push(id);
//       const isWinner = checkWinner(stepO);
//       if (isWinner) {
//         console.log(`${player} is Winner 😎`);
//         reset();
//         return;
//       }
//     }
//     evt.target.textContent = player;
//     player = player === "X" ? "O" : "X";
//   }
// }

// function checkWinner(arr) {
//   const result = win.some((values) =>
//     values.every((value) => arr.includes(value))
//   );
//   return result;
// }

// function reset() {
//   content.innerHTML = markup;
//   player = "X";
//   stepX = [];
//   stepO = [];
// }

const content = document.querySelector(".content");
let player = "X";
let stepX = [];
let stepO = [];
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let markup = "";

for (let i = 1; i <= 9; i++) {
  markup += `<div class="item" data-id="${i}"></div>`;
}

content.insertAdjacentHTML("beforeend", markup);

content.addEventListener("click", onClickFunction);

function onClickFunction(event) {
  if (!event.target.textContent) {
    const id = Number(event.target.dataset.id);
    if (player === "X") {
      stepX.push(id);
      const isWinner = checkWinner(stepX);
      if (isWinner) {
        console.log(`${player} is Winner 😎`);
        reset();
        return;
      }
    } else {
      stepO.push(id);
      const isWinner = checkWinner(stepO);
      if (isWinner) {
        console.log(`${player} is Winner 😎`);
        reset();
        return;
      }
    }
    event.target.textContent = player;
    player = player === "X" ? "O" : "X";
  }
}

function checkWinner(arr) {
  const result = win.some((values) =>
    values.every((value) => arr.includes(value))
  );

  return result;
}

function reset() {
  setTimeout(() => {
    content.innerHTML = markup;
    player = "X";
    stepX = [];
    stepO = [];
  }, 2000);
}
