const pageMap = {
  "index.html": "home",
  "about.html": "about",
  "services.html": "services",
  "contact.html": "contact"
};

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const currentNav = pageMap[currentPath];

if (currentNav) {
  const currentLink = document.querySelector(`a[data-nav="${currentNav}"]`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
}

