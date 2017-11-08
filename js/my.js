$(document).ready(function(){    

    
    
/* *******************
        TOP MENU
******************* */
       $('.themes-nav').on({
            mouseenter : function(){
                $(this).children('.themes').children('.sub').addClass('active');
            },
            mouseleave : function(){
                $(this).children('.themes').children('.sub').removeClass('active');
           }
       });
        $('.extensions-nav').on({
            mouseenter : function(){
                $(this).children('.extensions').children('.sub').addClass('active');
               $(this).addClass('on');
            },
            mouseleave : function(){
                $(this).children('.extensions').children('.sub').removeClass('active');
                $(this).removeClass('on');
           }
       });
    
    $('.device li').eq(0).addClass('active');
    $('.device li a').on({
        click : function(){
            
            var index = $(this).parents('.device').find('li').index(this);
            var className = $(this).attr('data-frame');
            
            $(this).parents('li').siblings().removeClass('active');
            $(this).parents('li').eq(index).addClass('active');
            
            $('body').removeClass();
            $('body').addClass(className);
            if(className != "desktop-full"){
                $('iframe').addClass('on');
                $('.iframe-none').css("display","none");
                $("#iframe-devices").contents().find('.navtop').css( "display", "none" );
                $("#iframe-devices").contents().find('.top').css( "margin-top", "0" );
//                $('iframe[name="demo"]').contents().find('head link[href="css/myStyle.css"]').attr("href","css/myStyle2.css";
            }else{
                $('iframe').removeClass('on');
                $('.iframe-none').css("display","block");
            }
        }
    });


    $('#nof').on('click',function(){
        $('.navtop').css("display","none");
        $('.top').css("margin-top","0");
    });

/* *******************
        TOP MENU - SubMenu
******************* */
    
    var SubmenutabHeight = $('.sub-menu-tab').find('.item-submenu').css("height");
    $('.sub-menu-tab').css("height",SubmenutabHeight);
    
    $('.sub-menu-tab').css("height",SubmenutabHeight);
    
    $('.tabs-header').on('click',function(){
        
        var data_value = $(this).data("value");
        
        $(this).addClass('on');
        
        if(data_value == "themes"){
            $(this).parents().siblings('li').children('.tabs-header').removeClass('on');
            $('.sub-menu-tab').children('.themes-dropdown').addClass('active');
            $('.sub-menu-tab').children('.themes-dropdown').siblings('.free-themes-dropdown').removeClass('active');
            
            var SubmenutabHeight = $('.sub-menu-tab').find('.themes-dropdown').css("height");
            $('.sub-menu-tab').css("height",SubmenutabHeight);
        }else if(data_value == "free themes"){
            $(this).parents().siblings('li').children('.tabs-header').removeClass('on');
            $('.sub-menu-tab').children('.free-themes-dropdown').addClass('active');
            $('.sub-menu-tab').children('.free-themes-dropdown').siblings('.themes-dropdown').removeClass('active');
            
            var SubmenutabHeight = $('.sub-menu-tab').find('.free-themes-dropdown').css("height");
            $('.sub-menu-tab').css("height",SubmenutabHeight);
        }
    });
    
/* *******************
        TOP-HEADER MENU
******************* */
    $('.account').on({
        click : function() {
            $(this).toggleClass('open');
        }
    });
    
    
    
/* *******************
        BOTTOM-HEADER MENU
******************* */
    
    $('.mainmenu li').on({
       mouseenter : function(){
           $(this).addClass('on');
       },
        mouseleave : function(){
            $(this).removeClass('on');
        }
    });
    
    
    

/* *******************
        MAINIMAGE
******************* */
    
    /* 슬라이드 버튼 생성 */
    $('#slide').on({
       mouseenter : function(){
           $('.slide .prev').addClass('active');
           $('.slide .next').addClass('active');
       },
        mouseleave : function(){
            $('.slide .prev').removeClass('active');
            $('.slide .next').removeClass('active');
        }
    });
    
    $('.prev').on({
       mouseenter : function(){
           $('.prev').addClass('on');
       },
        mouseleave : function(){
            $('.prev').removeClass('on');
        }
    });
    $('.next').on({
       mouseenter : function(){
           $('.next').addClass('on');
       },
        mouseleave : function(){
            $('.next').removeClass('on');
        }
    });

    /* 유동적인 height 를 주기위해 */
    
    $(window).resize(function(){
        var MainImageHeight = $('.item').find('img').css("height");
        $('.mainimage').css("height",MainImageHeight);
        var SubImageHeight = $('.item-image').find('img').css("height");
        $('.subimage').css("height",SubImageHeight);
        
        var windowWidth = $(window).width();
        if(windowWidth <= 755){
            
            var SubImageHeight2 = parseInt(SubImageHeight) * 3 + 40 + "px";   
            $('.subimage').css("height",SubImageHeight2);
        }
    }).resize();
    
    
    /* 해당 아이템이 show 면 dot silde 유지 */
    var i = 0;
    $('.dot').on({
        click : function(){
            var index = $(this).parents('.dots').find('.dot').index(this);
            $('.item').eq(index).addClass('show');
            $('.item').eq(index).siblings().removeClass('show');
            $('.dot').eq(index).addClass('slide');
            $('.dot').eq(index).siblings().removeClass('slide');
            i = index;
        },
        mouseenter : function(){
           $(this).addClass('slide');
        },
        mouseleave : function(){
            var index = $(this).parents('.dots').find('.dot').index(this);
            var class_name = $('.slide').children('.item').eq(index).attr('class');
            $(this).removeClass('slide');
            console.log(class_name);
            if(class_name == 'item show'){
                $('.dot').eq(index).addClass('slide');
            }
        }
    });
    
    
    /* 슬라이드 클릭시 */
    
    $('.dot').eq(0).addClass('slide');
    $('.item').eq(0).addClass('show');
    $('.slide .next').on('click',function(){
        i++;
        if(i == 3){
            i = 0;
        }
        $('.item').eq(i).siblings().removeClass('show');
        $('.item').eq(i).addClass('show');
        $('.dot').eq(i).addClass('slide');
        $('.dot').eq(i).siblings().removeClass('slide');
    });
    $('.slide .prev').on('click',function(){
        i--;
        if(i == -1){
            i = 2;
        }
        $('.item').eq(i).siblings().removeClass('show');
        $('.item').eq(i).addClass('show');
        $('.dot').eq(i).addClass('slide');
        $('.dot').eq(i).siblings().removeClass('slide');
    });
    
    
    
    $('.item-banner').on({
       mouseenter : function(){
           $(this).addClass('on');
       },
        mouseleave : function(){
            $(this).removeClass('on');
        }
    });

    
    
/* *******************
        Arrivals
******************* */
    $('.tabmenu').on({
       click : function(){
           var index = $(this).parents().find('.tabmenu').index(this);
           $(this).siblings().removeClass('tab-sel');
           $(this).addClass('tab-sel');
           $('.arr-item').siblings().removeClass('on');
           $('.arr-item').eq(index).addClass('on');
       } 
    });
    
    $('.arrivals').on({
       mouseenter : function(){
           $('.arrivals .prev').addClass('active');
           $('.arrivals .next').addClass('active');
       },
        mouseleave : function(){
            $('.arrivals .prev').removeClass('active');
            $('.arrivals .next').removeClass('active');
        }
    });
    
    $('.tabs-item').on({
        mouseenter : function(){
            $(this).children('.left-block').children('.button-group').addClass('on');
        },
        mouseleave : function(){
            $(this).children('.left-block').children('.button-group').removeClass('on');
        }
    });

    
    /* Arrivals Slide */    
    
    var translate = "";
    var count = 1;
    var min_count = "";
    var max_count = "";
    var translate_prev = "";
    var translate_next = "";
    
        /* *********************************
        브라우저크기 980px 이하일 때
        ********************************* */    
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth <= 968){
            $('.categories').removeClass('on');
            $('.stage').css("width","3050px");
            min_count = 1;
            max_count = 6;
            translate_prev = 8;
            translate_next = 6;
        }
        if(windowWidth > 968){
            $('.categories').addClass('on');
            $('.stage').css("width","3395px");
            min_count = 1;
            max_count = 6;
            translate_prev = 8;
            translate_next = 6;
        }
        if(windowWidth <= 755){
            var windowWidth767 = parseInt(windowWidth) * 6 + "px";
            $('.stage').css("width",windowWidth767);
            translate_prev = 6;
            translate_next = 6;
        }
        if(windowWidth <= 467){
            var windowWidth479 = parseInt(windowWidth) * 12 + "px";
            $('.stage').css("width",windowWidth479);
            translate_prev = 4;
            translate_next = 6;
        }
        if(windowWidth <= 448){
            translate_prev = 4;
            translate_next = 4;
        }
        if(windowWidth <= 428){
            translate_prev = 4.5;
            translate_next = 4.5;
        }
        if(windowWidth <= 413){
            translate_prev = 3.5;
            translate_next = 4.5;
        }
        if(windowWidth <= 368){
            translate_prev = 2;
            translate_next = 3;
        }
        if(windowWidth <= 353){
            translate_prev = 1;
            translate_next = 1;
        }
        if(windowWidth <= 333){
            translate_prev = 2;
            translate_next = 1.5;
        }
        if(windowWidth <= 323){
            translate_prev = 2.5;
            translate_next = 2.5;
        }
        
        count = 1;
        
    }).resize();
    
    $('.arrivals .next').on('click',function(){
        var arr_width = $('.cameras-image').css('width');
        arr_width = parseInt(arr_width)+30;
        count++;
        if(count > max_count){
            $('.stage').addClass('slideNext');
            $('.stage').removeClass('slidePrev');
            $('.stage').css("transform","translate3d(-(arr_width*2)px, 0px, 0px)");
            /* 자바스크립트 애니메이션 ( IE에서 작동 안됨 )
            var target = document.querySelector('.stage');
            var player = target.animate([
              {transform: 'translate3d(-900px,0px, 0px)'},
              {transform: 'translate3d(-1200px, 0px, 0px)'}
            ], 150);
            player.addEventListener('finish', function() {
                target.style.transform = 'translate3d(-1200px, 0px, 0px)';
                target.style.transition = '0s';
            });
            */
            count = min_count;
        }else{
            $('.stage').removeClass('slideNext');
            translate = (-(arr_width)*count)+translate_next+"px";
            $('.stage').css("transition","0.25s");
            var translate3d = "translate3d("+translate+", 0px, 0px)";
            $('.stage').css("transform",translate3d);
        }
    });
    $('.arrivals .prev').on('click',function(){
        var arr_width = $('.cameras-image').css('width');
        arr_width = parseInt(arr_width)+30;
        count--;
        if(count < min_count){
            $('.stage').addClass('slidePrev');
            $('.stage').removeClass('slideNext');
            $('.stage').css("transform","translate3d(-(arr_width*7)px, 0px, 0px)");
            /* 자바스크립트 애니메이션 ( IE에서 작동 안됨 )
            var target = document.querySelector('.stage');
            var player = target.animate([
              {transform: 'translate3d(-3000px, 0px, 0px)'},
              {transform: 'translate3d(-2700px, 0px, 0px)'}
            ], 150);
            player.addEventListener('finish', function() {
                target.style.transform = 'translate3d(-2700px, 0px, 0px)';
                target.style.transition = '0s';
            });
            */
            count = max_count;
        }else{
            $('.stage').removeClass('slidePrev');
            translate = (-(arr_width)*count)+translate_prev+"px";
            $('.stage').css("transition","0.25s");
            var translate3d = "translate3d("+translate+", 0px, 0px)";
            $('.stage').css("transform",translate3d); 
        }
    });


/* *******************
        FOOTER
******************* */
    
    $(window).scroll(function () {
		
        var height = $(document).scrollTop();
        if(height != 0){
            $('.back-to-top').removeClass('hidden-top');
        }else{
            $('.back-to-top').addClass('hidden-top');
        }
    });
    
    $('.back-to-top').on('click',function(){
        $('body').scrollTop(0);
    });
    

    
                        
});