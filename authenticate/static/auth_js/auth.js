$(document).ready(function () {
  $("#phone").inputmask("+(380) 99-999-9999");
  $(".reg").click(function (e) {
    e.preventDefault();
    if ($("#password").val().length > 7) {
      if ($("#password").val() === $("#confirm_password").val()) {
        $.ajax({
          type: "POST",
          url: $(this).val(),
          data: $(".form").serializeArray(),
          success: function (response) {
            $(".error").html("");
            $(".error").html(response["error"]);
            if (response["access"] === "available") {
              window.location = $(".redirect_url").val();
            }
          },
        });
      } else {
        $(".error").html("Паролі не співпадають");
      }
    } else {
      $(".error").html("Пароль має містити не менше 8 символів");
    }
    
  });

  $(".log").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: $(this).val(),
      data: $(".form").serializeArray(),
      success: function (response) {
        $(".error").html(response["error"]);
        if (response["access"] === "available") {
          window.location = $(".redirect_url").val();
        }
      },
    });
  });
});
