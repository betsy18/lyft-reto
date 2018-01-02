$(document).ready(function() {
  // variables
  var $nroCel = $('#nroCel'); 
  var $btnNext = $('#btnNext');
  $btnNext.attr('disabled', true);

  // esto es para el prefijo
  var $menu = $('#select');
  if ($menu.val('peru')) {

  } else if ($menu.val('colombia')) {
   
  } else if ($menu.val('eeuu')) {
   
  };


  // eventos
  $nroCel.on('input', function(event) {
    console.log(event.target.value);
    if ($(this).val().length === 9) {
      $btnNext.attr('disabled', false);
    } else {
      $btnNext.attr('disabled', true);
    }
  });

  $btnNext.on('click', function(event) {
    var random = Math.floor(Math.random() * (999) + 1);
    alert('Tu código: LAB-' + random);
  });
});

