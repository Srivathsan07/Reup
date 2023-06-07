$(document).ready(function(){
    // menu
   $(".menu-icon").click(function(){
   $(".detailed-menu-sec").addClass("show");
   });

   $(".close-icon").click(function(){
    $(".detailed-menu-sec").removeClass("show");
   });

    // password eye icon
    $("#new-pwd").click(function () {
        if ($(this).hasClass("eye-close")) {
          $(this).removeClass("eye-close");
          $(this).addClass("eye-open");
          $("#password").attr("type", "text");
        } else {
          $(this).removeClass("eye-open");
          $(this).addClass("eye-close");
          $("#password").attr("type", "password");
        }
      });
    //   confirm pwd
    $("#confirm-pwd1").click(function () {
        if ($(this).hasClass("eye-close")) {
          $(this).removeClass("eye-close");
          $(this).addClass("eye-open");
          $("#password-confirm1").attr("type", "text");
        } else {
          $(this).removeClass("eye-open");
          $(this).addClass("eye-close");
          $("#password-confirm1").attr("type", "password");
        }
      });

    // basic error message
      $(".sign-in-btn").click(function () {
        $(".form-item").addClass("error");
      });

      // profile tabs show more animation
      $('#show-more-content').hide();

      $('#show-more').click(function(){
          $('#show-more-content').slideDown(500);
          $('#show-less').show();
          $('#show-more').hide();
      });

      $('#show-less').click(function(){
          $('#show-more-content').slideUp(500);
          $('#show-more').show();
          $(this).hide();
      });

});

  //    onload modal
  $(window).on('load', function() {
    $('#exampleModal1').modal('show');
});