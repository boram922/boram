$(document).ready(function(){
//header
 //burger -> close
 $('.burger').click(function(){
  $(this).toggleClass('click');
  $('nav').toggleClass('on');
  $('.utile').toggleClass('show');
  $('.logo>a')
  .css('background-image','url(images/logo_mixxo.png)');
 })
//main_bnr
const $main=$('#main'),
      $sliderWrap=$main.find('.slideWrap'),
      $slides=$sliderWrap.find('.slide'),
      $slide=$slides.find('a'),
      $slideImg=$slide.find('img');
      

const $allow=$('.allow'),
      $bthPrve=$allow.find('.bthPrve'),
      $bthNext=$bthPrve.next('.bthNext');

const $indicators=$('.indicators'),
      $indicator=$indicators.find('a'),
      slideCount=$slide.length;

const $ptImg=$('.ptImg'),
      $ptPrev=$('.ptPrev'),
      $ptNext=$('.ptNext');

let currentIdx=0,
    input='',
    timerMain;

let $imgH=$('.imgH').height();

let  currentPt=0,
      pt0=0;
// PHOTO_slide_960
let pt=0,
    currentP=0;
// PHOTO_slide_768    
let pt1=0,
    currentP1=0;
// PHOTO_slide_486   
let pt2=0,
    currentP2=0;

//photo_review
  $ptPrev.click(function(){
    if(currentPt==0){
      gotosliderpt(5)
    }else{
      gotosliderpt(currentPt-1)
    }
  })

  $ptNext.click(function(){
    if(currentPt<5){
      gotosliderpt(currentPt+1)
    }else{
      gotosliderpt(0)
    }
  })
function gotosliderpt(pt0){
  $ptImg.css('left',(-20*pt0)+'%');
  currentPt=pt0;
}

gotosliderpt(pt0);

$imgH=$('.imgH').height();
$(window).resize(function(){
  let win=$(this),
      winWid=win.width();
  $imgH=$('.imgH').height();
if(winWid<=1200){


}else{

}
if(winWid>960){
//header
  //logo
  $('header').mouseover(function(){
    $('.logo').children('a')
    .css('background-image','url(images/logo_mixxo_w.png)');
    
  })
  $('header').mouseout(function(){
    $('.logo').children('a')
    .css('background-image','url(images/logo_mixxo.png)');
  })
//GNB_slide
  $('.gnb>li').mouseenter(function(){
    $('.sub').css('display','block');
    $('.su_bgc').stop().fadeIn();
  }).mouseleave(function(){
    $('.sub').css('display','none');
    $('.su_bgc').stop().fadeOut();
  })
}else if(winWid<=960){ 
  $('.su_bgc').hide();
  $('.gnb>li>a').mouseover(function(){
    $(this).next('.sub').stop().slideDown();
  }).mouseout(function(){
    $('.sub').stop().slideUp();
  })
}
if(winWid<=960){
  //logo
  $('header').mouseover(function(){
    $('.logo').children('a')
    .css('background-image','url(images/logo_mixxo.png)');
  })

  //main
  $('.main1')
  .css('background-image','url(images/main_images/main1_2.png)');
  $('.main2')
  .css('background-image','url(images/main_images/main2_2.png)');
  $('.main3')
  .css('background-image','url(images/main_images/main3_2.png)');
    // PHOTO_REVIEW_960
$ptPrev.click(function(){
  if(currentP==0){
    gotosliderpt(4)
  }else{
    gotosliderpt(currentP-1)
  }
})

$ptNext.click(function(){
  if(currentP<4){
    gotosliderpt(currentP+1)
  }else{
    gotosliderpt(0)
  }
})

function gotosliderpt(pt){
  $ptImg.css('left',(-25*pt)+'%');
  currentP=pt;
}
gotosliderpt(pt);

}else{
  $('.main1')
  .css('background-image','url(images/main_images/main1.png)');
  $('.main2')
  .css('background-image','url(images/main_images/main2.png)');
  $('.main3')
  .css('background-image','url(images/main_images/main3.png)');
}
if(winWid<=768){
  $('.cp_1').attr('src', 'images/coupon/cp1.png');
  $('.cp_2').attr('src', 'images/coupon/cp2.png');


  // PHOTO_REVIEW_768
$ptPrev.click(function(){
  if(currentP1==0){
    gotosliderpt(8)
  }else{
    gotosliderpt(currentP1-1)
  }
})

$ptNext.click(function(){
  if(currentP1<8){
    gotosliderpt(currentP1+1)
  }else{
    gotosliderpt(0)
  }
})

function gotosliderpt(pt1){
  $ptImg.css('left',(-50*pt1)+'%');
  currentP1=pt1;
}
gotosliderpt(pt1);


}else{
  $('.cp_1').attr('src', 'images/coupon/coupon2.png');
  $('.cp_2').attr('src', 'images/coupon/coupon1.png');
}
if(winWid<=486){
// PHOTO_REVIEW_486
$ptPrev.click(function(){
  if(currentP2==0){
    gotosliderpt(9)
  }else{
    gotosliderpt(currentP2-1)

  }
})

$ptNext.click(function(){
  if(currentP2<9){
    gotosliderpt(currentP2+1)
  }else{
    gotosliderpt(0)
  }
})

function gotosliderpt(pt2){
  $ptImg.css('left',(-100*pt2)+'%');
  currentP2=pt2;
}
gotosliderpt(pt2);
}else{

}


}).resize();


//????????????
$slides.css('width',100*slideCount+'%');
$slide.each(function(i){
  let indicatorName=$(this).find('del').text();
  input+='<a href="#none">'+indicatorName+'</a>';
  $indicators.html(input);
})

$indicators.find('a').click(function(e){
  e.preventDefault();
  let idx=$(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  gotoSlide(idx);
})

function gotoSlide(idx){
  $slides.stop().animate({'left':-100*idx+'%'},1000);
  currentIdx=idx;
  allow();
}

$allow.find('a').click(function(){
  if($(this).hasClass('bthPrve')){
    gotoSlide(currentIdx-1)
  }else{
    gotoSlide(currentIdx+1)
  }
})
function allow(){
  if(currentIdx==0){
    $bthPrve.addClass('disabled')
  }else{
    $bthPrve.removeClass('disabled')
  }
  if(currentIdx==slideCount-1){
    $bthNext.addClass('disabled')
  }else{
    $bthNext.removeClass('disabled')
  }
  $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
}
allow();


function startMain(){
  timerMain=setInterval(function(){
    let nextIdx=(currentIdx+1)%slideCount;
    // console.log(nextIdx);
    gotoSlide(nextIdx);
  },5000)
}
startMain();

function stopMain(){
  clearInterval(timerMain)
}

$sliderWrap.mouseover(stopMain).mouseout(startMain)

// it_items animate
const $cp=$('.cp').offset().top,
      $it=$cp - 200;

$(window).scroll(function(){
  let scroll=$(this).scrollTop();

  if(scroll>$it){
   $('.it_bigImg').addClass('itAnimate1');
   $('.it_imgTxt a').addClass('itAnimate');
  }
})

// best_tabs
$('.bs_btns').find('a').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})
$('.all').click(function(){
  $('.all_wrap').show();
  $('.top_wrap').hide();
  $('.bottom_wrap').hide();
  $('.dress_wrap').hide();
  $('.mixx_wrap').hide();
})
$('.top').click(function(){
  $('.top_wrap').show();
  $('.all_wrap').hide();
  $('.bottom_wrap').hide();
  $('.dress_wrap').hide();
  $('.mixx_wrap').hide();
})
$('.bt').click(function(){
  $('.bottom_wrap').show();
  $('.top_wrap').hide();
  $('.all_wrap').hide();
  $('.dress_wrap').hide();
  $('.mixx_wrap').hide();
})
$('.dr').click(function(){
  $('.dress_wrap').show();
  $('.bottom_wrap').hide();
  $('.top_wrap').hide();
  $('.all_wrap').hide();
  $('.mixx_wrap').hide();
})
$('.mi').click(function(){
  $('.mixx_wrap').show();
  $('.dress_wrap').hide();
  $('.bottom_wrap').hide();
  $('.top_wrap').hide();
  $('.all_wrap').hide();
})
//best_heart
$('.bestHeart').find('img').mouseover(function(){
  $(this).attr('src','images/new/hert3.png').css('opacity',1);
})
$('.bestHeart').find('img').mouseout(function(){
  $(this).attr('src','images/new/hert1.png').css('opacity',1);
})
// best_all animate
const $all=$('.all_wrap'),
      $allCont=$('.all_cont'),
      $allDiv=$('.all_cont>div'),
      $btnprAll=$('.bthPrve_bs'),
      $btnneAll=$('.bthNext_bs');
let currentAll=0,
    num=0,
    timerAll,
    alldivCount=$allDiv.length,
    alldivOn=$('.all_cont>div.on').length;
  // console.log(alldivOn);


  $btnprAll.click(function(){
    if(currentAll==0){
      gotoslider(3)
    }else{
      gotoslider(currentAll-1)
    }
})
$btnneAll.click(function(){
  if(currentAll<3){
    gotoslider(currentAll+1)
  }else{
    gotoslider(0)
  }
})

function gotoslider(num){
  $allDiv.css({'left':(-16.5*num)+'%', 'transition':'1s'});
  currentAll=num;
}
gotoslider(num);
function startAll(){
  timerAll=setInterval(function(){
    let nextAll=(currentAll+1)%alldivOn;
    gotoslider(nextAll);
  },3000)
}
startAll();
function stopAll(){
  clearInterval(timerAll)
}
$allCont.mouseover(stopAll).mouseout(startAll);


//top_animation
const $topItems=$('.topItems'),
      $top_conts=$('.top_conts'),
      $top_contsDiv=$('.top_conts>div'),
      $top_contsTop=$('.top_conts .top'),
      $bthPrveTop=$('.bthPrve_top'),
      $bthNextTop=$('.bthNext_top');

let topdivLeng=$top_contsDiv.length,
    toponLeng=$top_contsTop.length,
    top=0,
    currentTop=0,
    timerTop;

 //allow_top
 $bthPrveTop.click(function(){
   if(currentTop==0){
    gotoSlider(3)
   }else{
    gotoSlider(currentTop-1)
   }
 })
 $bthNextTop.click(function(){
   if(currentTop<3){
    gotoSlider(currentTop+1)
   }else{
    gotoSlider(0)
   }
 })

function gotoSlider(top){
  $top_contsDiv.css({'left':(-16.5*top)+'%','transition':'1s'});
  currentTop=top;
}
gotoSlider(top);

function startTop(){
  timerTop=setInterval(function(){
    let nextTop=(currentTop+1)%toponLeng;
    gotoSlider(nextTop);
  },3000)
}
startTop();
function stopTop(){
  clearInterval(timerTop)
}
//mouse
$top_conts.mouseover(stopTop).mouseout(startTop);
//bottom_animation
const $botconts=$('.bottom_conts'),
      $botcontsDiv=$('.bottom_conts>div'),
      $botcontsBot=$('.bottom_conts>div.bot'),
      $bthPrvebot=$('.bthPrve_bot'),
      $bthNextbot=$('.bthNext_bot');

let botLeng=$botcontsBot.length,
    currenBot=0,
    bot=0,
    timerBot;
//allow_bottom
$bthPrvebot.click(function(){
  if(currenBot==0){
    gotosliderBot(3)
  }else{
    gotosliderBot(currenBot-1)
  }
})
$bthNextbot.click(function(){
  if(currenBot<3){
    gotosliderBot(currenBot+1)
  }else{
    gotosliderBot(0)
  }
})

    function gotosliderBot(bot){
      $botcontsDiv.css({'left':(-16.5*bot)+'%' ,'transition':'1s'});
      currenBot=bot
    }
    gotosliderBot(bot);

    function startBot(){
      timerBot=setInterval(function(){
        let nextBot=(currenBot+1)%botLeng;
        gotosliderBot(nextBot);
      },3000)
    }
    startBot();
    function stopBot(){
      clearInterval(timerBot);
    }
//mouse
$botconts.mouseover(stopBot).mouseout(startBot);
//dress_animation
const $dress_conts=$('.dress_conts'),
      $drecontsDiv=$('.dress_conts>div'),
      $drecontsDre=$('.dress_conts>div.dre'),
      $bthPrve_dre=$('.bthPrve_dre'),
      $bthNext_dre=$('.bthNext_dre');

let dreLeng=$drecontsDre.length,
    currenDre=0,
    dre=0,
    timerDre;

    $bthPrve_dre.click(function(){
      if(currenDre==0){
        gotosliderDre(3)
      }else{
        gotosliderDre(currenDre-1)
      }
    })  
    $bthNext_dre.click(function(){
      if(currenDre==0){
        gotosliderDre(currenDre+1)
      }else{
        gotosliderDre(0)
      }
    })

    function gotosliderDre(dre){
      $drecontsDiv.css({'left':(-16.5*dre)+'%' ,'transition':'1s'});
      currenDre=dre;
    }
    gotosliderDre(dre);

    function startDre(){
      timerDre=setInterval(function(){
        let nextDre=(currenDre+1)%dreLeng;
        gotosliderDre(nextDre);
      },3000)
    }
    startDre();

    function stopDre(){
      clearInterval(timerDre);
    }
  //mouse
  $dress_conts.mouseover(stopDre).mouseout(startDre);

//mixx_animation
const $mixx_conts=$('.mixx_conts'),
      $mixcontsDiv=$('.mixx_conts>div'),
      $mixcontsMix=$('.mixx_conts>div.mix'),
      $bthPrve_mix=$('.bthPrve_mix'),
      $bthNext_mix=$('.bthNext_mix');

let mixLeng=$mixcontsMix.length,
    currenMix=0,
    mix=0,
    timerMix;

    $bthPrve_mix.click(function(){
      if(currenMix==0){
        gotosliderMix(3)
      }else{
        gotosliderMix(currenMix-1)
      }
    })

    $bthNext_mix.click(function(){
      if(currenMix<3){
        gotosliderMix(currenMix+1)
      }else{
        gotosliderMix(0)
      }
    })

    function gotosliderMix(mix){
      $mixcontsDiv.css({'left':(-16.5*mix)+'%' ,'transition':'1s'});
      currenMix=mix;
    }
    gotosliderMix(mix);

    function startMix(){
      timerMix=setInterval(function(){
        let nextMix=(currenMix+1)%mixLeng;
        gotosliderMix(nextMix);
      },3000)
    }
    startMix();
    function stopMix(){
      clearInterval(timerMix);
    }
  //mouse
  $mixx_conts.mouseover(stopMix).mouseout(startMix);

  // md_popup
$('.md_dalls>a').click(function(){
  $(this).addClass('rotate').siblings().removeClass('rotate');
  $(this).next().addClass('on').siblings().removeClass('on');
});

$('.close_btn').click(function(){
  $('.md_popWrap').removeClass('on');
});

  //gotop
  $('.goTop').click(function(){
    $('html,body').animate({'scrollTop':'0'});
  })




})//e:ready