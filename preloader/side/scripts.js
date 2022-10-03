document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(function(){
        preloader.classList.add('show');
    }, 500);
    setTimeout(function(){
        preloader_logo.classList.add('show');
    }, 1500);
});
window.addEventListener('load', (event) => {
    setTimeout(function(){
        preloader_logo.classList.remove('show');
    }, 500);
    setTimeout(function(){
        preloader.classList.remove('show');
    }, 1500);
});