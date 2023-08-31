// ハンバーガーアニメーション
$(function() {
$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $(".sp-nav").toggleClass("open");
});

$(".toTop img").click(function(){
  $("html,body").animate({scrollTop:0},500);
});
});


$(function(){
    $('#slider1').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 6000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 4, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      infinity:true,

      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2, //画面幅750px以下でスライド3枚表示
          },
        },
        {
            breakpoint: 480,
           settings: {
                slidesToShow: 1,
            },
        },
       
    
      ]
    });
  });
  
  
  $(function(){
    $('#slider2').slick({
        arrows:true,
        autoplay:false,
        slidesToShow:4,
        slidesToScroll:1,
        // autoplay: true,
        // autoplaySpeed: 0,
        // speed: 7000,
        prevArrow:'<div class="slick-prev"></div>',
        nextArrow:'<div class="slick-next"></div>',
        adaptiveHeight: true,
        dots: true,
        // dotsClass: 'slide-dots'


        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2, //画面幅750px以下でスライド3枚表示
            },
          },
          {
              breakpoint: 480,
             settings: {
                  slidesToShow: 1,
              },
          },
        ]
    });
  });

  // sub

  $(function(){
    $(".sub-mainvisual").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
});

$(function(){
  $('#subImg img').on('click',function(){
      //mainに切り替えるimgのsrc取得
      img = $(this).attr('src');
      //currentクラス付け替え
      $('#subImg li').removeClass('current');
      $(this).parent().addClass('current');
      //fadeOutできたらsrc変更してfadeIn
      $('#mainImg img').fadeOut(50, function() {
          $('#mainImg img').attr('src', img).on('load', function() {
               $(this).fadeIn();
          })
     })
  });
});

$(function(){
  //各.musicInfoを順番に処理していきます。
  $(".musicInfo").each(function(){
    //.music-cardの数を調べて変数に取っておく
    var num=$(".music-card",this).length;

    //数を4で割ったあまりを調べる（%の演算子であまりを求めることができます）
    var amari=num%4;

    //あまりが0より大きかった場合、（4で割り切れない数であるということ）
    if(amari>0){
      //足らない個数を繰り返しを使って要素を追加していく
      for(var i=amari; i<4; i++){
        $(this).append('<article class="music-card">');
      }
    }
  })
});

$(function(){
  // ボタンを選択
  $("button").click(function(){
    // value属性の値を取得
    var target = $(this).attr("value");

    // 全てのli要素を調べる
    $("#list li").each(function(){
      // 一度全て非表示にする
      $(this).animate({"opacity" : 0}, 300, function(){
        $(this).hide();

        // フィルタリングの条件を満たしているか
        if($(this).hasClass(target) || target == "all"){
          // 条件を満たしている場合は再表示
          $(this).show();
          $(this).animate({"opacity" : 1}, 300);
        }
      });
    });
  });
});
