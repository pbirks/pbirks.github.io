$(document).ready(function(){
    $('.nav-link').hover(
        function(){
            $(this).css('color', '#33BEFF'); // Change color on hover
        },
        function(){
            $(this).css('color', '#4756df'); // Restore original color on mouse leave
        }
    );
});

$(document).ready(function() {
    $('.icon-card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)'); // Increase size on hover
        },
        function() {
            $(this).css('transform', 'scale(1)'); // Restore original size on mouse leave
        }
    );
});
