Template.subscribe.onRendered (function () {
  $("#subscribe-bot").validate({
    rules: {
      subscribe_bot__email: {
          required: true,
          email: true
       },
    },
    messages: {
      subscribe_bot__email: {
       required: "",
       email: ""
       },

     },
    submitHandler: function (form) {
      /*$.ajax({
        type: "POST",
           url: "/mail.php",
        data: $(form).serialize(),
        success: function () {
                      $(form).trigger("reset");
        }
      });*/
      return false; // required to block normal submit since you used ajax
    }
  });
});
