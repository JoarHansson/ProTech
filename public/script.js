/* Language button: */
const buttonSwitchLanguage = document.querySelector("#button-switch-language");

// change from SWE to ENG and vice versa
buttonSwitchLanguage.addEventListener("click", () => {
  if (buttonSwitchLanguage.innerText == "SWE") {
    buttonSwitchLanguage.innerText = "ENG";
  } else if (buttonSwitchLanguage.innerText == "ENG") {
    buttonSwitchLanguage.innerText = "SWE";
  }
});

/* Sign up-form: */
const buttonsJoinCommunity = document.querySelectorAll(
  ".button-join-community",
);
const inputsJoinCommunity = document.querySelectorAll(".input-join-community");

// change apperance of .button-join-community and .input-join-community
buttonsJoinCommunity.forEach((button) => {
  button.addEventListener("click", () => {
    inputsJoinCommunity.forEach((input) => {
      if (/.*@.*\..*/.test(input.value)) {
        button.textContent = "VI HÖRS PÅ MEJLEN";
        button.classList.remove("bg-white", "text-black");
        button.classList.add("bg-emerald-900", "text-white");
        button.disabled = true;

        input.classList.remove("text-black", "border-white", "font-normal");
        input.classList.add(
          "text-emerald-900",
          "border-emerald-900",
          "font-bold",
        );
        input.disabled = true;
      } else if (input.value === "") {
        // make sure the two forms on the page don't affect each other...
        return;
      } else {
        input.classList.remove("text-black", "border-white");
        input.classList.add("text-rose-600", "border-rose-600");
      }
    });
  });
});

// remove rose color (warning) and invalid text when input is clicked
inputsJoinCommunity.forEach((input) => {
  input.addEventListener("click", () => {
    if (input.classList.contains("text-rose-600")) {
      input.classList.remove("text-rose-600", "border-rose-600");
      input.classList.add("text-black", "border-white");
      input.value = "";
    }
  });
});

// remove rose color (warning) and invalid text when any key is pressed
inputsJoinCommunity.forEach((input) => {
  input.addEventListener("keydown", () => {
    if (input.classList.contains("text-rose-600")) {
      input.classList.remove("text-rose-600", "border-rose-600");
      input.classList.add("text-black", "border-white");
      input.value = "";
    }
  });
});

/* Drop-down menu: */
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
