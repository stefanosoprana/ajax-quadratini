$(document).ready(function(){

  for (var i = 0; i < 37; i++) {

    $.ajax({
      url : 'https://www.boolean.careers/api/random/int',
      method : 'GET',
      success : function(data){

        var numeroRandom = data.response;
        console.log(numeroRandom);

      },
      error : function(){
        console.log('errore');
      },

    });

    $('.square-container').append(square);

    var square = $('.template .square').clone()

    $(square).children().append()

  }

});
