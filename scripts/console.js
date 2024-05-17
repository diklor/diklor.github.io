const myRequest = new Request('https://raw.githubusercontent.com/diklor/verdict_doc/main/general/console/commands.md');
var converter = new showdown.Converter();

fetch(myRequest)
    .then((response) => response.text())
    .then((text) => {
        console.log(converter.makeHtml(text));
        document.querySelector('.main_text').insertAdjacentHTML('beforeend', `<p class='markdown'>${converter.makeHtml(text)}</p>`);
    })
    .catch((error) => {
        console.error(error);
        toggle_popup('Error', error);
    });
