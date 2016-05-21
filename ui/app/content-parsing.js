// LINE BREAK FIX
$(".where").each(function() {
    $(this).html($(this).html().replace(/&lt;br&gt;/g, '<br />'));
});

var fadeSpeed = 200;

// CLOSE X BEHAVOR
$( ".close-x" ).click(function(e) {
    e.preventDefault();
    $(this).closest('.event-item').fadeOut();
    $('.show-all').fadeIn(fadeSpeed);
});

// ABILITY TO BRING BACK ARTICLES
$( ".show-all" ).click(function(e) {
    e.preventDefault();
    $(this).fadeOut();
    $('.event-item').fadeIn(fadeSpeed);
});