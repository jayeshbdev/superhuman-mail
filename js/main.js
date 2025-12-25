// Sidebar hide on mobile
$(document).ready(function () {
  $(".toggle-close-icon").click(function () {
    $(".navbar-list").removeClass("show");
  });
});

// arrow appear and scroll to top
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 500) {
    $(".scroll-top-arrow").fadeIn("slow");
  } else {
    $(".scroll-top-arrow").fadeOut("slow");
  }
});
$(document).on("click", ".scroll-top-arrow", function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});
$(document).on("click", ".home", function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

// Smooth scroll for in-page anchors and collapse mobile navbar
$(document).on("click", 'a[href^="#"]', function (e) {
  var target = $(this).attr("href");
  // ignore empty or just '#' links
  if (!target || target === "#") return;
  if ($(target).length) {
    e.preventDefault();
    // Compute responsive header height: 120px desktop, 84px mobile (<=767px)
    function getHeaderOffset() {
      var desktopHeight = 96;
      var mobileHeight = 64;
      var breakpoint = 767; // px
      return $(window).width() <= breakpoint ? mobileHeight : desktopHeight;
    }
    var offset = getHeaderOffset();
    var scrollTop = $(target).offset().top - offset;
    $("html, body").animate({ scrollTop: scrollTop }, 700);
    // collapse bootstrap navbar on mobile if open
    if ($(".navbar-list").hasClass("show")) {
      $(".navbar-list").removeClass("show");
    }
    // set clicked nav link as active
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  }
});

// Update active nav link on scroll (simple scroll-spy)
$(window).on("scroll load", function () {
  // reuse same logic for header offset
  function getHeaderOffsetScroll() {
    var desktopHeight = 96;
    var mobileHeight = 64;
    var breakpoint = 767; // px
    return $(window).width() <= breakpoint ? mobileHeight : desktopHeight;
  }
  var offset = getHeaderOffsetScroll();
  var scrollPos = $(window).scrollTop() + offset + 5; // small buffer
  $("section[id]").each(function () {
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();
    var id = $(this).attr("id");
    if (scrollPos >= top && scrollPos < bottom) {
      $(".navbar-nav .nav-link").removeClass("active");
      $('.navbar-nav .nav-link[href="#' + id + '"]').addClass("active");
    }
  });
});

//
$(document).ready(function () {
  const $track = $(".logo-track");

  // Duplicate logos
  $track.children().clone().appendTo($track);

  // Calculate half width
  const totalWidth = $track.width() / 2;

  // Set CSS variables dynamically
  $track.css({
    "--scroll-distance": `-${totalWidth}px`,
    "animation-duration": `${totalWidth / 60}s`,
  });

  // Pause on hover
  $(".trusted-logos").hover(
    () => $track.css("animation-play-state", "paused"),
    () => $track.css("animation-play-state", "running")
  );
});
