window.onscroll = function() {
    growShrinkLogo()
};
window.onload = function() {
    growShrinkLogo()
};
function growShrinkLogo() {
    var Logo = document.getElementById("psgLogo")
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        Logo.style.height = '70px';
        Logo.style.width = '70px';
    } else {
        Logo.style.height = '70px';
        Logo.style.width = '70px';
    }
}
