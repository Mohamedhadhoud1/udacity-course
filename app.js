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


// Define Global Variables
let lastId = 3;

// calling main functions
goTop()
secScroll();
onTheMove();


// adding section with function
function addSection() {
    lastId++;
    let sectionHtml = ` <section id="section${lastId}" data-nav="Section ${lastId}">
<div class="landing__container">
    <h2>Section ${lastId}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci
        eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
        in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet
        porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`

    document.getElementById('main').insertAdjacentHTML('beforeend', sectionHtml);
    addMenu();
    onTheMove();
}

//adding menu item function

function addMenu() {
    let menuHtml = `<li class="nav-item">
    <a class="menu__link" href="#section${lastId}" data-id='section${lastId}' id="${lastId}">section${lastId}</a>
 </li>`;
    document.getElementById('navbar__list').insertAdjacentHTML('beforeend', menuHtml);
}




// Scroll to anchor ID using scrollTO event
function secScroll() {
    let mainMenu = document.getElementById('navbar__list');

    mainMenu.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById(event.target.dataset.id).scrollIntoView({ behavior: "smooth" });

        activeSection(event.target.dataset.id);
        active(event.target.id);
    });
}


// Set mune item as active
function active(id) {
    //  let mainMenu = document.getElementById('navbar__list');
    if (document.querySelector('.active') != null) document.querySelector('.active').classList.remove('active');
    document.getElementById(id).classList.add('active');
}



// set sections as active
function activeSection(id) {
    if (document.querySelector('.your-active-class') != null) document.querySelector('.your-active-class').classList.remove('active');
    document.getElementById(id).classList.add('your-active-class');
}


// go to the top of the page function
function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (document.querySelector('.active') != null) document.querySelector('.active').classList.remove('active');

}



// function that chick if the section is in veiwport
function isInViewport(el) {
    const sectionRect = el.getBoundingClientRect();
    return (
        sectionRect.top >= 0 &&
        sectionRect.left >= 0 &&
        sectionRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        sectionRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// function that make section active when i'm scrolling
function onTheMove() {
    let sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function() {
        sections.forEach(function(section) {
            let state = isInViewport(section);
            if (state == true) {
                active((section.id).charAt(7));
                activeSection(section.id);
            }

        });
    });
}