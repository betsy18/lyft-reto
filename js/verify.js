$(document).ready(function() {
  // variables
  var $nroCod = $('#nroCod');
  var $btnNext = $('#btnNext');
  var $btnResend = $('#btnResend');
  $btnNext.attr('disabled', true);

  // comprobando el cod que se guardo
  console.log(localStorage.cod);

  //   eventos
  $btnResend.on('click', function(event) {
    event.preventDefault();
    var $random = Math.floor(Math.random() * (999) + 1);
    alert('Su nuevo código es: LAB-' + $random);
    localStorage.setItem('cod', $random);
  });

  $nroCod.on('input', function(event) {
    event.preventDefault();
    if ($(this).val() === localStorage.cod) {
      $btnNext.attr('disabled', false);
    } else {
      // alert('Código incorrecto');
      $btnNext.attr('disabled', true);
      $nroCod.focus();
    }
  });

  $btnNext.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/login.html';
  });
});