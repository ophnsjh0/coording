// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const buttons = document.querySelectorAll("button");
const input = document.querySelector(".show");

let result = "";
let operCheck = false;
let numberCheck = true;
let equlasCheck = true;

function init() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.type) {
        case "operator":
          const oper = button.innerText;
          operator(oper);
          break;
        case "ac":
          clear();
          break;
        case "equals":
          calc();
          break;
        default:
          const number = button.innerText;
          displayNumber(number);
          break;
      }
    });
  });
}

function displayNumber(number) {
  operCheck = true;
  const current = input.value;

  //계산 끝난 후 초기화
  if (equlasCheck) {
    //연산자 눌렸을 시 계산기 값만 초기화
    if (numberCheck) {
      input.value = current === "0" ? number : input.value + number;
    } else {
      input.value = number;
      numberCheck = true;
    }
    result += number;
  } else {
    equlasCheck = true;
    input.value = number;
    result = number;
    console.log(result);
  }
}

function calc() {
  // 지속적으로 계산기 값 누르는 거 확인
  if (input.value === "0") {
    clear();
  } else {
    //마지막이 연산자로 끝나는 지 확인
    if (!operCheck) {
      alert("Calculation is unavailable because of operation.");
    } else {
      // 계속 눌렸을 때 변경
      if (equlasCheck) {
        const final = eval(result);
        input.value = `${final}`;
        result = "";
        equlasCheck = false;
        operCheck = false;
      } else {
        clear();
      }
    }
  }
}

function operator(oper) {
  if (!operCheck) {
    alert("Operation Error.");
  } else {
    operCheck = false;
    result += oper;
    numberCheck = false;
  }
}

function clear() {
  input.value = 0;
  result = "";
  operCheck = false;
  equlasCheck = true;
}

init();
