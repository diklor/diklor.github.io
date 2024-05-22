window.onload = function () {
    $.getScript('/scripts/script.js');

    download()
    $('#download_again').click(download)
}


function download() {
    console.log(window.location.pathname);
    const path_name = window.location.pathname.trimEnd('.html').trimStart('/');

    var download_url = 'https://matix.li/23b30224815a;'
    if          (path_name.match('linux')) { download_url = 'https://matix.li/23b30224815a' }
    else if     (path_name.match('macos')) { download_url = 'https://matix.li/23b30224815a' }
    
    window.open(download_url, '_self')
}

