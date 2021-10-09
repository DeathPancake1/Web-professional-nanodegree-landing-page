/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/**
 * Define Global Variables
 * 
*/
let sections=document.querySelectorAll(`section`);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function elemInView(element){
    let rec=element.getBoundingClientRect();
    return rec.top >= 0 &&
    rec.left >= 0 &&
    rec.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
    rec.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function addNavigationItem(){
    const fragment = document.createDocumentFragment();
    for(const section of sections){
        //extract name and link of the section from the html element
        let name=section.getAttribute('data-nav');
        let link=section.getAttribute('id');
        const navItem= document.createElement('li');
        navItem.innerHTML=`<a class='menu__link' href='#${link}'>${name}</a>`;
        fragment.appendChild(navItem);
    }
    document.getElementById('navbar__list').appendChild(fragment);
}
function toggleActive(){
    for(const section of sections){
        if(elemInView(section)){
            for(const sec of sections){
                sec.classList.remove('your-active-class');
            }
            section.classList.add('your-active-class');
        }
    }
}
function showNav(){
    let navBar=document.querySelector('.page__header');
    navBar.classList.remove('navbar__inv');
}
function hideNav(){
    let navBar=document.querySelector('.page__header');
    navBar.classList.add('navbar__inv');
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

addNavigationItem();
setTimeout(hideNav,5000);
document.addEventListener('scroll',function(){
    toggleActive();
    showNav();
    setTimeout(hideNav,5000);
});