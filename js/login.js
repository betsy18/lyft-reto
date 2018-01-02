$(document).ready(function() {
  // variables
  var $txtName = $('#txtName');
  var $txtLastName = $('#txtLastName');
  var $txtEmail = $('#txtEmail');
  var $chkBox = $('#chkBox');
  var $btnNext = $('#btnNext');
  var $validateName = false;
  var $validateLastName = false;
  var $validateEmail = false;
  var $validateChk = false;
  $btnNext.attr('disabled', true);

  // eventos
  $txtName.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 2) {
      $validateName = true;
      active();
    } else {
      $validateName = false;
      $btnNext.attr('disabled', true);
    }
  });

  $txtLastName.on('input', function(event) {
    event.preventDefault();
    if ($(this).val().length > 2) {
      $validateLastName = true;
      active();
    } else {
      $validateLastName = false;
      $btnNext.attr('disabled', true);
    }
  });

  $txtEmail.on('input', function(event) {
    event.preventDefault();
    var regExpre = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (regExpre.test($(this).val())) {
      $validateEmail = true;
      active();
    } else {
      $validateEmail = false;
      $btnNext.attr('disabled', true);
    }
  });

  $chkBox.on('click', function(event) {
    if (event.target.checked) {
      $validateChk = true;
      active();
    } else {
      $validateChk = false;
      $btnNext.attr('disabled', true);
    }
  });

  $btnNext.on('click', function(event) {
    event.preventDefault();
    window.location.href = '../views/exit.html';
  });

  // funciones para la validacion
  function active() {
    if ($validateName && $validateLastName && $validateEmail && $validateChk) {
      $btnNext.attr('disabled', false);
    }
  }
});