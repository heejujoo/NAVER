$(function(){
let bWidth = $('#show>ul>li').width();
// console.log(bWidth);
$('#show>ul>li:last-child').prependTo('#show>ul');
$('#show>ul').css('margin-left','-'+bWidth+'px');
//버튼
$('#banner>.next').on('click',function(e){
  $('#show>ul').animate({marginLeft:'-='+bWidth+'px'},300,function(){
    $('#show>ul>li:first').appendTo('#show>ul');
    $('#show>ul').css('margin-left','-'+bWidth+'px');
    });
  });
$('#banner>.prev').on('click',function(e){
  $('#show>ul').animate({marginLeft:'+='+bWidth+'px'},300,function(){
    $('#show>ul>li:last').prependTo('#show>ul');
    $('#show>ul').css('margin-left','-'+bWidth+'px');
    });
  });

  move();
  setInterval(move,4000);
  //함수만들기
  function move(){
    $('#show>ul').animate({marginLeft:'-='+bWidth+'px'},300,function(){
    //정리하기
    $('#show>ul>li:first').appendTo('#show>ul');
    $('#show>ul').css('margin-left','-'+bWidth+'px');
    });
  }

});//전체

// 서비스 구간 갤러리
//prev 버튼 누르면 다음걸로 text도 바꾸기
//객체사용

let liWidth = document.querySelector('.pull>li').clientWidth;
// console.log(liWidth);

$(function(){
  $('.pull>li:last').prependTo('.pull');
  $('.pull').css('margin-left','-'+liWidth+'px');
});

$('#prev').on('click',function(e){
  $('.pull').animate({marginLeft:'-='+liWidth+'px'},300,function(){
  $('.pull>li:first').appendTo('.pull');
  $('.pull').css('margin-left','-'+liWidth+'px');
  });
});
