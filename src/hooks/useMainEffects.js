import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import jQuery and Owl Carousel
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

// // Import WOW.js (optional if you're not using AOS)
// import WOW from "wow.js";
// import "wowjs/css/libs/animate.css";

const useMainEffects = () => {
  useEffect(() => {
    // AOS Init
    AOS.init({ duration: 1000 });

    // WOW.js Init (optional, remove if using only AOS)
    new WOW().init();

    // Sticky Navbar
    const handleScroll = () => {
      if (window.scrollY > 200) {
        document.querySelector(".sticky-top")?.classList.add("shadow-sm");
        document.querySelector(".sticky-top")?.style.setProperty("top", "0px");
      } else {
        document.querySelector(".sticky-top")?.classList.remove("shadow-sm");
        document.querySelector(".sticky-top")?.style.setProperty("top", "-100px");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Back to Top Button
    const backToTop = $(".back-to-top");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        backToTop.fadeIn("slow");
      } else {
        backToTop.fadeOut("slow");
      }
    });
    backToTop.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Owl Carousel for Car Categories
    $(".categories-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    });

    // Owl Carousel for Testimonials
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      dots: true,
      loop: true,
      margin: 25,
      nav: false,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        992: { items: 2 },
        1200: { items: 2 },
      },
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useMainEffects;
