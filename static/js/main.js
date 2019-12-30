var lastScrollTop = 0,
    $element = $('#navbar'),
    $LinkItem = $('.nav-link'),
    className = 'shadow-lg  bg-white pt-3 pb-3 ';
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
        $element.addClass(className);
        $LinkItem.addClass('Main-Color');
   } else if(st == 0) {
      $element.removeClass(className);
      $LinkItem.removeClass('Main-Color');
   }
   lastScrollTop = st;
});
