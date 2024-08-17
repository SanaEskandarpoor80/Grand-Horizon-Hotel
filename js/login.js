function openLoginModal() {
    const loginModalContainer = document.querySelector('.login-modal-container');

    loginModalContainer.style.height = '100vh';
    loginModalContainer.style.opacity = '1';
}
function closeLoginModal() {
    const loginModalContainer = document.querySelector('.login-modal-container');
    const passwordInput = document.getElementById('PasswordLogin');
    const usernameInput = document.getElementById('UserNameLogin');

    loginModalContainer.style.removeProperty('height');
    loginModalContainer.style.removeProperty('opacity');

    passwordInput.value = '';
    usernameInput.value = '';
}
const tabButtons = document.querySelectorAll('.tab-btn')

tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => tabClicked(tab))
})

function tabClicked(tab) {

    tabButtons.forEach(tab => {
        tab.classList.remove('active')
    })
    tab.classList.add('active')

    const contents = document.querySelectorAll('.tab-content')

    contents.forEach((content) => {
        content.classList.remove('show')
    })

    const contentId = tab.getAttribute('content-id')
    const contentSelected = document.getElementById(contentId)

    contentSelected.classList.add('show')
}
