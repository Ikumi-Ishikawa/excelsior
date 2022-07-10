$('.movetxt').each(function(){
   //一文字ずつ<span>で括る
   $(this).children().addBack().contents().each(function() {
       if (this.nodeType == 3) {
       $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
       }
   });
    
//inviewを使って画面に表れたら起動させる
   $(this).on('inview',function(event,isInView){
       if(isInView){
       //一文字ずつ順番に不透明させる
       $(this).css({'opacity':1});
       for (var i = 0; i <= $(this).children('span').length; i++) {
       $(this).children('span').eq(i).delay(100*i).animate({'opacity':1},1000);
       };
        }else {
            $(this).css({'opacity':0});
            for (var i = 0; i <= $(this).children('span').length; i++) {
                $(this).children('span').eq(i).delay(100*i).animate({'opacity':0},500);
            };
        }
   });
});


$('.box').on('inview', function(){
    $(this).addClass('animate__backInUp');
    $(this).css('opacity','1');
});

$('.business_item').on('inview', function(){
    $(this).addClass('animate__zoomInLeft');
    $(this).css('opacity','1');
});

$('.fadeIn').on('inview', function(){
    $(this).addClass('animate__fadeIn');
    $(this).css('opacity','1');
});
$('.news_item').on('inview', function(){
    $(this).addClass('animate__zoomInUp');
    $(this).css('opacity','1');
});


    $(".left").on('inview',function(event,isInView){
        if(isInView){
        $(this).css('opacity','1');
        $(this).addClass('animate__slideInLeft');
         }else {
            $(this).css('opacity','0');
            $(this).removeClass('animate__slideInLeft');
             };
    });
    $(".right").on('inview',function(event,isInView){
        if(isInView){
        $(this).css('opacity','1');
        $(this).addClass('animate__slideInRight');
         }else {
            $(this).removeClass('animate__slideInRight');
            $(this).css('opacity','0');
             };
    });
    $(".center").on('inview',function(event,isInView){
        if(isInView){
        $(this).css('opacity','1');
        $(this).addClass('animate__zoomIn');
         }else {
            $(this).removeClass('animate__zoomIn');
            $(this).css('opacity','0'); 
             };
    });
