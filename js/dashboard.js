$(document).ready(function(){

// $('#carouselAsMenu').carousel({
//  interval: false,
//  keyboard: true,
//  wrap: true,
//  ride: false,
// });

$('#firstPage').click( () => {
  alert('continua tu aprendizaje')
  window.open('https://conversabbva.btgapps.com/conversa/faceme?instanceId=31790727-8632-383e-b884-5eb2b9e74ddd&langCode=es_ES');

});

$('#secondPage').click( () => {
  alert('tus planes de estudio');
});

$('#thirdPage').click( () => {
  alert('seccion de ayuda');
});

$('#exitFromApp').click( () => {
  alert('Hasta luego ;)');
  window.close();
});




// $('.carousel').on('slide.bs.carousel', function (e) {
//   // do something…
//   if(e.to == 0){
//     alert('1');
//     /*$('#firstPage').style.color = #3F6FAF;
//     $('#secondPage').style.color = black;
//     $('#thirdPage').style.color = black;*/
//
//   }else if(e.to == 1){
//     alert('1')
//     $('#firstPage').style.color = 'black';
//     $('#secondPage').style.color = '#3F6FAF';
//     $('#thirdPage').style.color = 'black';
//   }else if(e.to == 2){
//     $('#firstPage').style.color = 'black';
//     $('#secondPage').style.color = 'black';
//     $('#thirdPage').style.color = '#3F6FAF';
//   }else{
//     alert('error: este slide no existe');
//   }
// })

});
