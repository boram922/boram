$(document).ready(function(){
// 컨셉 슬라이드
//조말론

const $slideWrap=$('.jmlCon_slideWrap'),
      $slide=$('.jmlCon_slide'),
      $slideA=$slide.find('a'),
      $prev=$('.jmlPrev'),
      $next=$('.jmlNext');

let currentJml=0,
    jml=0;

    $prev.click(function(){
      if(currentJml==0){
        gotoslide(2)
      }else{
        gotoslide(currentJml-1)
      }
    })

    $next.click(function(){
      if(currentJml<2){
        gotoslide(currentJml+1)
      }else{
        gotoslide(0)
      }
    })

    function gotoslide(jml){
      $slide.stop().animate({'left':(-110*jml)+'%'},1000);
      currentJml=jml;
    }
    gotoslide(jml);

$('.jmlconcept').click(function(){
  $('.jmlCon').show()
})
$('.closeBtn').click(function(){
  $('.jmlCon').hide()
})

// MIXXO
const $mxslideWrap=$('.mxslideWrap'),
      $mxslide=$('.mxSlide'),
      $mxslideA=$mxslide.find('a'),
      $mxprev=$('.mxPrev'),
      $mxnext=$('.mxNext');

let currentMx=0,
    mx=0;

    $mxprev.click(function(){
      if(currentMx==0){
        gotoslider(1)
      }else{
        gotoslider(currentMx-1)
      }
    })

    $mxnext.click(function(){
      if(currentMx<1){
        gotoslider(currentMx+1)
      }else{
        gotoslider(0)
      }
    })

    function gotoslider(mx){
      $mxslide.stop().animate({'left':(-110*mx)+'%'},1000);
      currentMx=mx;
    }
    gotoslider(mx);

$('.mxconcept').click(function(){
  $('.mxcon').show()
})
$('.mxcloseBtn').click(function(){
  $('.mxcon').hide()
})

})//e:ready