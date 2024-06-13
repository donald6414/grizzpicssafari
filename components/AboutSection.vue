<template>
  <div>
    <div class="about-sec pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="about-desc">
              <div class="sec-title">
                <h1><span>About </span>Grizzpics Treks & Safari's</h1>
                <p>
                  At Grizzpicssafari, we are not just a travel company; we are
                  your gateway to the untamed beauty of Tanzania. With a passion
                  for wildlife, photography, and sustainable tourism, we curate
                  exceptional safari experiences that go beyond expectations.
                  Our team of experienced guides and conservation enthusiasts is
                  dedicated to sharing the wonders of Tanzania, from the iconic
                  Serengeti to the hidden treasures of Ngorongoro Crater.
                </p>
                <p>
                  As avid believers in responsible tourism, we strive to leave a
                  positive impact on both the environment and local communities.
                  Our safari adventures are crafted to offer a perfect blend of
                  luxury and authenticity, ensuring you not only witness the
                  breathtaking landscapes and wildlife but also contribute to
                  their conservation.
                </p>
                <p>
                  Whether you're a seasoned photographer, a nature enthusiast,
                  or a family seeking an unforgettable adventure,
                  Grizzpicssafari welcomes you to embark on a journey where each
                  moment is a captured memory and every step leaves a footprint
                  of sustainability. Join us in exploring the wild heart of
                  Tanzania, where every safari is a story waiting to be told.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="about-us-img">
              <img
                class="w-100 h-100"
                src="../assets/images/about1.jpg"
                alt="About-Grizzpics-Treks-&-Safari's"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pb-100 {
  padding-bottom: 100px;
}
.pt-100 {
  padding-top: 100px;
}

.about-desc {
  display: inline-block;
  width: 100%;
  padding-right: 40px;
}

.about-sec .sec-title {
  margin: 0;
  text-align: left;
}
.sec-title {
  margin: 0 250px 60px;
  text-align: center;
}

.sec-title h1 {
  font-size: 38px;
  font-weight: bold;
}

.sec-title h1 span {
  position: relative;
  color: #3f230b;
  /* color: #fab909; */
}

.sec-title p {
  margin-bottom: 0;
  margin-top: 20px;
}

.about-us-img {
  position: relative;
  z-index: 2;
}

img {
  max-width: 100%;
  height: auto;
}

img {
  vertical-align: middle;
}
img {
  border: 0;
}

.about-us-img::before {
  position: absolute;
  content: "";
  background: #3f230b;
  /* background: #fab909; */
  width: 100%;
  height: 100%;
  left: -25px;
  top: 30px;
  z-index: -1;
}

:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
