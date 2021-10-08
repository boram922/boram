$(document).ready(function(){
//NAV
  
$('.gnb>li').click(function(){
  $(this).addClass('on').siblings().removeClass('on');
  $('#about1').css('padding-top',100);
})

var about=$('#about1').offset().top-200;
    project=$('#project1').offset().top-200;
    ux=$('#ux1').offset().top-200;
    contact=$('#contact1').offset().top-400;

const gnbLi=$('.gnb>li');

$(window).scroll(function(){
  let scroll=$(this).scrollTop();
  if(scroll>0){
    $('.logo>a').css('display','none')
  }else{
    $('.logo>a').css('display','block')
  }

  if(scroll>about && scroll<project){
    gnbLi.removeClass('on')
    gnbLi.eq(0).addClass('on')
  }else if(scroll>project && scroll<ux){
    gnbLi.removeClass('on')
    gnbLi.eq(1).addClass('on')
  }else if(scroll>ux && scroll<contact){
    gnbLi.removeClass('on')
    gnbLi.eq(2).addClass('on')
  }else if(scroll>contact){
    gnbLi.removeClass('on')
    gnbLi.eq(3).addClass('on')
  }else{
    gnbLi.removeClass('on')
  }
})

//ABOUT ME!
  $('.meWrap').mouseover(function(){
    $(this).find('a').css({'background-image':'url(img/me/me2.png)',
  'border':'none'})
    $('.metxt').css('display','none');
    $('.me2txt').css('display', 'block');
  }).mouseout(function(){
    $(this).find('a').css({'background-image':'url(img/me/KakaoTalk_20210928_105755995_01.jpg)','border':'1px solid #eee'})
    $('.metxt').css('display','block');
    $('.me2txt').css('display', 'none');
  });

//컨셉서 
//jml
const con1Solide=$('.con1Solide'),
      con1SolideA=con1Solide.find('a'),
      con1Allow=$('.con1Allow'),
      con1prev=$('.con1prev'),
      con1Next=$('.con1Next'),
      con1Indicator=$('.con1Indicator');
  
let con1Saleng=con1SolideA.length,
    currentCon1=0,
    con1=0;


    $('.con1Slides').mouseover(function(){
      con1Allow.find('a').css('color','#D4ACAC')
    }).mouseout(function(){
      con1Allow.find('a').css('color','transparent')
    })

    con1Allow.find('a').click(function(){
      if($(this).hasClass('con1prev')){
        gotoslide(currentCon1-1)
      }else{
        gotoslide(currentCon1+1)
      }
    })

    function allow(){
      if(currentCon1==0){
        con1prev.addClass('hide')
      }else{
        con1prev.removeClass('hide')
      }
      if(currentCon1==con1Saleng-1){
        con1Next.addClass('hide')
      }else{
        con1Next.removeClass('hide')
      }
    }
    allow();

    function indi(){
      if(currentCon1==0){
        con1Indicator.find('a').eq(0).addClass('active')
      }else{
        con1Indicator.find('a').eq(0).removeClass('active')
      }
      if(currentCon1==1){
        con1Indicator.find('a').eq(1).addClass('active')
      }else{
        con1Indicator.find('a').eq(1).removeClass('active')
      }
      if(currentCon1==2){
        con1Indicator.find('a').eq(2).addClass('active')
      }else{
        con1Indicator.find('a').eq(2).removeClass('active')
      }
    }
    indi();

    function gotoslide(con1){
      con1Solide.stop().animate({'left':(-100*con1)+'%'});
      currentCon1=con1;
      allow();
      indi();
    }
    gotoslide(con1);

    $('.jmlC').click(function(){
      $('.conWrap1').show()
    });
    $('.con1Closse').click(function(){
      $('.conWrap1').hide()
    })


//mx    
const con2Solide=$('.con2Solide'),
      con2SolideA=con2Solide.find('a'),
      con2Allow=$('.con2Allow'),
      con2prev=$('.con2prev'),
      con2Next=$('.con2Next'),
      con2Indicator=$('.con2Indicator');
  
let con2Saleng=con2SolideA.length,
    currentCon2=0,
    con2=0;

    $('.con2Slides').mouseover(function(){
      con2Allow.find('a').css('color','#D4ACAC')
    }).mouseout(function(){
      con2Allow.find('a').css('color','transparent')
    })

    con2Allow.find('a').click(function(){
      if($(this).hasClass('con2prev')){
        gotoslide2(currentCon2-1)
      }else{
        gotoslide2(currentCon2+1)
      }
    })

    function allow2(){
      if(currentCon2==0){
        con2prev.addClass('hide')
      }else{
        con2prev.removeClass('hide')
      }
      if(currentCon2==con2Saleng-1){
        con2Next.addClass('hide')
      }else{
        con2Next.removeClass('hide')
      }
    }
    allow2();

    function indi2(){
      if(currentCon2==0){
        con2Indicator.find('a').eq(0).addClass('active')
      }else{
        con2Indicator.find('a').eq(0).removeClass('active')
      }
      if(currentCon2==1){
        con2Indicator.find('a').eq(1).addClass('active')
      }else{
        con2Indicator.find('a').eq(1).removeClass('active')
      }
    }
    indi2();

    function gotoslide2(con2){
      con2Solide.stop().animate({'left':(-100*con2)+'%'});
      currentCon2=con2;
      allow2();
      indi2();
    }
    gotoslide2(con2);

    $('.mxC').click(function(){
      $('.conWrap2').show()
    });
    $('.con2Closse').click(function(){
      $('.conWrap2').hide()
    })
})//e:ready