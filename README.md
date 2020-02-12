
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=0.8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Asap&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/style.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <title>Document</title>
</head>

<body>
  <header id="header">
    <div class="container">
      <nav>
        <a href="index.html" class="navbrand"><img src="images/logo.png" alt="logo"></a>
        <ul class="navbar">
          <li class="navbar__icon bars"><i class="fa fa-bars"></i></li>
          <li class="navbar__item invisible" data-target="anchor"><a href="#header" class="navbar__link">home</a></li>
          <li class="navbar__item invisible" data-target="anchor"><a href="#about" class="navbar__link">about</a></li>
          <li class="navbar__item invisible" data-target="anchor"><a href="#services" class="navbar__link">services</a></li>
          <li class="navbar__item invisible" data-target="anchor"><a href="#portfolio" class="navbar__link">portfolio</a></li>
          <li class="navbar__item invisible" data-target="anchor"><a href="#footer" class="navbar__link">contact</a></li>
        </ul>
      </nav>

      <h1>Luis Oenrique</h1>
      <p>User Experience / User Interface Expert</p>

      <button class="know-more-btn" type="button">KNOW MORE</button>
      <button class="hire-me-btn" type="button">HIRE ME</button>
    </div>
  </header>

  <section id="about">
    <div class="container">
      <div class="about">
        <div class="about-left">
          <h2>
            __<br>
            KNOW MORE <br>
            ABOUT ME
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean <br> commodo ligula eget dolor. Aenean massa.
            Cum sociis natoque <br> penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.<br>
            Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem.<br>
            Nulla consequat massa quis enim.
          </p>
          <button class="my-cv-btn" type="button">DOWNLOAD MY CV</button>
        </div>
        <div class="about-right">
          <img src="images/about.png" alt="about" class="about-image">
        </div>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="container">
      <h2 class="center">__ <br> SERVICES</h2>
      <div class="services">
        <div class="service">
          <img src="images/1.png" alt="research" class="serv-icon">
          <p>User Research</p>
        </div>
        <div class="service">
          <img src="images/2.png" alt="list" class="serv-icon">
          <p>IA And Wireframes</p>
        </div>
        <div class="service">
          <img src="images/3.png" alt="testing" class="serv-icon">
          <p>User Testing</p>
        </div>
        <div class="service">
          <img src="images/4.png" alt="layers" class="serv-icon">
          <p>Looks and Feel <br>Design (UI)</p>
        </div>
        <div class="service">
          <img src="images/5.png" alt="pad" class="serv-icon">
          <p>Delivery</p>
        </div>
        <div class="service">
          <img src="images/6.png" alt="research" class="serv-icon">
          <p>Integration Support</p>
        </div>
      </div>
    </div>
  </section>



  <section id="portfolio">
    <div class="container">
      <h2 class="center">__ <br>PORTFOLIO</h2>
      <div class="portfolios">
        <img class="works" src="images/1p.png" alt="port">
        <img class="works" src="images/2p.png" alt="port">
        <img class="works" src="images/3p.png" alt="port">
        <img class="works" src="images/4p.png" alt="port">
        <img class="works" src="images/5p.png" alt="port">
        <img class="works" src="images/6p.png" alt="port">
      </div>

      <div class="btn-wrapper">
        <button class="more-btn" type="button">LOAD MORE</button>
      </div>
    </div>
  </section>

  <section id="testimonials">
    <div class="container">
      <h2 class="center">__ <br>TESTIMONIALS</h2>
      <div class="employee-slider">
        <div class="slides">
          <div>
            <img src="images/employee.png" alt="testimonials">
            <div class="bio">
              <h3>LIMARA TUSI1</h3>
              <span>CEO, RANDOM COMPANY</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean</br> commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus</p>
            </div>
          </div>
            <div>
            <img src="images/employee.png" alt="testimonials">
            <div class="bio">
              <h3>LIMARA TUSI2</h3>
              <span>CEO, RANDOM COMPANY</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean</br> commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus</p>
            </div>
            </div>
          <div>
            <img src="images/employee.png" alt="testimonials">
            <div class="bio">
              <h3>LIMARA TUSI3</h3>
              <span>CEO, RANDOM COMPANY</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean</br> commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus</p>
            </div>
          </div>
        </div>
        <ul class="slider-nav">
          <li class="slider-navbar__item">
            <div></div>
          </li>
          <li class="slider-navbar__item">
            <div></div>
          </li>
          <li class="slider-navbar__item">
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <footer id="footer">
    <div class="container">
      <h2 class="center">__ <br> SAY HELLO!</h2>
      <form class="contact-us" autocomplete="on">
        <input type="text" placeholder="Name" autocomplete="on">
        <input type="email" placeholder="Email" autocomplete="on">
        <textarea name="message" id="msg" cols="110" rows="20" placeholder="Message"></textarea>
        <button type="submit">SEND <i class="fa fa-paper-plane"></i></button>
      </form>
    </div>
  </footer>


  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="scripts/main.js" charset="utf-8"></script>
</body>

</html>
