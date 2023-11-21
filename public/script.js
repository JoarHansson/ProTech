// change from SWE to ENG and vice versa

const buttonSwitchLanguage = document.querySelector("#button-switch-language");
buttonSwitchLanguage.addEventListener("click", () => {
  if (buttonSwitchLanguage.innerText == "SWE") {
    buttonSwitchLanguage.innerText = "ENG";
  } else if (buttonSwitchLanguage.innerText == "ENG") {
    buttonSwitchLanguage.innerText = "SWE";
  }
});

// change apperance of #button-join-community
const buttonJoinCommunity = document.querySelector("#button-join-community");

buttonJoinCommunity.addEventListener("click", () => {
  if (buttonJoinCommunity.innerText == "GÅ MED I COMMUNITY") {
    buttonJoinCommunity.innerText = "VI HÖRS PÅ MEJLEN";
    buttonJoinCommunity.classList.remove("bg-white");
    buttonJoinCommunity.classList.add("bg-emerald-900");
    buttonJoinCommunity.classList.remove("text-black");
    buttonJoinCommunity.classList.add("text-white");
  } else if (buttonJoinCommunity.innerText == "VI HÖRS PÅ MEJLEN") {
    buttonJoinCommunity.innerText = "GÅ MED I COMMUNITY";
    buttonJoinCommunity.classList.remove("bg-emerald-900");
    buttonJoinCommunity.classList.add("bg-white");
    buttonJoinCommunity.classList.remove("text-white");
    buttonJoinCommunity.classList.add("text-black");
  }
});
