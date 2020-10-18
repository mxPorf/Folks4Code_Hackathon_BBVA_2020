$(document).ready(function(){


  $('#firstPage').click( () => {

    //link to conversa platform
    //window.open('https://conversabbva.btgapps.com/conversa/faceme?instanceId=31790727-8632-383e-b884-5eb2b9e74ddd&langCode=es_ES');
    //link to Uneeq conversational bot
    //window.open('https://creator.uneeq.io/personas/try/d67d22b3-3da7-4079-850f-f5199532ae27');
    window.location.href = 'conversation_bot.html';
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

  $('#linksEduFinanciera').click( () => {
    window.open('https://www.bbva.mx/educacion-financiera.html');
  });

});
