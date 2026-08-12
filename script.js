// =====================================================
// NEXORA ENGINEERING
// MAIN JAVASCRIPT
// =====================================================

// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if (menuBtn && navMenu) {

```
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
```

}

// ================= CLOSE MOBILE MENU =================

navLinks.forEach(function (link) {

```
link.addEventListener("click", function () {

    if (navMenu) {
        navMenu.classList.remove("active");
    }

});
```

});

// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

```
let currentSection = "";

sections.forEach(function (section) {

    const sectionTop = section.offsetTop - 160;
    const sectionHeight = section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute("id");
    }

});


navLinks.forEach(function (link) {

    link.classList.remove("active");

    const linkTarget = link.getAttribute("href");

    if (linkTarget === "#" + currentSection) {
        link.classList.add("active");
    }

});
```

});

// ================= SMOOTH SCROLL =================

navLinks.forEach(function (link) {

```
link.addEventListener("click", function (event) {

    const target = link.getAttribute("href");

    if (
        target &&
        target.startsWith("#") &&
        target.length > 1
    ) {

        const section = document.querySelector(target);

        if (section) {

            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

});
```

});

// ================= PAGE LOADED =================

document.addEventListener("DOMContentLoaded", function () {

```
console.log(
    "Nexora Engineering website loaded successfully."
);
```

});
/* ================= PROJECT OVERVIEW ================= */

function openProjectOverview(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}


function closeProjectOverview(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}