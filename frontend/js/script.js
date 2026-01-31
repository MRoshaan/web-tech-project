// --- 1. MOBILE MENU LOGIC ---
let navbar = document.querySelector('.header .navbar');

// When user clicks the "Hamburger" icon...
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active'); // ...Slide the menu onto the screen
}

// When user clicks the "X" (Close) icon...
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active'); // ...Slide the menu off the screen
}


// --- 2. SEARCH FORM LOGIC ---
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const searchForm = document.querySelector('.search-form');

// When user clicks the "Search" icon...
searchBtn.addEventListener('click', () => {
    searchForm.classList.add('active'); // ...Show the full-screen search box
});

// When user clicks the "Close" button on search...
closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('active'); // ...Hide the search box
});


// --- 3. SCROLLING EFFECTS ---
window.onscroll = () =>{
    // Auto-close the mobile menu if the user starts scrolling
    navbar.classList.remove('active');

    // If user has scrolled down (even 1 pixel)...
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active'); // ...Make header background dark/solid
    }else{
        document.querySelector('.header').classList.remove('active'); // ...Make header transparent again (at top)
    }
};


// --- 4. PAGE RELOAD CHECK ---
window.onload = () =>{
    // Checks position immediately when page loads (in case user refreshes while scrolled down)
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};