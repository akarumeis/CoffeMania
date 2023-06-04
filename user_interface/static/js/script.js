// Добавление класса "active" к активному пункту меню
$(".menu-button").each(function () {
  if (window.location.href === $(this).prop("href")) {
    $(this).addClass("active");
  }
});

// Обработчик клика на кнопке добавления товара
$(".add-product-button").click(function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: $(".product-url").val(),
    data: $("#basket_form").serializeArray(),
    success: function () {},
  });
});
