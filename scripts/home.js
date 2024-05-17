window.onload = function () {
  const image = document.querySelector("#image");

  $(".download_btn").each(function (i, el) {
    $(this).hover(
      () => image.classList.add('on_hover'),
      () => image.classList.remove('on_hover')
    );
    $(this).click(show_downloading_text.bind(el));
  });

  load_collapsibles();
}



function load_collapsibles() {
  $('.collapsible_btn').each(function (i, el) {
    $(this).click(function () {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    });
  })
}



var is_downloading = false;

function show_downloading_text(el) {
  if (is_downloading) { return }
  is_downloading = true;

  const downloading_text = document.querySelector(".downloading_text");
  if (!downloading_text.classList.contains('active')) {
    downloading_text.classList.add('active');
  }

  downloading_text.classList.add('flash');
  downloading_text.classList.remove('flash');


  window.open('https://matix.li/23b30224815a', '_self')

  setTimeout(() => {
    is_downloading = false;
    downloading_text.classList.remove('active');
  }, 1000);
}