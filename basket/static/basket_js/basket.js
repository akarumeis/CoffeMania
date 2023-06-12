$(document).ready(function () {
  $(".amount").each(function (index, amount) {
    if ($(amount).html() == "1") {
      $(amount).parent().find(".minus").css("color", "grey");
    } else {
      $(amount).parent().find(".minus").css("color", "black");
    }
  });

  $(".change_amount").click(function () {
    // Получить CSRF-токен
    const csrf = $("input[name=csrfmiddlewaretoken]").val();
    let product_pk = $(this).parent().parent().find(".product_pk").val();
    let url = $(this).parent().parent().find(".change_amount").val();
    let div = $(this).parent().find(".amount");
    let inner_div = +$(this).parent().find(".amount").html();
    let operation = +$(this).data("value");
    if (inner_div > 0 && +inner_div <= 99) {
      if (inner_div == 1 && operation == -1) {
        div.html("1");
        div.parent().find(".minus").css("color", "grey");
      } else {
        $.ajax({
          type: "POST",
          url: url,
          data: { csrfmiddlewaretoken: csrf, product_pk: product_pk, operation: operation },
          success: function () {
            div.html(inner_div + operation);
            div.parent().find(".minus").css("color", "black");
          },
        });
      }
    }
    let div_any = $(this).parent().find(".amount");
    if (div_any.html() == "1") {
      div_any.parent().find(".minus").css("color", "grey");
    } else {
      div_any.parent().find(".minus").css("color", "black");
    }
  });

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
        $.get($(".basket-url").val(), function (data) {
          // Выбор контейнера на другой странице, куда будет отображено содержимое
          let container = $(".modal-basket");
          // Вставка полученного HTML-содержимого в контейнер
          container.html(data);
        });
      },
    });
  });

  $(".close_basket").click(function () {
    $(".modal-basket").css("display", "none");
    $("body").css("overflow", "auto");
    $(".modal-basket-cloth").css("display", "none");
    $("body").css("overflow-x", "hidden");
  });

  $(".modal-basket-cloth").click(function () {
    $(".modal-basket").css("display", "none");
    $("body").css("overflow", "auto");
    $(".modal-basket-cloth").css("display", "none");
    $("body").css("overflow-x", "hidden");
  });
});
