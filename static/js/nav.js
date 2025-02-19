$(function() {
  // remove leading / from url
  let url = window.location.pathname.slice(1);
  if(url.startsWith("physics/")) {
    url = url.slice(8);
  }
  if(url === '') {
    url = "home";
  } else if(url.endsWith('/')) {
    url = url.slice(0, -1);
  }

  // add active class to current page
  const a = $(`a[goto="${url}"]`);
  a.addClass("text-teal-400").removeClass("text-white");

  // change background of nav on scroll
  function scrolled() {
    return window.scrollY > 100;
  }

  $(window).on("scroll", () => {
    if (!isMobile()) {
      if (scrolled()) {
        $("nav").removeClass("bg-transparent").addClass("bg-white");
        $("nav .text-white").removeClass("text-white").addClass("text-teal-400");
        $("nav img").attr("src", bluegreen);
      } else {
        $("nav").removeClass("bg-white").addClass("bg-transparent");
        $("nav .text-teal-400").removeClass("text-teal-400").addClass("text-white");
        $("nav img").attr("src", whitegreen);
      }
    }
  });

  // mobile menu
  $("#navbar-button").on("click", () => {
    // accessiblity
    $("#navbar-button").attr("aria-expanded", (i, attr) => attr == "false" ? "true" : "false").toggleClass("bg-white");
    // show the mobile menu
    const navbar = $("#navbar-default");
    if(navbar.is(":hidden")) {
      navbar.slideDown();
    } else {
      navbar.slideUp();
    }
  });
})
