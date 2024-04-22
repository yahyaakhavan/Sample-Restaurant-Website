// const toggler = document.querySelector(".branches--details__item");
// const t = document.querySelector(".branches--details__item");
// toggler.addEventListener("click", (e) => {
//   console.log("clicked");
//   t.classList.toggle("active");
// });
function AddActive(b) {
  const a = document.getElementsByClassName("branches--details__item");
  console.log(a);
  for (i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
  }
  b.classList.add("active");
}
function GetChild(d) {
  console.log(d);
  const getChild = document.getElementsByClassName("Header_item");
  console.log(getChild);
  // console.log(getChild[1].querySelector(".Header_item_dropdown").classList[1]);
  // console.log(getChild[1].children);
  const parentElement = d.parentElement.parentElement;
  console.log(parentElement);
  if (parentElement.classList[1] == "show") {
    console.log("yes");
    parentElement.classList.remove("show");
  } else {
    for (i = 0; i < getChild.length; i++) {
      getChild[i].classList.remove("show");
    }
    parentElement.classList.add("show");
  }
}
function RemoveShowToBaseWrapper() {
  const t = document.querySelector(".Base-Transparent-wrapper");
  const y = document.querySelector(".homePageContainer");
  t.classList.remove("show");
  y.classList.remove("show");
}
function AddShowToBaseWrapper() {
  const t = document.querySelector(".Base-Transparent-wrapper");
  const y = document.querySelector(".homePageContainer");
  loginFormTxt.value = "";
  loginFromBtn.classList.remove("button");
  loginFromBtn.disabled = true;
  t.classList.add("show");
  y.classList.add("show");
}
const loginForm = document.querySelector(".loginForm");
const confirmOtpForm = document.querySelector(".loginform--ConfirmOTP");
const loginFromBtn = document.querySelector(".buttonDeactive");
const loginFormTxt = document.querySelector(".loginForm__tel");
const confirmOTPClose = document.querySelector(".ConfirmOTP--header__close");
const confirmOTPbtn = document.querySelector(".ConfirmOTP.button");

confirmOTPClose.addEventListener("click", () => {
  loginForm.classList.remove("hide");
  confirmOtpForm.classList.add("hide");
  clearInterval(optIntervalId);
});
let optIntervalId;
loginFromBtn.addEventListener("click", () => {
  loginForm.classList.add("hide");
  confirmOtpForm.classList.remove("hide");
  document.querySelector(
    ".ConfirmOTP--body__custnum"
  ).innerHTML = `کد تایید به شماره ${loginFormTxt.value} ارسال گردید.`;
  optIntervalId = downtime(121);
});

loginFormTxt.addEventListener("input", (e) => {
  if (loginFormTxt.value != "") {
    loginFromBtn.disabled = false;
    loginFromBtn.classList.remove("buttonDeactive");
    loginFromBtn.classList.add("button");
  } else {
    loginFromBtn.disabled = true;
    loginFromBtn.classList.remove("button");
    loginFromBtn.classList.add("buttonDeactive");
  }
});

function downtime(time) {
  const intervalId = setInterval(inner, 1000);
  const downTimeDiv = document.querySelector(".countdown__counter");

  function inner() {
    if (time === 0) {
      clearInterval(intervalId);
    } else {
      time--;
      let sec = String(time % 60);
      let min = String(Math.trunc(time / 60));
      downTimeDiv.innerHTML = `${sec.padStart(2, 0)} : ${min.padStart(2, 0)}`;
    }
  }
  inner();
  return intervalId;
}
const otpInputs = document.querySelectorAll(".otpInput");
getAndValidateotpCode = () => {
  let otpCode = [];
  otpInputs.forEach((v) => {
    otpCode.push(v.value);
  });
  otpCode = otpCode.reverse().join("");
  return otpCode;
};
confirmOTPbtn.addEventListener("click", () => {
  if (getAndValidateotpCode() != "60856") {
    otpInputs.forEach((v) => {
      v.classList.add("wrongotp");
    });
  } else {
    otpInputs.forEach((v) => {
      v.classList.remove("wrongotp");
    });
  }
});
