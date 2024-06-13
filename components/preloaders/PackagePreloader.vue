<template>
  <div>
    <div class="card tour-card">
      <div class="bg-image hover-overlay ripple ripple-surface-light">
        <div class="tour_title">
          <div class="title mb-2"></div>
          <div class="title2"></div>
        </div>
      </div>
      <div class="card-body position-relative mx-3 px-1">
        <p class="price"></p>
        <p class="country"></p>
        <p class="start_end"></p>
        <!-- <p class="tour_type"></p>
        <p class="destination"></p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tour-card {
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2.5rem;
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-decoration: none;
  color: #000;
  background-color: #fff !important;
}

.tour-card .bg-image {
  background-size: cover;
  position: relative;
  width: 100%;
  height: 250px;
}
.card .bg-image {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.bg-image {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 1;
}
.bg-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 1;
}

.tour-card .tour_title {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: left;
  padding: 12px 10px;
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    180deg,
    transparent 0,
    rgba(0, 0, 0, 0.3) 45%,
    rgba(0, 0, 0, 0.5)
  );
  text-shadow: 1px 1px 5px #000;
  color: #fff;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 1.875rem;
  margin: 40px 0 0;
}

.tour-card:hover {
  cursor: pointer;
  box-shadow: 0 1px 13px rgba(0, 0, 0, 0.6);
  transition-duration: 0.25s;
}

.trip-route {
  min-height: 63px;
}
.title {
  height: 30px;
  width: 80%;
  background-color: grey;
}
.title2 {
  height: 30px;
  width: 40%;
  background-color: grey;
}

.price {
  height: 20px;
  width: 30%;
  background-color: grey;
}
.country {
  height: 20px;
  width: 40%;
  background-color: grey;
}

.start_end {
  height: 20px;
  width: 50%;
  background-color: grey;
}

.tour_type {
  height: 20px;
  width: 45%;
  background-color: grey;
}

.destination {
  height: 20px;
  width: 40%;
  background-color: grey;
}
</style>
