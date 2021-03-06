import React, { Component } from 'react';
// import "../assets/vendor/icofont/icofont.min.css" 
// import "../assets/vendor/boxicons/css/boxicons.min.css"
// import "../assets/vendor/owl.carousel/assets/owl.carousel.min.css"
// import "../assets/vendor/venobox/venobox.css" 
// import "../assets/vendor/remixicon/remixicon.css"
// import "../assets/vendor/aos/aos.css"

class Header extends Component {
    render() {

      
        return (
            <div  >
                <header id="header" class="fixed-top bg-dark transparent" >
                  <div className={{opacity: '0.5'}}>
    <div class="container d-flex align-items-center justify-content-between ">

      <h1 class="logo"><a href="index.html">Genesis Forger<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --></div>
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

      <navbar-dark class="nav-menu d-none d-lg-block ">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </navbar-dark>

      <a href="#about" class="get-started-btn scrollto">Get Started</a>

    </div>
    </div>
  </header>
            </div>
        );
    }
}

export default Header;