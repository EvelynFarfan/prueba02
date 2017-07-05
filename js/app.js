var clickBurgerMenu = function(){
  $(".rad-toggle-btn").on('click', function() {
    $('.sidenav-overlay').toggleClass("opacidad");
    $(".rad-sidebar").toggleClass("rad-nav-min");
    $(".rad-body-wrapper").toggleClass("rad-nav-min");
    setTimeout(function() {
      initializeCharts();
    }, 300);
  });
  function initializeCharts() {
    $(".rad-chart").empty();
  }
  initializeCharts();
}

var clickOpacidad = function(){
  $(".sidenav-overlay").on('click', function(){
    $(".rad-sidebar").removeClass("rad-nav-min");
    $(".rad-body-wrapper").removeClass("rad-nav-min");
    $(".sidenav-overlay").toggleClass("opacidad")
  });
}

var collapse = function(){
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
    $('ul.nav-tabs li a.textMenuDetailFamily').click(function(){ 
      $('ul.nav-tabs li').removeClass('activado');
      $(this).parent().addClass('activado');
    });
}

var validacionForm = function(){
  $('.form-control').on('input', function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
  });
}

var activeLi = function(){
  $('li.liMenu a').click(function(){ 
    $('li.liMenu').removeClass('activate');
    $(this).parent().addClass('activate');
  });
}

$(document).ready(function(){

  clickBurgerMenu();
  clickOpacidad();
  collapse();
  validacionForm();
  activeLi();
  jsrj();
  
  $.fn.responsiveTabs = function() {
    return this.each(function() {
      var el = $(this),
          tabs = el.find('dt'),
          content = el.find('dd'),
          placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

      tabs.on('click', function() {
        var tab = $(this);

        tabs.not(tab).removeClass('active');
        tab.addClass('active');

        placeholder.html( tab.next().html() );
      });

      tabs.filter(':first').trigger('click');
    });
  }
  $('.responsive-tabs').responsiveTabs();

});