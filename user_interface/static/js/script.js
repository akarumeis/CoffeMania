$(document).ready(function () {
  // Добавление класса "active" к активному пункту меню
  $(".menu-button").each(function () {
    if (window.location.href === $(this).prop("href")) {
      $(this).addClass("active");
    }
  });

  // Обработчик клика на кнопке добавления товара
  $(".add-product-button").click(function (e) {
    e.preventDefault();
    const csrf = $("input[name=csrfmiddlewaretoken]").val();
    let product_pk = $(this).parent().find('[class="product-pk"]').val();
    let url = $(this).parent().find('[class="product-url"]').val();

    // Сохраняем ссылку на текущий элемент
    let addButton = $(this);

    $.ajax({
      type: "POST",
      url: url,
      data: { csrfmiddlewaretoken: csrf, product_pk: product_pk },
      success: function () {
        addButton.attr("src", addButton.siblings(".add_in_basket").val());
        setTimeout(function () {
          addButton.attr("src", addButton.siblings(".default_basket").val());
        }, 1000);
        $.get($(".basket-url").val(), function (data) {
          // Выбор контейнера на другой странице, куда будет отображено содержимое
          let container = $(".modal-basket");
          // Вставка полученного HTML-содержимого в контейнер
          container.html(data);
        });
      },
    });
  });

  // ----------------modal-basket----------------//

  // Выполнение асинхронного запроса на сервер для получения HTML-страницы
  $.get($(".basket-url").val(), function (data) {
    // Выбор контейнера на другой странице, куда будет отображено содержимое
    let container = $(".modal-basket");
    // Вставка полученного HTML-содержимого в контейнер
    container.html(data);
  });

  $(".basket_btn").click(function () {
    $(".modal-basket").css("display", "flex");
    $("body").css("overflow", "hidden");
    $(".modal-basket-cloth").css("display", "flex");
  });

  $.get($(".profile-url").val(), function (data) {
    // Выбор контейнера на другой странице, куда будет отображено содержимое
    let container = $(".modal-profile");
    // Вставка полученного HTML-содержимого в контейнер
    container.html(data);
  });

  $(".profile_btn").click(function () {
    $(".modal-profile").css("display", "flex");
    $("body").css("overflow", "hidden");
    $(".modal-basket-cloth").css("display", "flex");
  });
});
