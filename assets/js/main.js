const pageMap = {
  "": "home",
  "about": "about",
  "services": "services",
  "contact": "contact"
};

const segments = window.location.pathname.replace(/\/$/, "").split("/").filter(Boolean);
const currentPath = segments.length ? segments[segments.length - 1] : "";
const currentNav = pageMap[currentPath];

if (currentNav) {
  const currentLink = document.querySelector(`a[data-nav="${currentNav}"]`);
  if (currentLink) {
    currentLink.classList.add("active");
  }
}

