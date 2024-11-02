const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchInput.addEventListener('focus', () => {
    searchInput.style.width = '300px';
    searchIcon.style.left = 'calc(100% - 130px)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.width = '150px';
    searchIcon.style.left = '20px'; 
});
