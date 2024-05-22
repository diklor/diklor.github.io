window.onload = function () {
  const image = document.querySelector("#image");

  $(".download_btn").each(function (i, el) {
    $(this).hover(
      () => image.classList.add('on_hover'),
      () => image.classList.remove('on_hover')
    );
  });

  load_collapsibles();
}





