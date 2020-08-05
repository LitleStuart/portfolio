const changeTheme = document.getElementById('changeTheme');
const theme = document.getElementById('style');
const keksImage = document.getElementById('keksImage');
let darkThemeEnabled = true;

changeTheme.addEventListener('click', () => {
    if (darkThemeEnabled) {
        theme.href = 'style.css';
        keksImage.setAttribute('src', 'files/project.jpg');
        darkThemeEnabled = false;
    } else {
        theme.href = 'dark-theme/style.css';
        keksImage.setAttribute('src', '../files/project1.jpg');
        darkThemeEnabled = true;
    }
})