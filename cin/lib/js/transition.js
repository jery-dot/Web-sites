

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
$(document).ready(function () {

    $('body').bind('wheel', function (e) {

        var counter = parseInt($('#hiddenInput').val());
        var counter_circle = parseInt($('#hiddenInputCircle').val());

        if (e.originalEvent.wheelDelta / 120 > 0) {

            if (counter == -1) {

                counter1 = counter + 1;
                counter_circle_1 = counter_circle + 1;
                $("section.section3").hide();
                $("section.section1").show("slow");
                $("section.section2").hide("slow");
                $('video.myvideo2').animate({ left: '0px', top: '585px', width: '32%' }, {
                    duration: 1000, queue: false, specialEasing: {
                        width: "linear",
                        height: "easeOutBounce"
                    }
                });

                setTimeout(function () { updateCounter(counter1) }, 1000);

            }
            else if (counter == -2) {

                counter1 = counter + 1;
                counter_circle_1 = counter_circle + 1;
                $("div.sec-3").hide();
                $("div.sec-1").hide("slow");
                $("div.sec-2").show("slow");
                $('video.myvideo2').animate({ left: '650px', top: '245px', width: '32%' }, {
                    duration: 1000, queue: false, specialEasing: {
                        width: "linear",
                        height: "easeOutBounce"
                    }
                });
                setTimeout(function () { updateCounter(counter1) }, 1000);

            }

        } else {

            counter1 = counter - 1;

            if (counter1 == -1) {
                $("div.sec-3").hide();
                $("div.sec-1").hide("slow");
                $("div.sec-2").show("slow");
                $("div.h1").delay(400).show("slide", { direction: "right" }, 1000);
                $("div.h3").delay(400).show("slide", { direction: "right" }, 1000);
                $('video.myvideo2').animate({ left: '650px', top: '245px', width: '32%' }, {
                    duration: 1000, queue: false, specialEasing: {
                        width: "linear",
                        height: "easeOutBounce"
                    }
                });

                setTimeout(function () { updateCounter(counter1) }, 1000);

                return;
            } else if (counter1 == -2) {
                $('#hiddenInput').val(counter1);
                counter1 = parseInt(counter1);

                $("div.sec-2").hide("slow");
                $("div.sec-3").show("slow");
                $('video.myvideo2').animate({ left: '0px', top: '472px', width: '340px' }, {
                    duration: 1000, queue: false, specialEasing: {
                        width: "linear",
                        height: "easeOutBounce"
                    }
                });

            } else {

                if ($("div.sec-3").is(":visible")) {
                    counter_circle_1 = $('#hiddenInputCircle').val();
                    counter_circle_1 = parseInt(counter_circle_1) - 1;
                    setTimeout(function () { updateCounterCircle(counter_circle_1) }, 500);

                    if (counter_circle_1 == 0) {

                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");
                        $('li.limenu.Neptune a').css("font-weight", "500");

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $(".text1").text("Sun").fadeIn('slow');
                        $(".text2").text("Sun Description").fadeIn('slow');

                        $("video.myvideo2").attr("src", "images/Sun.webm").animate({ left: '0px', top: '423px', width: '54%', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -1) {

                        $('li.limenu.Venus').css("font-weight", "500");
                        $('li.limenu.Earth').css("font-weight", "500");
                        $('li.limenu.Mars').css("font-weight", "500");
                        $('li.limenu.Jupiter').css("font-weight", "500");
                        $('li.limenu.Saturn').css("font-weight", "500");
                        $('li.limenu.Uranus').css("font-weight", "500");
                        $('li.limenu.Neptune').css("font-weight", "500");

                        $('li.limenu.Mercury a').css("font-weight", "900");
                        $(".text1").text("Guaranteed Revenue or your Money Back").fadeIn('slow');
                        $(".text2").text("Tired of getting everything except revenue? Most vendors who give you reach, engagement, promises, likes and efforts but no revenue but we stand behind our services and guarantee realistic revenue or your money back.").fadeIn('slow');

                        $("video.myvideo2").attr("src", "images/Mercury.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -2) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");
                        $('li.limenu.Neptune a').css("font-weight", "500");

                        $('li.limenu.Venus a').css("font-weight", "900");

                        $(".text1").text("24/7 Customer Care").fadeIn('slow');
                        $(".text2").text("Are you an early morning bird or late night owl? At CIN, we are available, 24 hours a day, 7 days a week and 365 days a year. We understand that business never stops and creative ideas and calamities can happen anytime.").fadeIn('slow');


                        $("video.myvideo2").attr("src", "images/Venus.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -3) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");
                        $('li.limenu.Neptune a').css("font-weight", "500");

                        $('li.limenu.Earth a').css("font-weight", "900");

                        $(".text1").text("Responsive Relationship Manager").fadeIn('slow');
                        $(".text2").text("Are you trying to reach your client manager for decades but not getting a proper response? No worries, CIN has heard your prayers. As a CIN client, you will be assigned a responsive “Super Man (ager)” who will reach out to you faster than Superman.").fadeIn('slow');

                        $("video.myvideo2").attr("src", "images/Earth.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -4) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");
                        $('li.limenu.Neptune a').css("font-weight", "500");

                        $('li.limenu.Mars a').css("font-weight", "900");

                        $(".text1").text("Data Driven Decision Making").fadeIn('slow');
                        $(".text2").text("Are you following superstition to predict rain? Superstition will give you only assumptions while weather forecasts will give you accurate updates based on data analysis. Similarly, CIN will follow your data instead of assumptions.").fadeIn('slow');


                        $("video.myvideo2").attr("src", "images/Mars.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -5) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");
                        $('li.limenu.Neptune a').css("font-weight", "500");

                        $('li.limenu.Jupiter a').css("font-weight", "900");

                        $(".text1").text("One Stop Shop").fadeIn('slow');
                        $(".text2").text("Have you become a common man in a government office where your file is being shifted from desk to desk? At CIN, we offer a complete range of services to ensure that you don’t have to find different vendors for different services.").fadeIn('slow');


                        $("video.myvideo2").attr("src", "images/Jupiter.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -6) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");

                        $('li.limenu.Saturn a').css("font-weight", "900");
                        $(".text1").text("Experienced Team").fadeIn('slow');
                        $(".text2").text("Are you expecting fine cuisine but getting dhaba food instead? Experience matters. This is why at CIN, we only hire professionals with at least 5 years of industry experience. This guarantees a mature, knowledgeable and error-free handling of your account so you get a BMW while expecting an Ambassador.").fadeIn('slow');

                        $("video.myvideo2").attr("src", "images/Saturn.webm").animate({ left: '13px', top: '306px', width: '690px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -7) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Neptune a').css("font-weight", "500");

                        $('li.limenu.Uranus a').css("font-weight", "900");

                        $(".text1").text("Data Security").fadeIn('slow');
                        $(".text2").text("Are you sure your comp is not using your data? Most companies leak data like a cheap Chinese Tire tube. At CIN, we will ensure your data is safer than a bank safe so your competition can never take advantage of you.").fadeIn('slow');

                        $("video.myvideo2").attr("src", "images/Uranus.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else if (counter_circle_1 == -8) {

                        $('li.limenu.Mercury a').css("font-weight", "500");
                        $('li.limenu.Venus a').css("font-weight", "500");
                        $('li.limenu.Earth a').css("font-weight", "500");
                        $('li.limenu.Mars a').css("font-weight", "500");
                        $('li.limenu.Jupiter a').css("font-weight", "500");
                        $('li.limenu.Saturn a').css("font-weight", "500");
                        $('li.limenu.Uranus a').css("font-weight", "500");

                        $('li.limenu.Neptune a').css("font-weight", "900");
                        $(".text1").text("Timely delivery").fadeIn('slow');
                        $(".text2").text("What is the use of medicine after the patient is dead? At CIN, we understand the concept of urgency and the importance of timely delivery. Therefore we meet and beat every deadline so that your business runs like clockwork.").fadeIn();

                        $("video.myvideo2").attr("src", "images/Neptune.webm").animate({ left: '0px', top: '472px', width: '340px', display: "block" }, {
                            duration: 1000, queue: false, specialEasing: {
                                width: "linear",
                                height: "easeOutBounce"
                            }
                        });

                    } else {


                        $('#hiddenInputCircle').val(-7);



                    }


                }
            }

        }



    });
});


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
        vid_motion.src = 'assets/globs/sun.webm';

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
