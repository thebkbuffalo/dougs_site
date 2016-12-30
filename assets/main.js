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

  var userFeed = new Instafeed({
    get: 'user',
    userId: '29353142',
    accessToken: '29353142.1677ed0.f2b1fb1a11f142828884dd71018f59da',
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}"/></a>'
  });
  userFeed.run();
});
