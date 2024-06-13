<template>
  <!-- <div class="container"> -->
  <div style="height: 100vh">
    <div
      class="position-relative d-flex flex-column justify-content-center align-items-center h-100"
    >
      <img
        src="/assests/images/hero/top-2.png"
        alt=""
        class="w-100 position-absolute top-0 start-0"
      />
      <div class="position-absolute hero-title">
        <h1 class="hero_minititle">DISCOVER YOUR NEXT</h1>
        <h1 class="hero_maintitle">ADVENTURE</h1>
      </div>
      <img
        src="/assests/images/hero/bottom-2.png"
        alt=""
        class="w-100 position-absolute top-0 start-0"
      />
      <!-- <div class="position-absolute hero-title">
        <h1 class="hero_minititle dicover">DISCOVER YOUR NEXT</h1>
        <h1 class="hero_maintitle stroke">ADV <span>ENT</span> URE</h1>
      </div> -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.hero-title {
  top: 18rem;
}

.hero_minititle {
  margin-bottom: 0;
  line-height: normal;
  color: #fff;
  font-size: 2rem;
  transition: 0.5s ease-in-out;
  margin-top: 0px;
  opacity: 1;
}
.hero_maintitle {
  font-size: 9rem;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  transition: 0.6s ease-in-out;
  margin-top: 0px;
  background: linear-gradient(180deg, #fff 50%, rgba(255, 255, 255, 0) 70.22%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  pointer-events: none;
}

.dicover {
  -webkit-text-fill-color: transparent;
}

.stroke {
  -webkit-text-fill-color: transparent;
  background: transparent;
}
.stroke span {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 0.7px;
}
</style>