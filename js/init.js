(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    const forms = document.querySelectorAll('.side_add_product');
    M.Sidenav.init(forms, { edge: 'right' });

  }); // end of document ready
})(jQuery); // end of jQuery name space
