$(document).ready(function () {
  $(".close_profile").click(function () {
    $(".modal-profile").css("display", "none");
    $("body").css("overflow", "auto");
    $(".modal-basket-cloth").css("display", "none");
    $("body").css("overflow-x", "hidden");
  });

  $(".modal-basket-cloth").click(function () {
    $(".modal-profile").css("display", "none");
    $("body").css("overflow", "auto");
    $(".modal-basket-cloth").css("display", "none");
    $("body").css("overflow-x", "hidden");
  });
});
