window.onload = function () {
  const image = document.querySelector("#image")

  $("#download_btn").hover(function () {
    image.classList.add("on_hover");
  }, function () {
    image.classList.remove("on_hover");
  });
}