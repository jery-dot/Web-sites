let currentSection = 0;
const sections = document.querySelectorAll(".section");
const globe1 = document.getElementById("glob1");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
// const section2 = document.getElementById('section2');
const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const video3 = document.getElementById("video-3");
const content = document.getElementById("section4-content");
const text2 = document.getElementById("sect2-text");

// Initial globe1 styles for section 1
// globe1.style.transition = 'transform 2s ease, left 2s ease, top 2s ease';
// globe1.style.position = 'absolute';
// globe1.style.left = '50%'; // Center in section 1
// globe1.style.top = '80%';  // Adjust this as needed
//

/*document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
            handleGlobeTransition(currentSection);
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
            handleGlobeTransition(currentSection);
        }
    }
});*/
// Function to detect the current section based on scroll position
function detectCurrentSection() {
  let currentSectionIndex = 0;

  // Loop through all sections to find the current section based on scroll position
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop; // Distance from the top of the page
    const sectionHeight = section.offsetHeight; // Height of the section
    const scrollPosition = window.scrollY; // Current scroll position

    // Check if the current scroll position is within the section's range
    if (
      scrollPosition >= sectionTop - sectionHeight / 2 &&
      scrollPosition < sectionTop + sectionHeight / 2
    ) {
      currentSectionIndex = index;
    }
  });

  // Set the global currentSection variable to the detected section
  currentSection = currentSectionIndex;

  // Optionally, log the current section index for debugging
  console.log("Current Section:", currentSection);

  // You can also trigger functions or animations based on the detected section
  handleGlobeTransition(currentSection); // Call your transition function based on the new current section
}

// Add event listener for scroll events to detect the current section in real-time
window.addEventListener("scroll", detectCurrentSection);
addEventListener("load", detectCurrentSection);
function scrollToSection(sectionIndex) {
  sections[sectionIndex].scrollIntoView({
    behavior: "smooth"
  });
}
function handleGlobeTransition(section) {
  if (section === 1) {
    text2.classList.remove("hidden");
    const textDiv = document.querySelector(".section2 .text");
    if (textDiv) {
      textDiv.setAttribute("data-aos", "zoom-out-up");
      textDiv.setAttribute("data-aos-offset", "200");
      textDiv.setAttribute("data-aos-delay", "50");
      textDiv.setAttribute("data-aos-duration", "2000");
      textDiv.setAttribute("data-aos-mirror", "true");
      textDiv.setAttribute("data-aos-once", "false");
    }
    globe1.classList.remove("hidden");
    globe1.style.position = "absolute";
    // globe1.style.position = '-webkit - sticky !important';
    // globe1.style.position = 'sticky !important';
    globe1.style.transition =
      "transform 2s ease, right 2s ease, bottom 2s ease";
    globe1.style.transform = "scale(0.5)";
    globe1.style.left = "40%";
    globe1.style.top = "95%";
    // section2.style.visibility = 'visible';
    // globe1.classList.add('reshap');
    // Check if the footer of section 2 is reached
    const footer = document.querySelector(".section2-content"); // Adjust selector as necessary
    const footerRect = footer.getBoundingClientRect();

    if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
      // Apply specific property when footer is visible
      // globe1.style.top = '5%';
      globe1.style.transition = "opacity 1s ease"; // Smooth transition for the property
    } else {
      globe1.style.top = "95%";
      globe1.style.opacity = "1"; // Reset opacity if not in the footer area
    }
  } else if (section === 2) {
    text2.classList.add("hidden");
    // Reset to initial state for section 1
    globe1.classList.remove("hidden");
    globe1.style.position = "fixed";
    globe1.style.transition =
      "transform 1s ease, right 7s ease-in-out, bottom 10s ease";
    globe1.style.transform = "scale(0.4, 0.5)";

    // Position it at the bottom center
    globe1.style.left = ""; // Center horizontally by subtracting half the width
    setTimeout(() => {
      globe1.style.top = "45%"; // Move to the bottom of section 3
    }, 10);
    globe1.style.position = "fixed"; // Keep it in view during the scroll
    // globe1.style.position = 'absolute';
  } else if (section === 3) {
    globe1.classList.add("hidden");
    video1.classList.remove("hidden");
    video2.classList.add("hidden");
    content.classList.add("hidden");
    video1.play(); // Start the first video when scrolled to section

    video1.onended = function() {
      video1.classList.add("hidden"); // Hide the first video after it finishes
      video2.classList.remove("hidden"); // Show the second video
      content.classList.remove("hidden"); // Display the HTML content
      video2.play();
    };
    // video2.classList.remove('hidden');  // Show the second video
    // content.classList.remove('hidden');
  } else if (section === 4) {
    globe1.classList.add("hidden");
    video3.play();
  } else {
    text2.classList.add("hidden");
    // Reset to initial state for section 1
    globe1.classList.remove("hidden");
    globe1.style.transform = "scale(1)";
    globe1.style.left = "50%"; // Center in section 1
    globe1.style.top = "80%"; // Adjust as needed for section 1

    globe1.style.position = "absolute";
    globe1.style.top = "";
    globe1.style.left = "";
    globe1.style.transform = "scale(1) translateX(0)";
    globe1.classList.remove("reshap");
    smallGlobe.style.transform = "translate(50px, 50px)";
    // section2.style.visibility = 'hidden';
  }
}
