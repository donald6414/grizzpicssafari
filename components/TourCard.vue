<template>
  <!-- <div> -->
  <div>
    <nuxt-link :to="'tour-package/' + tour.id" class="card tour-card">
      <div class="bg-image hover-overlay ripple ripple-surface-light">
        <img
          :src="'https://api.grizzpicssafari.com/' + tour.image_url"
          :alt="tour.title"
          :title="tour.no_of_days + '-' + tour.title"
        />
        <div class="tour_title" data-v-172c6bb3="">
          <h2>{{ tour.no_of_days }}-{{ tour.title }}</h2>
        </div>
      </div>
      <div class="card-body position-relative mx-3 px-1">
        <p class="price">
          <template v-if="tour.alternative_price">
            <del style="margin-right: 10px">
              <b>${{ formatPrice(tour.price) }}</b>
            </del>
            <b>${{ formatPrice(tour.alternative_price) }}</b>
            pp (USD)
          </template>
          <template v-else>
            <b>${{ formatPrice(tour.price) }}</b>
            pp (USD)
          </template>
        </p>
        <!-- <p class="card-text mb-0" data-v-172c6bb3="">
          <strong data-v-172c6bb3="">6 Days: </strong>
          <span data-v-172c6bb3="">5 Nights</span>
        </p> -->
        <p class="card-text my-2 text-capitalize" data-v-172c6bb3="">
          <strong data-v-172c6bb3=""> Country: </strong>
          {{ tour.package_country.name }}
        </p>
        <p class="card-text my-2 text-capitalize" data-v-172c6bb3="">
          <strong data-v-172c6bb3=""> Start &amp; End: </strong>
          {{ tour.package_getting_there.tour_start.title }} -
          {{ tour.package_getting_there.tour_end.title }}
        </p>
        <p class="card-text my-2 text-capitalize" data-v-172c6bb3="">
          <strong data-v-172c6bb3=""> Tour Type: </strong>
          <span v-if="tour.tour_group">Group</span>
          <span v-else>Private</span>, {{ tour.package_level.title }}
        </p>
        <p class="card-text trip-route mb-0 text-capitalize" data-v-172c6bb3="">
          <strong data-v-172c6bb3=""> Destination: </strong>
          <span
            v-for="(destination, index) in tour.package_days"
            :key="destination"
            >{{ destination }}
            <span v-if="index < tour.package_days.length - 1">,</span>
          </span>
        </p>
      </div>
    </nuxt-link>
  </div>
  <!-- </div> -->
</template>

<script>
// const runtimeConfig = useRuntimeConfig();
export default {
  props: ["tour_package"],
  data: () => ({
    tour: {},
  }),
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat().format(price);
    },
  },
  created() {
    this.tour = this.tour_package;
  },
};
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
}
.bg-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 1;
}

.tour-card .tour_title[data-v-172c6bb3] {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: left;
  /* padding: 12px 10px; */
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    180deg,
    transparent 0,
    rgba(0, 0, 0, 0.3) 45%,
    rgba(0, 0, 0, 0.5)
  );
  /* text-shadow: 1px 1px 5px #000; */
  color: #fff;
  /* text-align: center; */
  /* font-weight: 700; */
  /* font-size: 19px;
  line-height: 1.5; */
  font-size: 1.625rem;
  line-height: 1.875rem;
  /* margin: 40px 0 0; */
}

.tour-card:hover {
  cursor: pointer;
  box-shadow: 0 1px 13px rgba(0, 0, 0, 0.6);
  transition-duration: 0.25s;
}

.trip-route {
  min-height: 63px;
}

.price {
  /* padding-top: 0.4375rem; */
  font-size: 0.875rem;
  color: #2a7018;
}

.price b {
  font-size: 1.375rem;
  font-weight: 600;
}

.price {
  padding: 0.4375rem 0.625rem 0.4375rem 0;
  display: inline-block;
}

.price {
  padding: 0.1875rem 0;
  clear: both;
}
@media (min-width: 1175px) {
  .price {
    padding-top: 0.3125rem;
  }
}

@media (min-width: 970px) {
  .price {
    padding-top: 0.75rem;
  }
}

@media (min-width: 744px) {
  .price {
    padding-top: 0.5rem;
  }
}

/* @media (min-width: 744px) {
  .price b {
    font-size: 1.375rem;
  }
} */

/* @media (min-width: 500px) and (orientation: landscape) {
  .price b {
    font-size: 1.375rem;
  }
} */
/* .price b {
  font-size: 1.25rem;
} */
.price b {
  padding: 0;
  margin: 0;
  display: inline;
}
/* @media (min-width: 744px) {
  .price b {
    font-size: 1.25rem;
  }
} */
/* .price b {
  font-size: 1.125rem;
} */

.tour_title h2 {
  padding: 4.375rem 1.25rem 1.0625rem;
  text-shadow: 1px 1px 5px #000;
  font-family: "Gentium Basic", serif;
  font-weight: 600;
}

.card-text {
  font-weight: 400;
}

.card-text strong {
  font-weight: 600;
}
</style>
