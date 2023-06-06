// Обработчик клика на кнопку покупки
$(".buy-button").click(function showBuyModalWindow() {
  // Скрыть кнопку покупки
  $(".buy-button").css("display", "none");
  // Показать модальное окно покупки
  $(".buy-modal-window").css("display", "flex");
  // Создать элемент-затемнитель
  const cover = document.createElement("div");
  cover.classList.add("cover");
  $("main").append(cover);
  // Заблокировать прокрутку страницы
  $("body").css("overflow", "hidden");
});

// Обработчик клика на кнопку закрытия модального окна покупки
$(".close-button").click(function hideBuyModalWindow() {
  // Показать кнопку покупки
  $(".buy-button").css("display", "flex");
  // Скрыть модальное окно покупки
  $(".buy-modal-window").css("display", "none");
  // Удалить элемент-затемнитель
  document.querySelector(".cover").remove();
  // Разблокировать прокрутку страницы
  $("body").css("overflow", "auto");
});

// Обработчик клика на кнопку удаления товара
$(".product-remove-button").click(function () {
  // Получить CSRF-токен
  const csrf = $("input[name=csrfmiddlewaretoken]").val();
  // Получить идентификатор удаляемого товара
  const pk_product = $(this).val();
  // Отправить AJAX-запрос на удаление товара
  $.ajax({
    type: "POST",
    url: $(".delete-product").val(),
    data: { csrfmiddlewaretoken: csrf, pk_product: pk_product },
    success: function () {
      // Удалить элементы товара из DOM-дерева
      $(`#product_${pk_product}`).remove();
      $(`#order_${pk_product}`).remove();
    },
  });
});
