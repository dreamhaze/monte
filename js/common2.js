$(function(){
    // $('.main_directions').hover(
    //     function() {
    //         $('#video').css( 'background-color', 'rgba(0, 112, 192, 0.8)' );
    //         $('#ivent').css( 'background-color', 'rgba(233, 203, 23, 0.8)' );
    //         $('#wedd').css( 'background-color', 'rgba(247, 21, 188, 0.8)' );
    //     }, 
    //     function() {
    //         $('#video').css( 'background-color', 'none' );
    //         $('#ivent').css( 'background-color', 'none' );
    //         $('#wedd').css( 'background-color', 'none' );
    //     }
    // );

	
    $('figure').hover(
        
        function() {
            el = $('.main_directions').find('.layer');
            
            $( this ).find('figcaption').unwrap();
            
            $(el).each( function() {
                $( this ).addClass( 'hover-gray' )
            });
            
            $( this ).addClass( 'zoom-effect' );
            $( this ).find( '.figurecircle' ).addClass( 'scale-effect' );    
            $( this ).find( 'p' ).addClass( 'hover-opacity' );    

        }, function() {

            $( this ).find('figcaption').wrap('<div class="layer"></div>');
            $( this ).removeClass( 'zoom-effect' );
        
            $( this ).find( '.figurecircle' ).removeClass( 'scale-effect' );     
            $( this ).find( 'p' ).removeClass( 'hover-opacity' );    
        });

	return false;		
});

$(document).ready(function() {
    
    var owl1 = $("#carousel-monte");
    var owl2 = $("#fotoblock-2");
    var owl3 = $("#fotoblock-3");
    var owl4 = $("#fotoblock-4");
    var owl5 = $("#fotoblock-5");
    var owl6 = $("#fotoblock-6");
    var owl7 = $("#fotoblock-7");
    var owl8 = $("#fotoblock-8");
    var owl9 = $("#fotoblock-9");
    var owl10 = $("#fotoblock-10");
    var owl11 = $("#fotoblock-11");
    var owl12 = $("#fotoblock-12");
    var owl13 = $("#fotoblock-13");
    var owl14 = $("#fotoblock-14");
    var owl15 = $("#fotoblock-15");
    var owl16 = $("#fotoblock-16");
    var owl17 = $("#fotoblock-17");
    var owl18 = $("#fotoblock-18");
    var owl19 = $("#fotoblock-19");
    var owl20 = $("#fotoblock-20");
    
    owl1.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl2.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl3.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl4.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl5.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl6.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl7.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl8.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl9.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl10.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl11.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl12.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl13.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl14.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl15.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl16.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl17.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl18.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl19.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    owl20.owlCarousel({
        items : 6, 
        itemsDesktop : [1800,5], 
        itemsDesktopSmall : [1730,4], 
        itemsTablet: [1350,3], 
        itemsMobile : [900,1], 
        autoPlay : false,
        pagination : false
    });
    
    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
    $(".play").click(function(){
    owl.trigger('owl.play',2500); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
    owl.trigger('owl.stop');
    })
    
});




