

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
const video = document.querySelector('video.myvideo2');

const animateProperties = (element, properties, duration, easing) => {
    const start = performance.now();
    const startStyles = {};

    for (const property in properties) {
        startStyles[property] = parseFloat(getComputedStyle(element)[property]);
    }

    const tick = (timestamp) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);

        for (const property in properties) {
            const startValue = startStyles[property];
            const endValue = parseFloat(properties[property]);
            const delta = endValue - startValue;

            element.style[property] = startValue + delta * easing(progress) + 'px';
        }

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
};

// Linear easing
const linear = (t) => t;

// Custom ease-out bounce effect
const easeOutBounce = (t) => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
};


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

        vid_motion.src = 'assets/globs/sun.webm';
        
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
        // Animate the video
        // vid_motion.classList.remove('hidden');
        // vid_motion.style.position = 'absolute';
        // vid_motion.style.transition = 'transform 2s ease, right 2s ease, bottom 2s ease';
        // vid_motion.style.transform = 'scale(0.5)';
        // vid_motion.style.left = '40%';
        // vid_motion.style.top = '100%';
        // Animate the video
        vid_motion.style.opacity = '1'; // Start with opacity 0
        vid_motion.classList.remove('hidden');
        vid_motion.style.position = 'absolute';
        vid_motion.style.transition = 'transform 5s ease, right 5s ease, bottom 5s ease, opacity 1s ease'; // Include opacity in transition
        vid_motion.style.transform = 'scale(0.5)'; // Initial scale
        vid_motion.style.left = '40%';
        vid_motion.style.top = '100%'; // Start position (off-screen)

        vid_motion.style.opacity = '1'; // Start with opacity 0

        // Trigger a reflow to restart the animation
        void vid_motion.offsetWidth;

        // Set the final styles for the animation
        // vid_motion.style.transform = 'translate(20px, -50%) scale(1)'; // Adjust as needed for right/down movement
        vid_motion.style.top = '100%'; // End position (adjust as necessary)
        // vid_motion.style.opacity = '1'; // Fade in
        // Fade in after the transform transition is complete
        setTimeout(() => {
            vid_motion.style.opacity = '1'; // Fade in
        }, 1000);
       

        // animateProperties(video, { left: '40', top: '100%', width: '340' }, 1000, linear);
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
        vid_motion.src = 'assets/globs/sun.webm';

        // vid_motion.classList.add('hidden');
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

        // vid_motion.classList.add('hidden');
        video3.play(); 

    } else {

        text2.classList.add('hidden');
        // Reset to initial state for section 1
        vid_motion.classList.remove('hidden');
        vid_motion.style.transform = 'scale(1)';
        vid_motion.style.left = '50%'; // Center in section 1
        vid_motion.style.top = '80%';  // Adjust as needed for section 1
        vid_motion.style.transition = 'transform 5s ease, left 5s ease, top 5s ease, opacity 1s ease'; // Include opacity in transition
        vid_motion.style.position = 'absolute';
        vid_motion.style.top = '';
        vid_motion.style.left = '';
        vid_motion.style.transform = 'scale(1) translateX(0)';
        // vid_motion.classList.remove('reshap');
        // Start the animation after a slight delay
       
        // section2.style.visibility = 'hidden';
    }
}


const sections_ = document.querySelectorAll('.section');
const reduceOpacity = 0.012;
const fullOpacity = 1;

// Function to adjust opacity based on visible section
const adjustSectionOpacity = () => {
    sections_.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            // Set full opacity to the section in view
            section.style.opacity = fullOpacity;

            // Reduce opacity of previous and next sections_
            if (sections_[index - 1]) {
                sections_[index - 1].style.opacity = reduceOpacity;
            }
            if (sections_[index + 1]) {
                sections_[index + 1].style.opacity = reduceOpacity;
            }
        } else {
            // Reset opacity for sections_ not in view
            section.style.opacity = reduceOpacity;
        }
    });
};

// Event listener for scrolling
window.addEventListener('scroll', adjustSectionOpacity);

// Initial call to set the opacity correctly on load
adjustSectionOpacity();
