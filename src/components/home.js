import React, { Component } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';

// import "../assets/vendor/icofont/icofont.min.css" 
// import "../assets/vendor/boxicons/css/boxicons.min.css"
// import "../assets/vendor/owl.carousel/assets/owl.carousel.min.css"
// import "../assets/vendor/venobox/venobox.css" 
// import "../assets/vendor/remixicon/remixicon.css"
// import "../assets/vendor/aos/aos.css"


class Home extends Component {

  // componentDidMount(){
  //   Aos.init() 
  // }
    render() {
        return (
            <div>
                 <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">

      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="col-xl-6 col-lg-8">
          <h1>Powerful Digital Solutions With Gp<span>.</span></h1>
          <h2>We are team of talanted digital marketers</h2>
        </div>
      </div>

      <div class="row mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div class="col-xl-2 col-md-4 col-6">
          <div class="icon-box">
            <i className="ri-store-line"></i>
            <h3><a href="">Lorem Ipsum</a></h3>
          </div>
        </div>
        <div class="col-xl-2 col-md-4 col-6 ">
          <div class="icon-box">
            <i className="ri-bar-chart-box-line" />
            <h3><a href="">Dolor Sitema</a></h3>
          </div>
        </div>
        <div class="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
          <div class="icon-box">
            <i className="ri-calendar-todo-line" />
            <h3><a href="">Sedare Perspiciatis</a></h3>
          </div>
        </div>
        <div class="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
          <div class="icon-box">
            <i class="ri-paint-brush-line"></i>
            <h3><a href="">Magni Dolores</a></h3>
          </div>
        </div>
        <div class="col-xl-2 col-md-4 col-6 mt-4 mt-xl-0">
          <div class="icon-box">
            <i className="ri-database-2-line"/>
            <h3><a href="">Nemos Enimade</a></h3>
          </div>
        </div>
      </div>

    </div>
  </section>
            </div>
        );
    }
}

export default Home;