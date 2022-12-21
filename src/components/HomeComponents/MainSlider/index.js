import React from 'react';
import "./index.scss";

function MainSlider() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/0A33FE2D-9022-44B7-9FA3-A20C787F0D00/fwebp" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/9EB0C91D-5C6D-4F7E-AEB1-7823F8B76594/fwebp" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/BA27DC28-9633-4768-BF7B-2A37EFAA3C74/fwebp" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}

export default MainSlider