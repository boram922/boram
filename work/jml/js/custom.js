$(document).ready(function(){
//HEADER
//HEADER_nav
$('.gnb>li').mouseover(function(){
  $(this).find('.sub').stop().slideDown();
}).mouseout(function(){
  $(this).find('.sub').stop().slideUp();
})
//MAIN_slide
const $main=$('.main'),
      $slide=$('.slide'),
      $slides=$('.slides'),
      $slidesA=$slides.find('a'),
      slideCount=$slidesA.length;

const $indicator=$('.indicator'),
      $indicatorA=$indicator.find('a');

const $allow=$('.allow'),
      $btn_prev=$('.btn_prev'),
      $btn_next=$('.btn_next');

let currentIdx=0,
    input='',
    timer;

    $slides.css('width',100*slideCount+'%');
    $slidesA.each(function(i){
      let indiName=$(this).find('b').text();
      input+='<a href="#none">'+indiName+'</a>';
      $indicator.html(input);
    })

    $indicator.find('a').click(function(e){
      e.preventDefault();
      let idx=$(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      gotoslider(idx);
    })
    function gotoslider(idx){
      $slides.stop().animate({'left':(-100*idx)+'%'},1000);
      currentIdx=idx;
      allow();
    }
    $allow.find('a').click(function(){
      if($(this).hasClass('btn_prev')){
        gotoslider(currentIdx-1)
      }else{
        gotoslider(currentIdx+1)
      }
    })
    function allow(){
      if(currentIdx==0){
        $btn_prev.addClass('disabled')
      }else{
        $btn_prev.removeClass('disabled')
      }

      if(currentIdx==2){
        $btn_next.addClass('disabled')
      }else{
        $btn_next.removeClass('disabled')
      }
      $indicator.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');

      $slidesA.find('div').eq(currentIdx).addClass('on').next().removeClass('on');
    }

    allow();

    function start(){
      timer=setInterval(function(){
        let nextIdx=(currentIdx+1)%slideCount
        gotoslider(nextIdx);
      },4000)
    }
    start();

    function stop(){
      clearInterval(timer)
    }
    $slides.mouseover(stop).mouseout(start);

//boys_animation
let $new=$('.pro1').offset().top,
    $new_200=$new - 200;

$(window).scroll(function(){
  let scroll=$(this).scrollTop();

  if(scroll>$new_200){
    $('.boys_1>div').addClass('on');
    $('.boys_2>div').addClass('on1');
  }
})

//SNS_slide
const $snsSlideWrap=$('.sns_slideWrap'),
      $snsSlide=$('.sns_slide'),
      $snsSlides=$('.sns_slides'),
      $btnprev=$('.sns_btn_prev'),
      $btnnext=$('.sns_btn_next');

let currentSns=0,
    sns=0;

    $btnprev.click(function(){
      if(currentSns==0){
        gotoslideSns(5)
      }else{
        gotoslideSns(currentSns-1)
      }
    })
    $btnnext.click(function(){
      if(currentSns<5){
        gotoslideSns(currentSns+1)
      }else{
        gotoslideSns(0)
      }
    })

      function gotoslideSns(sns){
        $snsSlides.stop().animate({'margin-left':(-20*sns)+'%'},500);
        currentSns=sns;
      }
      gotoslideSns(sns);


})//e:ready