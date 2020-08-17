$( document ).ready(function() {
  let isOpen = false;
  $('#header-btn').on('click', function() {
    if($('#header-icon').hasClass('fa-bars')) {
      $('#header-icon').removeClass('fa-bars').addClass('fa-times')
      isOpen = true
    } else {
      $('#header-icon').removeClass('fa-times').addClass('fa-bars')
      isOpen = false
    }
    if (isOpen) {
      $('.nav').addClass('active')
    } else {
      $('.nav').removeClass('active')
    }
  })
});