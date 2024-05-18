document.addEventListener("DOMContentLoaded", function(){
  //scroll
  $(document).ready(function() {
    $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
    });
    });
    //

    //just-validate
    new window.justValidate('.contact-form', {
      rules: {
        username: {
          required: true,

        },
        email: {
          required: true,
        }
      },
      submitHandler: function(thisForm) {

      }
    })
});
