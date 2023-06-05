$(".reg_button").click(function (e) {
  e.preventDefault();
  if ($("#password").val() === $("#confirm_password").val()) {
    $.ajax({
      type: "POST",
      url: $(this).val(),
      data: $(".form").serializeArray(),
      success: function (response) {
        $(".error_password").html("");
        $(".error").html(response["error"]);
      },
    });
  } else {
    $(".error_password").html("Паролі не співпадають");
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
    },
  });
});
