$(".buy-button").click(function showBuyModalWindow() {
  $(".buy-button").remove();
  $(".buy-modal-window").css("display", "flex");
  const cover = document.createElement("div");
  cover.classList.add("cover");
  $("main").append(cover);
  $("body").css("overflow", "hidden");
});

$(".close-button").click(function hideBuyModalWindow() {
  $(".buy-modal-window").css("display", "none");
  document.querySelector(".cover").remove();
  $("body").css("overflow", "auto");
});

// Обработчик клика на кнопке удаления товара
$(".product-remove-button").click(function () {
  const csrf = $("input[name=csrfmiddlewaretoken]").val();
  const pk_product = $(this).val();
  $.ajax({
    type: "POST",
    url: $(".delete-product").val(),
    data: { csrfmiddlewaretoken: csrf, pk_product: pk_product },
    success: function () {
      $(`#product_${pk_product}`).remove();
    },
  });
});
