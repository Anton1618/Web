// Декоративный текст, перемещающийся при скроле
window.addEventListener('scroll', function() {
    const decorText = document.querySelector('.decor-text');
    decorText.style.transform = `translateX(-${window.scrollY}px)`;
});