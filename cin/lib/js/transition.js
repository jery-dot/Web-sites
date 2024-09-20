let currentSection = 0;
const sections = document.querySelectorAll('.section');
const globe1 = document.getElementById('glob1');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

// Initial globe1 styles for section 1
// globe1.style.transition = 'transform 2s ease, left 2s ease, top 2s ease';
// globe1.style.position = 'absolute';
// globe1.style.left = '50%'; // Center in section 1
// globe1.style.top = '80%';  // Adjust this as needed
// 

document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
            handleGlobeTransition();
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
            handleGlobeTransition();
        }
    }
});

function scrollToSection(sectionIndex) {
    sections[sectionIndex].scrollIntoView({
        behavior: 'smooth'
    });
}
function handleGlobeTransition() {
    if (currentSection === 1) {
        // Reset to initial state for section 1
        // globe1.style.transform = 'scale(0.5) translate(0, 80vw)';
        globe1.style.position = 'fixed';
        globe1.style.transition = 'transform 2s ease, right 2s ease, bottom 2s ease';
        globe1.style.transform = 'scale(0.5)';
        globe1.style.left = '40%';
        globe1.style.top = '95%';
        globe1.style.position = 'absolute';
        // globe1.classList.add('reshap');
        // globe1.style.transform = 'translate(-100px, -100px)';
        // globe1.style.transform = 'translate(-25%, -25%) scale(0.5)';
        section2.style.visibility = 'visible';
        // globe1.classList.add('reshap');
       
    } else if (currentSection === 2) {
        // Transition when entering section 3
        // globe1.style.transition = 'transform 2s ease, left 2s ease, top 2s ease';
        // globe1.style.transform = 'scale(0.4)';
        // Set the width and height of the globe
        globe1.style.width = '55%';
        globe1.style.height = '100%';

        // Position it at the bottom center
        globe1.style.left = ''; // Center horizontally by subtracting half the width
        // globe1.style.right = '10px'; // Center horizontally in section 3
        // globe1.style.left = ''; // Center horizontally in section 3
        globe1.style.top = '45%';  // Move to the bottom of section 3
        globe1.style.position = 'fixed'; // Keep it in view during the scroll
        // globe1.style.transform = 'translateX(-2px)';

    } else {
        // Reset to initial state for section 1
        globe1.style.transform = 'scale(1)';
        globe1.style.left = '50%'; // Center in section 1
        globe1.style.top = '80%';  // Adjust as needed for section 1

        globe1.style.position = 'absolute';
        globe1.style.top = '';
        globe1.style.left = '';
        globe1.style.transform = 'scale(1) translateX(0)';
        // globe1.style.transition = 'transform 2s ease, right 2s ease, bottom 2s ease';
        // globe1.style.transition = 'transform 2s ease, top 2s ease, left 2s ease';
        globe1.classList.remove('reshap');
        smallGlobe.style.transform = 'translate(50px, 50px)';
        section2.style.visibility = 'hidden';
    }
}
