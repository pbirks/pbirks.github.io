// top skills card animation

$(document).ready(function(){
    $('.nav-link').hover(
        function(){
            $(this).css('color', '#33BEFF'); // changes color on hover
        },
        function(){
            $(this).css('color', '#4756df'); // restores color on mouse leave
        }
    );
});

$(document).ready(function() {
    $('.icon-card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)'); // increases size on hover
        },
        function() {
            $(this).css('transform', 'scale(1)'); // restores size on mouse leave
        }
    );
});

// h1 hero animation (on hover)

$(document).ready(function() {
  let isAnimating = false;

  $('.bio-title').mouseenter(function() {
    if (!isAnimating) {
      isAnimating = true;
      $(this).stop().animate({
        fontSize: '2em',
       }, {
        duration: 500,
        complete: function() {
          isAnimating = false;
        }
      });
    }
  }).mouseleave(function() {
    if (!isAnimating) {
      isAnimating = true;
      $(this).stop().animate({
        fontSize: '1.5em',
        color: '#000'
      }, {
        duration: 500,
        complete: function() {
          isAnimating = false;
        }
      });
    }
  });
});

// skills title animation 

$(document).ready(function() {
  function animateGlow() {
    $('.glow').animate({ opacity: 0.5 }, 1000, function() {
      $('.glow').animate({ opacity: 1 }, 800, animateGlow);
    });
  }

  animateGlow();
});
