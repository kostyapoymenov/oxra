// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height === 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP((support) => {
    const className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

export function toggleMobMenu() {
  const btnMobMenu = document.getElementById("btnMobMenu");
  const body = document.querySelector("body");

  btnMobMenu.addEventListener("click", () => {
    if (body.classList.contains("mob-menu-active")) {
      body.classList.remove("mob-menu-active");
      btnMobMenu.classList.remove("burger-block--active");
    } else {
      body.classList.add("mob-menu-active");
      btnMobMenu.classList.add("burger-block--active");
    }
  });

  [...document.querySelectorAll(".menu-mob__icon")].forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.parentElement.classList.contains("active")) {
        e.preventDefault();
        item.parentElement.classList.remove("active");
      } else {
        for (const elem of item.parentElement.children) {
          if (elem.classList.contains("submenu-mob")) {
            e.preventDefault();
            item.parentElement.classList.add("active");
          }
        }
      }
    });
    [...document.querySelectorAll(".submenu-mob__link")].forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  });
}

function findOffset(element) {
  var top = 0,
    left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left,
  };
}

export function scrollFixedHeader() {
  var stickyHeader = document.getElementsByClassName("header");
  var headerOffset = findOffset(stickyHeader);
  var bodyScrollTop =
    document.documentElement.scrollTop - 70 || document.body.scrollTop;

  if (bodyScrollTop > headerOffset.top) {
    stickyHeader[0].classList.add("fixed");
  }

  window.onscroll = function () {
    bodyScrollTop =
      document.documentElement.scrollTop - 70 || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader[0].classList.add("fixed");
    } else {
      stickyHeader[0].classList.remove("fixed");
    }
  };
}
