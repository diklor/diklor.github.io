const menu = document.querySelector('menu');


function delete_button() {
    const element = document.getElementById('0')
    element.parentNode.removeChild(element)
}
function toggle_popup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}
function toggle_menu() {
    const menus = document.getElementById('menu');
    menus.classList.toggle('active');
}