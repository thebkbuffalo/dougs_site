$(document).ready(function(){
  console.log('im ready!');

  $('.sub_nav_content').on('click', function(){
    $('.main_content_section').removeClass('inactive');
    $('.image_gallery').addClass('inactive');
  });

  $('.sub_nav_gallery').on('click', function(){
    $('.image_gallery').removeClass('inactive');
    $('.main_content_section').addClass('inactive');
  });

  $('.fancybox').fancybox();

  $('.continue').on('click', function(){
    $('video').prop('muted', true)
    $('#hero').hide(500);
    $('#main_content').css('display', 'block');
  });
});
