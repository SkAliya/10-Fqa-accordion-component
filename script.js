// ELE's SELECTING
const list = document.querySelector(".list");
const liItems = [...document.querySelectorAll(".list__item")];
//DISPLAYING CONTENT AND TOGGLEING BTN
function ShowContent(ele) {
  const pEle = ele.querySelector(".list__item--answer");
  const imgEle = ele.querySelector(".list__item--questions__icon");

  pEle.classList.toggle("hide");
  imgEle.src = imgEle.src.includes("plus")
    ? "./assets/images/icon-minus.svg"
    : "./assets/images/icon-plus.svg";
}

//EVENT LISTENER ATTACHED TO PARENT ELE
list.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN" || e.target.tagName === "IMG") {
    const liEle = e.target.closest(".list__item");
    ShowContent(liEle);
  }
});

//KEYBOARD NAVIGATION
const firstLi = liItems[0];
const lastLi = liItems[liItems.length - 1];

liItems.forEach((li) => {
  li.addEventListener("keydown", keyFuns);
});

function keyFuns(e) {
  console.log(this);
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    forwardFun(this);
  }
  if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    backwardFun(this);
  }
  if (
    e.key === "Enter" ||
    (e.key === "Escape" && this === document.activeElement)
  ) {
    ShowContent(this);
  }
}
function forwardFun(e) {
  if (e === lastLi) {
    firstLi.focus();
  } else {
    const nxtLi = liItems.indexOf(e) + 1;

    liItems[nxtLi].focus();
  }
}

function backwardFun(e) {
  if (e === firstLi) {
    lastLi.focus();
  } else {
    const prvsLi = liItems.indexOf(e) - 1;
    liItems[prvsLi].focus();
  }
}
