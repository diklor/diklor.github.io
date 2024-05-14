"use strict";
const menu = document.querySelector('.menu');
window.onload = function () {
    $("#template_header").load("header.html");
};
function delete_button() {
    const element = document.getElementById('0');
    element.parentNode.removeChild(element);
}
function toggle_popup(title_text, content_text) {
    const element = document.getElementById('popup');
    if (element) {
        element.classList.toggle('active');
        document.getElementById('PopupTitle').textContent = title_text;
        document.getElementById('PopupContentText').textContent = content_text;
    }
}
function toggle_menu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
function load_page(page_path) {
    toggle_menu();
    const main_text = document.querySelector('.main_text');
    while (main_text.firstChild) {
        main_text.removeChild(main_text.firstChild);
    }
    var converter = new showdown.Converter();
    const myRequest = new Request('https://raw.githubusercontent.com/diklor/verdict_doc/main/' + page_path);
    fetch(myRequest)
        .then((response) => response.text())
        .then((text) => {
        main_text.insertAdjacentHTML('beforeend', `<p class='markdown'>${converter.makeHtml(text)}</p>`);
    })
        .catch((error) => {
        console.error(error);
        toggle_popup('Error', error);
    });
}
