$(document).ready(function(){
  $('.sub_nav_content').on('click', function(){
    $('.main_content_section').removeClass('inactive');
    $('.image_gallery').addClass('inactive');
  });

  $('.sub_nav_gallery').on('click', function(){
    $('.image_gallery').removeClass('inactive');
    $('.main_content_section').addClass('inactive');
  });

  $('video').attr('loop','loop');
  // $('video').prop('muted', true);
  // $('.fa-volume-up').on('click', function(){
  //   $('video').prop('muted', false);
  // });

  $('.continue').on('click', function(){
    $('video').prop('muted', true);
    $('.home_page_nav').show(300);
    $('#hero').hide(500);
    $('#index_page').css('display', 'block');
  });


});
