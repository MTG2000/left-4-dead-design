$('document').ready(function(){
 
    // Start Nav
    $('nav i').on('click',  function(){
        $('nav .group').toggleClass('show');
    });
    // End Nav

    // Start Characters
    console.log('ff')
    var imgIndex = 0 , 
    canMove= true
    slidesTimer = setTimeout(nextImage , 3000),
    images = $(".characters .slide");

    $('.characters .slide:not(:nth-of-type('+imgIndex+1+'))').each(function(){
        $(this).css('opacity','0');
    });

    

    $('.characters button:first-of-type').on('click' , function(){
        if(!canMove) return;
        canMove = false;
       nextImage();
    } );
    $('.characters button:last-of-type').on('click' , function(){
        if(!canMove) return;
        canMove = false;
        PrevImage();
    } );

    function nextImage(){
       
        images.eq(imgIndex)
        .css('right','unset')
        .animate({ left: '-100%' }, 1000);
        imgIndex++;
        
        if (imgIndex >= images.length) {
             imgIndex = 0;
        }
        images.eq(imgIndex)
            .css({ right: '-100%' ,opacity:'1' ,left:'unset'})
            .animate({ right: '0' }, 1000
            ,function(){canMove=true;}
            );
        clearTimeout(slidesTimer);
        slidesTimer = setTimeout(nextImage , 3000);

    }

    function PrevImage(){

        images.eq(imgIndex)
        .css('left','unset')
        .animate({ right: '-100%' }, 1000 );
        imgIndex--;
        
        if (imgIndex <0) {
             imgIndex = images.length-1;
        }
        images.eq(imgIndex)
            .css({ left: '-100%' ,opacity:'1' ,right:'unset'})
            .animate({ left: '0' }, 1000
            ,function(){canMove=true;}
            );
        clearTimeout(slidesTimer);
        slidesTimer = setTimeout(nextImage , 3000);

    }

    // End Characters

    // Start Weapons
    $('.weapons .weapon > div:last-of-type').slideUp(0);

    $('.weapons .weapon').hover(function(){
        $(this).children('div:last').slideToggle();
    });

    // End Weapons

});