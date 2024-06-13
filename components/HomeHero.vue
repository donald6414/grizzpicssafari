<template>
  <div class="hero body">
    <section class="bg-fixed main-banner position-relative w-100">
      <div class="owl-item">
        <div class="single-slide">
          <div class="slider-text">
            <div class="slider-wraper container">
              <h1 style="opacity: 1" class="animated fadeInLeft hero-text">
                The Best Safaris <br />
                In<span> Tanzania</span>
              </h1>
              <p style="opacity: 1" class="animated fadeInDown">
                Let Us Take You to a Place You’ve <span>Never Been Before</span>
              </p>
              <ul>
                <li>
                  <a
                    href="#popular_package"
                    style="opacity: 1; margin-right: 10px"
                    class="animated fadeInUp"
                    >Read More</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  font-family: "Gentium Basic", serif;
}
.hero {
  height: 675px;
  /* height: 100vh; */
  width: 100%;
}

@media screen and (max-device-width: 640px) {
  .hero {
    height: 100vh;
  }
}

.main-banner {
  background-image: url("../public/assests/images/hans-veth-l3JFOycKri0-unsplash.jpg");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.owl-item {
  min-height: 1px;
  float: left;
  -webkit-backface-visibility: hidden;
  -webkit-touch-callout: none;
  width: 100%;
}
.owl-item {
  -webkit-tap-highlight-color: transparent;
  position: relative;
  top: 50%;
}

.single-slide {
  background-position: center center;
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
}

.slider-overlay {
  background-color: #262626;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}

.slider-text {
  top: 50%;
}

.slider-text {
  left: 0;
  position: relative;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
  z-index: 2;
}

.slider-wraper {
  overflow: hidden;
  position: relative;
  z-index: 999;
  text-align: left;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.slider-text h1 {
  color: rgb(255, 255, 255);
}
.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

h1 {
  font-weight: 600;
  color: #262626;
  margin: 0px 0px 20px;
}

.slider-wraper p {
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
}

ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}

.slider-text li {
  display: inline-block;
}

element.style {
  opacity: 1;
}
.owl-carousel .animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.slider-text li a {
  color: rgb(255, 255, 255);
  display: inline-block;
  margin-top: 8px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 36px;
  border-width: 1px;
  border-style: solid;
  border-color: #846644;
  border-image: initial;
  text-decoration: none;
}

.slider-text li:last-child a {
  background: #846644 none repeat scroll 0 0;
  color: #fff;
}

h1 span {
  color: #846644;
}
.slider-text li:last-child a:hover {
  background: #fff none repeat scroll 0 0;
  transition: all 0.4s ease 0s;
  color: #262626;
}
.hero-text {
  font-size: 5rem;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}
.base-line-text {
  font-size: 2rem;
  font-weight: 400;
}
</style>
