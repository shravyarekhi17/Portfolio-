/* the click effect so it animates*/
const menu = document.querySelector('#mobile-menu'); /*#mobile-menu is targetd in javascript which is coded in index.html which is span bar area*/
const menuLinks = document.querySelector('.navbar__menu'); /*.navbar__menu is targeted in javascript which is coded in index.html which is the menu area (all ul)*/


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); /*toggle the class is-active*/
    menuLinks.classList.toggle('active'); /*toggle the class active*/
});
