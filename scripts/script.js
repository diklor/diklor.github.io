window.onload = function () {
    console.log('dasdasdasdadasdasdsdfdasdfs');
    toggle_menu();
    load_collapsibles();

    $("#template_footer").load("footer.html");
    $("#template_header").load("header.html");
}



function delete_button() {
    const element = document.getElementById('0')
    element.parentNode.removeChild(element)
}
function toggle_popup(title_text, content_text) {
    const element = document.getElementById('popup');
    if (element) {
        element.classList.toggle('active');
        document.getElementById('PopupTitle').textContent = title_text
        document.getElementById('PopupContentText').textContent = content_text
    }
}
function toggle_menu() {
    const menu = document.getElementById('menu');
    if (menu) { menu.classList.toggle('active'); }
}



function load_page(page_path) {
    if (page_path.startsWith('https')) {
        window.open(page_path, '_blank')
        return
    }
    toggle_menu()

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
            console.error(error)
            toggle_popup('Error', error);
        });
}


function load_script(url) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}



function download() {
    console.log(window.location.pathname);
    const path_name = window.location.pathname.trimEnd('.html').trimStart('/');

    var download_url = 'https://matix.li/23b30224815a;'
    if (path_name.match('linux')) { download_url = 'https://matix.li/23b30224815a' }
    else if (path_name.match('macos')) { download_url = 'https://matix.li/23b30224815a' }

    window.open(download_url, '_self')
}



self.addEventListener("fetch", evt => {
    if (evt.request.url.indexOf('intercept-me')) {
        $('#image').remove();
    }
})




function load_collapsibles() {
    $('.collapsible_btn').each(function (i, el) {
        $(this).click(function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
        });
    })
}
