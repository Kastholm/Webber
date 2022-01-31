$(window).ready(function () {
  $(".boton").wrapInner("<div class=botontext></div>");

  $(".botontext").clone().appendTo($(".boton"));

  $(".boton").append(
    '<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>'
  );

  $(".twist").css("width", "25%").css("width", "+=3px");
});

$(window).ready(function () {
  $(".boton2").wrapInner("<div class=boton2text></div>");

  $(".boton2text").clone().appendTo($(".boton2"));

  $(".boton2").append(
    '<span class="twist2"></span><span class="twist2"></span><span class="twist2"></span><span class="twist2"></span>'
  );

  $(".twist2").css("width", "25%").css("width", "+=3px");
});
