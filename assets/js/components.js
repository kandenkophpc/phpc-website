/**
 * PHPC Shared Components - Injects common page elements
 * Usage: <script>phpc.topbar()</script> etc.
 */
const phpc = (function() {
  'use strict';

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page || currentPage.endsWith('/' + page) ? 'active' : '';
  }

  function topbar() {
    document.write(`
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:sales@phpcco.com">sales@phpcco.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+632 8 886-6974 to 83</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="https://twitter.com/PHPCCoLtdInc" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/PHPCCoLtdInc" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.linkedin.com/company/phpc-co.-ltd.-inc." class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section><!-- End Top Bar-->`);
  }

  function header() {
    const nav = {
      'index.html': isActive('index.html'),
      'about.html': isActive('about.html'),
      'services.html': isActive('services.html'),
      'news.html': isActive('news.html'),
      'org.html': isActive('org.html'),
      'careers.html': isActive('careers.html'),
      'contact.html': isActive('contact.html'),
    };
    document.write(`
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div id="logo">
        <a href="index.html"><img src="assets/img/phpckan.PNG" height="50" width="auto" alt="PHPC Logo" fetchpriority="high"></a>
      </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto ${nav['index.html']}" href="./index.html">Home</a></li>
          <li><a class="nav-link scrollto ${nav['about.html']}" href="./about.html">About</a></li>
          <li><a class="nav-link scrollto ${nav['services.html']}" href="./services.html">Our Services</a></li>
          <li><a class="nav-link scrollto ${nav['news.html']}" href="./news.html">News</a></li>
          <li><a class="nav-link scrollto ${nav['org.html']}" href="./org.html">Organization</a></li>
          <li><a class="nav-link scrollto ${nav['careers.html']}" href="./careers.html">Careers</a></li>
          <li><a class="nav-link scrollto ${nav['contact.html']}" href="./contact.html">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header><!-- End Header -->`);
  }

  function footer() {
    document.write(`
  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer" style="padding:0px !important; margin:0px !important;border:0px !important">
    <section id="call-to-action" style="color:white !important; padding-bottom: 10px !important">
      <div class="row">
        <div class="col-lg-4"><a href="./index.html"><img src="./assets/img/ISO.png" width="280" alt="ISO Certification" loading="lazy" decoding="async"></a></div>
        <div class="col-lg-6" style="text-align: left !important;">
          <br>
          <h5>Office Address</h5>
          <a href="./contact.html" style="color:white !important">Head Office</a> <br>
          <ul class="list-unstyled">
            <li><i class="bi bi-map" style="color:rgb(124, 180, 124) !important;padding-left:10px !important"></i> 11th Floor, Oledan Square 6788 Ayala Avenue, Makati City, Philippines</li>
            <li><i class="bi bi-phone" style="color:rgb(126, 172, 126) !important;padding-left:10px !important"></i> +632 8 886-6974 to 83 </li>
          </ul>
          <a href="./contact.html" style="color:white !important">Satellite Office</a>
          <ul class="list-unstyled">
            <li><i class="bi bi-map" style="color:rgb(131, 197, 131) !important;padding-left:10px !important"></i> 2nd St. Block 4 Lot 6 Meridian Industrial Complex, Sta. Rosa City, Laguna</li>
            <li><i class="bi bi-telephone" style="color:rgb(141, 192, 141) !important;padding-left:10px !important"></i> +634 9 503-4720</li>
          </ul>
        </div>
        <div class="col-lg-1" style="text-align: left !important;color:rgb(235, 235, 235) !important">
          <br><br>
          <ul class="list-unstyled">
            <li><a href="./about.html" style="color:white !important">About Us</a></li>
            <li><a href="./services.html" style="color:white !important">Services</a></li>
            <li><a href="./news.html" style="color:white !important">News</a></li>
            <li><a href="./org.html" style="color:white !important">Organization</a></li>
            <li><a href="./careers.html" style="color:white !important">Careers</a></li>
            <li><a href="./contact.html" style="color:white !important">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div align="center" id="myicons">
          <a href="https://twitter.com/PHPCCoLtdInc" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/PHPCCoLtdInc" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.linkedin.com/company/phpc-co.-ltd.-inc." class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
        <div class="col-md-6">
          PHPC Co., Ltd, Inc &copy; 2021. All Rights Reserved.
        </div>
        <div class="col-md-6">
          <a href="./disclaimer.html" style="color:white !important"><small>Disclaimer</small></a> |
          <a href="./termsofuse.html" style="color:white !important"><small>Terms and use</small></a>
        </div>
      </div>
    </section>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>`);
  }

  function headCommon(title, desc, kw, robots) {
    const robotsMeta = robots ? `<meta name="robots" content="${robots}">` : '';
    document.write(`
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <meta name="keywords" content="${kw}">
  ${robotsMeta}

  <!-- Favicons -->
  <link href="assets/img/kan.ico" rel="icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700&display=swap" rel="stylesheet">

  <!-- FontAwesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer">

  <!-- Vendor CSS CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7Gpt/L4FuidMZG" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.12.1/font/bootstrap-icons.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css" integrity="sha512-cn16Qw8mz5KZ/AXT0uVz+6Xq3o5Vc3R7qa50x1nN5wuX9o2zH0f6f8x4+5h6w1z3+hj5+0+3+7+5h6+1+5f+0z6" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10.3.1/swiper-bundle.min.css" crossorigin="anonymous">

  <!-- Template Main CSS -->
  <link href="assets/css/style.css" rel="stylesheet">`);
  }

  function scriptsCommon() {
    document.write(`
  <!-- Vendor JS CDN -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7Mg12o3qo2m9jz5YxK7o+y6X9m2zrYvgaJp/amZSf+5Cq6zn+e6c5D5l5d" crossorigin="anonymous"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" crossorigin="anonymous"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@10.3.1/swiper-bundle.min.js" crossorigin="anonymous"><\/script>
  <script src="assets/js/main.js"><\/script>`);
  }

  return {
    topbar,
    header,
    footer,
    headCommon,
    scriptsCommon
  };
})();

