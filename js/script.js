/* === typing animation === */ 
const typed = new Typed('.typing', {
    strings : ['','Web 3.0 Developer', 'Web Designer', 'UI/UX Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
    //showCursor: false // Hides the cursor
});

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for (let i = 0; i < navList.length; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href').substring(1);
        updateActiveNavLink(target);
        const targetURL = `${window.location.origin}${window.location.pathname}#${target}`;
        window.history.pushState({ path: targetURL }, '', targetURL);
    });
}


showSection('home');

function showSection(sectionId) {
    for (let i = 0; i < totalSection; i++) {
        if (allSection[i].id === sectionId) {
            allSection[i].classList.remove('hidden');
            allSection[i].classList.add('fade-in'); // Ensure the target section is faded in
        } else {
            allSection[i].classList.remove('fade-in');
            allSection[i].classList.add('hidden');
        }
    }
}


function updateActiveNavLink(targetId) {
    for (let i = 0; i < navList.length; i++) {
        navList[i].querySelector('a').classList.remove('active');
        if (navList[i].querySelector('a').getAttribute('href') === `#${targetId}`) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        const targetId = event.target.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            showSection(targetId);
            updateActiveNavLink(targetId);
            const targetURL = `${window.location.origin}${window.location.pathname}#${targetId}`;
            window.history.pushState({ path: targetURL }, '', targetURL);
        }
    }
});


// nav bar
const navTogglerBtn = document.querySelector('.aside button');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
    
    const mainContent = document.querySelector('.main-content');
    const aside = document.querySelector('.aside');
    
    aside.classList.toggle('open');
    
    if(aside.classList.contains('open')){
        mainContent.style.left = '270px';
        navTogglerBtn.style.left = '300px';
        aside.style.left = '0';
    }
    else{
        mainContent.style.left = '';
        navTogglerBtn.style.left = '';
        aside.style.left = '';
    }
    
    navTogglerBtn.classList.toggle('fa-bars');
    navTogglerBtn.classList.toggle('fa-times');

    
    function resetAside() {
        aside.classList.remove('open');
        mainContent.style.left = '';
        navTogglerBtn.style.left = '';
        aside.style.left = '';
        if(navTogglerBtn.classList.contains('fa-times')){
            navTogglerBtn.classList.remove('fa-times');
            navTogglerBtn.classList.add('fa-bars');
        }
    }
    
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link =>{
        link.addEventListener('click', resetAside);
    })
    
}