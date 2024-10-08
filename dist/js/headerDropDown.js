const headerDrop = document.querySelectorAll("ul.header__nav li.nav a");
headerDrop.forEach((drop) => {
    drop.addEventListener(("click"), () => {
        drop.querySelector("i").classList.toggle("open");
        drop.nextElementSibling.classList.toggle("open");
        drop.classList.toggle("open");
    })
})