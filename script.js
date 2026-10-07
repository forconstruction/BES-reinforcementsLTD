const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

function closeNavigation() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if addEventListener(event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeNavigation();
    menuButton.focus();
  }
});

document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.querySelector("#form-note");
  note.textContent = "Your details have not been sent. This demonstration form is not connected to BES Reinforcements LTD.";
  note.classList.add("is-active");
});

