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
    // change icon and logo colors
    event.target.src = "../assets/icon-X-black.png";
    logoProTech.src = "../assets/logo-PT-black.png";
    logoBear.src = "../assets/logo-bear-black.png";

    // disable scrolling of the background
    document.body.classList.add("overflow-hidden");

    // create drop-down menu
    header.classList.add(
      "bg-white",
      "fixed",
      "top-0",
      "right-0",
      "bottom-0",
      "left-0",
      "z-50",
      "overflow-y-auto",
    );

    const list = document.createElement("ul");
    list.classList.add("mt-10");

    const menuItems = ["Upptäck", "Medlem", "Butik", "Kontakt"];

    // populate drop-down menu
    menuItems.forEach((item) => {
      const listItem = document.createElement("li");
      const containerTextAndIcon = document.createElement("div");
      const listItemText = document.createElement("p");
      const listItemIconArrow = document.createElement("img");
      const lineBelowText = document.createElement("div");

      // heirarchy of elements:
      // listItem
      // -- containerTextAndIcon
      // ---- listItemText
      // ---- listItemIconArrow
      // -- lineBelowText

      listItemText.textContent = item;
      listItemText.classList.add("text-black", "text-2xl", "font-normal");

      listItemIconArrow.src = "../assets/icon_sharp-arrow-right-black.png";

      containerTextAndIcon.appendChild(listItemText);
      containerTextAndIcon.appendChild(listItemIconArrow);
      containerTextAndIcon.classList.add(
        "flex",
        "justify-between",
        "items-center",
      );

      lineBelowText.classList.add("bg-black", "h-[1px]", "w-full");

      listItem.appendChild(containerTextAndIcon);
      listItem.appendChild(lineBelowText);
      listItem.classList.add("mt-16");

      list.appendChild(listItem);
    });

    header.appendChild(list);
  } else if (event.target.src.includes("assets/icon-X-black.png")) {
    // change icon and logo colors
    event.target.src = "../assets/icon-hamburger-menu.png";
    logoProTech.src = "../assets/logo-PT-white.png";
    logoBear.src = "../assets/logo-bear-white.png";

    // enable scrolling again
    document.body.classList.remove("overflow-hidden");

    // remove drop-down menu
    header.classList.remove(
      "bg-white",
      "fixed",
      "top-0",
      "right-0",
      "bottom-0",
      "left-0",
      "z-50",
      "overflow-y-auto",
    );

    header.removeChild(header.lastElementChild);
  }
});
