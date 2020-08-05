const changeTheme = document.getElementById('changeTheme');
const theme = document.getElementById('style');
let darkThemeEnabled = false;

changeTheme.addEventListener('click', () => {
    if (darkThemeEnabled) {
        theme.href = 'style.css';
        darkThemeEnabled = false;
    } else {
        theme.href = 'dark-theme/style.css';
        darkThemeEnabled = true;
    }
})