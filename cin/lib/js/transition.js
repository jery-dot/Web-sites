

let currentSection = 0;
const sections = document.querySelectorAll('.section');
const globe1 = document.getElementById('glob1');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
// const section2 = document.getElementById('section2');
const video1 = document.getElementById('video-1');
const video2 = document.getElementById('video-2');
const video3 = document.getElementById('video-3');
const content = document.getElementById('section4-content');
const text2 = document.getElementById('sect2-text');

const vid_motion = document.getElementById('vid');

// function checkVisibility() {
//     sections.forEach(section => {
//         const rect = section.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         // Check if 5% of the section is in view
//         if (rect.top < windowHeight && rect.bottom > windowHeight * 0.95) {
//             section.classList.remove('hidden'); // Make the section visible
//         } else {
//             section.classList.add('hidden'); // Hide the section
//         }
//     });
// }

// // Add scroll and load event listeners
// window.addEventListener('scroll', checkVisibility);
// window.addEventListener('load', checkVisibility);

// Initially hide all sections
// sections.forEach(section => section.classList.add('hidden'));

// Function to detect the current section based on scroll position
function detectCurrentSection() {
    let currentSectionIndex = 0;

    // Loop through all sections to find the current section based on scroll position
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop; // Distance from the top of the page
        const sectionHeight = section.offsetHeight; // Height of the section
        const scrollPosition = window.scrollY; // Current scroll position

        // Check if the current scroll position is within the section's range
        if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
            currentSectionIndex = index;
        }
    });

    // Set the global currentSection variable to the detected section
    currentSection = currentSectionIndex;

    // Optionally, log the current section index for debugging
    console.log('Current Section:', currentSection);

    // You can also trigger functions or animations based on the detected section
    handleGlobeTransition(currentSection); // Call your transition function based on the new current section
}

// Add event listener for scroll events to detect the current section in real-time
window.addEventListener('scroll', detectCurrentSection);
addEventListener("load", detectCurrentSection);
function scrollToSection(sectionIndex) {
    sections[sectionIndex].scrollIntoView({
        behavior: 'smooth'
    });
}
function handleGlobeTransition(section) {
    if (section === 1) {
        // section1.classList.add('hidden');
        // section2.classList.remove('hidden');
        // section3.classList.add('hidden');
        // section4.classList.add('hidden');
        // section5.classList.add('hidden');
        text2.classList.remove('hidden');
        const textDiv = document.querySelector('.section2 .text');
        if (textDiv) {
            textDiv.setAttribute('data-aos', 'zoom-out-up');
            textDiv.setAttribute('data-aos-offset', '200');
            textDiv.setAttribute('data-aos-delay', '50');
            textDiv.setAttribute('data-aos-duration', '2000');
            textDiv.setAttribute('data-aos-mirror', 'true');
            textDiv.setAttribute('data-aos-once', 'false');
        }
        vid_motion.classList.remove('hidden');
        vid_motion.style.position = 'absolute';
        vid_motion.style.transition = 'transform 2s ease, right 2s ease, bottom 2s ease';
        vid_motion.style.transform = 'scale(0.5)';
        vid_motion.style.left = '40%';
        vid_motion.style.top = '95%';
        const footer = document.querySelector('.section2-content'); // Adjust selector as necessary
        const footerRect = footer.getBoundingClientRect();

        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            // Apply specific property when footer is visible
            // vid_motion.style.top = '5%';
            vid_motion.style.transition = 'opacity 1s ease'; // Smooth transition for the property
        } else {
            vid_motion.style.top = '95%';
            vid_motion.style.opacity = '1'; // Reset opacity if not in the footer area
        }

    } else if (section === 2) {
        // section1.classList.add('hidden');
        // section2.classList.add('hidden');
        // section3.classList.remove('hidden');
        // section4.classList.add('hidden');
        // section5.classList.add('hidden');
        text2.classList.add('hidden');
        // Reset to initial state for section 1
        vid_motion.classList.remove('hidden');
        vid_motion.style.position = 'fixed';
        vid_motion.style.transition = 'transform 1s ease, right 7s ease-in-out, bottom 10s ease';
        vid_motion.style.transform = 'scale(0.5, 0.5)';

        // Position it at the bottom center
        vid_motion.style.left = ''; // Center horizontally by subtracting half the width
        setTimeout(() => {
            vid_motion.style.top = '45%';  // Move to the bottom of section 3
        }, 10); 
        vid_motion.style.position = 'fixed'; // Keep it in view during the scroll
        // vid_motion.style.position = 'absolute';

    } else if (section === 3) {

        // section1.classList.add('hidden');
        // section2.classList.add('hidden');
        // section3.classList.add('hidden');
        // section4.classList.remove('hidden');
        // section5.classList.add('hidden');
        vid_motion.classList.add('hidden');
        video1.classList.remove('hidden');
        video2.classList.add('hidden');
        content.classList.add('hidden');
        video1.play();  // Start the first video when scrolled to section

        video1.onended = function () {
            video1.classList.add('hidden');  // Hide the first video after it finishes
            video2.classList.remove('hidden');  // Show the second video
            content.classList.remove('hidden');  // Display the HTML content
            video2.play();
        };
        // video2.classList.remove('hidden');  // Show the second video
        // content.classList.remove('hidden'); 
    } else if (section === 4) {


        // section1.classList.add('hidden');
        // section2.classList.add('hidden');
        // section3.classList.add('hidden');
        // section4.classList.add('hidden');
        // section5.classList.remove('hidden');
        vid_motion.classList.add('hidden');
        video3.play(); 

    } else {

        // section1.classList.remove('hidden');
        // section2.classList.add('hidden');
        // section3.classList.add('hidden');
        // section4.classList.add('hidden');
        // section5.classList.add('hidden');
        text2.classList.add('hidden');
        // Reset to initial state for section 1
        vid_motion.classList.remove('hidden');
        vid_motion.style.transform = 'scale(1)';
        vid_motion.style.left = '50%'; // Center in section 1
        vid_motion.style.top = '80%';  // Adjust as needed for section 1

        vid_motion.style.position = 'absolute';
        vid_motion.style.top = '';
        vid_motion.style.left = '';
        vid_motion.style.transform = 'scale(1) translateX(0)';
        vid_motion.classList.remove('reshap');
        smallGlobe.style.transform = 'translate(50px, 50px)';
        // section2.style.visibility = 'hidden';
    }
}
