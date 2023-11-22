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

// display and remove drop-down menu
const header = document.querySelector("header");
const buttonMenu = document.querySelector("#button-menu");
const logoProTech = document.querySelector("#logo-pro-tech");
const logoBear = document.querySelector("#logo-bear");

buttonMenu.addEventListener("click", (event) => {
  if (event.target.src.includes("assets/icon-hamburger-menu.png")) {
    event.target.src = "../assets/icon-X-black.png";

    logoProTech.src = "../assets/logo-PT-black.png";
    logoBear.src = "../assets/logo-bear-black.png";

    const menuItems = ["Discover", "Members", "Shop", "Cart"];

    const list = document.createElement("ul");
    list.classList.add("mt-10");
    header.classList.add("pb-64");
    header.classList.add("bg-white");

    menuItems.forEach((item) => {
      const listItem = document.createElement("li");
      const containerTextAndIcon = document.createElement("div");
      const listItemText = document.createElement("p");
      const listItemIconArrow = document.createElement("img");
      const lineBelowText = document.createElement("div");

      // heirarchy:
      // listItem
      // -- containerTextAndIcon
      // ---- listItemText
      // ---- listItemIconArrow
      // -- lineBelowText

      listItemText.textContent = item;
      listItemText.classList.add("text-black");
      listItemText.classList.add("text-2xl");
      listItemText.classList.add("font-normal");
      containerTextAndIcon.appendChild(listItemText);

      listItemIconArrow.src = "../assets/icon_sharp-arrow-drop-down-black.png";
      containerTextAndIcon.appendChild(listItemIconArrow);

      containerTextAndIcon.classList.add("flex");
      containerTextAndIcon.classList.add("justify-between");
      containerTextAndIcon.classList.add("items-center");

      listItem.appendChild(containerTextAndIcon);

      lineBelowText.classList.add("bg-black");
      lineBelowText.classList.add("h-[1px]");
      lineBelowText.classList.add("w-full");

      listItem.appendChild(lineBelowText);

      listItem.classList.add("mt-16");

      list.appendChild(listItem);
    });

    header.appendChild(list);
  } else if (event.target.src.includes("assets/icon-X-black.png")) {
    event.target.src = "../assets/icon-hamburger-menu.png";

    logoProTech.src = "../assets/logo-PT-white.png";
    logoBear.src = "../assets/logo-bear-white.png";

    header.classList.remove("pb-64");
    header.classList.remove("bg-white");

    header.removeChild(header.lastElementChild);
  }
});
