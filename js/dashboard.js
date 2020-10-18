$(document).ready(function(){

$('#carouselAsMenu').carousel({
 interval: false,
 keyboard: true,
 wrap: true,
 ride: false,
});

$('#firstPage').click( () => {
  alert('first click');
  $('.carousel').carousel(0);

});

$('#secondPage').click( () => {
  $('#carouselAsMenu').carousel(1);
});

$('#thirdPage').click( () => {
  $('#carouselAsMenu').carousel(2);
});




$('.carousel').on('slide.bs.carousel', function (e) {
  // do something…
  if(e.to == 0){
    alert('1');
    /*$('#firstPage').style.color = #3F6FAF;
    $('#secondPage').style.color = black;
    $('#thirdPage').style.color = black;*/

  }else if(e.to == 1){
    alert('1')
    $('#firstPage').style.color = 'black';
    $('#secondPage').style.color = '#3F6FAF';
    $('#thirdPage').style.color = 'black';
  }else if(e.to == 2){
    $('#firstPage').style.color = 'black';
    $('#secondPage').style.color = 'black';
    $('#thirdPage').style.color = '#3F6FAF';
  }else{
    alert('error: este slide no existe');
  }
})

});
