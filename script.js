function delete_button() {
    var element = document.getElementById('0')
    element.parentNode.removeChild(element)
}
function toggle_popup() {
    var popup = document.getElementById('popup-1')
    popup.classList.toggle('active');
}