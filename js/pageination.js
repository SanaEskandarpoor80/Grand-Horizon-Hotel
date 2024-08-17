const progress = document.getElementById('progress')
const back = document.getElementById('back')
const next = document.getElementById('next')
const wraps = document.querySelectorAll('.text-wrap')

let currentActive = parseInt(localStorage.getItem('currentActive')) || 1;

document.addEventListener('DOMContentLoaded', function() {
    update();

    const textWraps = document.querySelectorAll('.text-wrap');
    const stepForms = document.querySelectorAll('.Step-form');

    function deactivateAll() {
        textWraps.forEach(el => el.classList.remove('active'));
        stepForms.forEach(el => el.classList.remove('active-form'));
    }

    textWraps.forEach((wrap, index) => {
        wrap.addEventListener('click', () => {
            currentActive = index + 1;
            localStorage.setItem('currentActive', currentActive);
            deactivateAll();
            wrap.classList.add('active');
            document.getElementById(`${wrap.id}-step`).classList.add('active-form');
            update();
        });
    });
});

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > wraps.length) {
        currentActive = wraps.length
    }
    localStorage.setItem('currentActive', currentActive);
    update()
})

back.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }
    localStorage.setItem('currentActive', currentActive);
    update()
})

function update() {
    wraps.forEach((wrap, index) => {
        if(index < currentActive) {
            wrap.classList.add('active')
        } else {
            wrap.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (wraps.length - 1) * 90 + '%'

    if(currentActive === 1) {
        back.disabled = true
    } else {
        back.disabled = false
    }

    if(currentActive === wraps.length) {
        next.disabled = true
    } else {
        next.disabled = false
    }

    const stepForms = document.querySelectorAll('.Step-form');
    stepForms.forEach(form => form.classList.remove('active-form'));
    document.getElementById(`${wraps[currentActive - 1].id}-step`).classList.add('active-form');
}

function checkAllActive() {
    let allActive = true;
    wraps.forEach(wrap => {
        if (!wrap.classList.contains('active')) {
            allActive = false;
        }
    });

    if (allActive) {
        back.disabled = false;
    }
}

checkAllActive();