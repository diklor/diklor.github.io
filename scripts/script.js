"use strict";
const menu = document.querySelector('.menu');
var converter = new showdown.Converter();
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
const myRequest = new Request('https://raw.githubusercontent.com/diklor/verdict_doc/main/general/console/commands.md');
fetch(myRequest)
    .then((response) => response.text())
    .then((text) => {
    console.log(converter.makeHtml(text));
    document.querySelector('.main_text').insertAdjacentHTML('beforeend', `<p class='markdown'>${converter.makeHtml(text)}</p>`);
})
    .catch(error => console.error(error));
