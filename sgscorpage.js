$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.resources-menu').first().stop(true, true).slideDown(300);
});
