$(function() {

    // FUNCTION TO LIMIT CHARACTERS AND ADD SHOW MORE FUNCTIONALITY
    var minimized_elements = $('p.desc');
    var minimize_character_count = 300;

    minimized_elements.each(function(){
        var t = $(this).text();
        if(t.length < minimize_character_count ) return;

        $(this).html(
            t.slice(0,minimize_character_count )+'<span> &hellip; </span><a href="#" class="label label-info more">Show More <span class="chevron bottom"></span></a>'+
            '<span style="display:none;">'+ t.slice(minimize_character_count ,t.length)+' <a href="#" class="label label-muted less">Show Less <span class="chevron top"></span></a></span>'
        );

    });

    // THE MORE BUTTON
    $('a.more', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();
    });

    // THE LESS BUTTON
    $('a.less', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();
    });

});