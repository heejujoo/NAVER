$(function(){
let bWidth = $('#show>ul>li').width();
console.log(bWidth);
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


// 서비스 갤러리
$('#box02 ul>li').on('click',function(){
  let img = $(this).attr('url');
  console.log(img); 
  $(this).attr('url')
});



});//전체