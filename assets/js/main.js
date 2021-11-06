
let navli = document.getElementById('navli')

function openMenu() {
    navli.style.opacity = "1"
    navli.style.transform = "translateY(0%)"
}
function closeNav() {
    navli.style.opacity = "0"
    navli.style.transform = "translateY(100%)"
}