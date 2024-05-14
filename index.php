<!DOCTYPE html>
<html lang='en'>


<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Verdict</title>
  <link rel='stylesheet' href='css/styles.css' />
  <link rel='stylesheet' href='css/popup.css' />
  <link rel='stylesheet' href='css/nav_menu.css' />
  <link rel='stylesheet' href='consts/vars.css' />
  <script src='node_modules/showdown/dist/showdown.js'></script>
  <script src=scripts/script.js></script>
</head>


<body>
  <div class='container__main'>
    <div class='main'>
         <?php include "./header.html" ?>
    </div>
  </div>


  <body class='footer_image'></body>

  <div class="footer__wrapper">
    <footer>
      <nav>
        <ul>
          <li class='footer_li'>
            <a href='#!'>Faq</a>
          </li>
          <li class='footer_li'>
            <a href='#!'>Privacy Policy</a>
          </li>
          <li class='footer_li'>
            <a href='#!'>Contact</a>
          </li>
        </ul>
      </nav>
    </footer>


    <div id='popup' class='popup'>
      <div class="popup__background"></div>
      <div class="popup_window">
        <div class="popup__header">
          <h3 style='color: hsl(0 0% 70%);' id='PopupTitle'>Title</h3>
          <b>
            <h3>
              <div class="close_btn" onclick='toggle_popup()'>
                &times;
              </div>
            </h3>
          </b>
        </div>

        <div style='padding: 20px 40px;' class="popup_content">
          <p id='PopupContentText'>Hel lo</p>
        </div>
      </div>
    </div>
  </div>
</body>

</html>