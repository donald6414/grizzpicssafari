<template>
  <div class="body">
    <head>
      <!-- <meta name="google-site-verification" content="a50WRxMabxpQ14C2jP9E8S2Lp19KjtvI5MFRfD0ocEM" /> -->
    </head>
    <NavigationComponent />
    <HeroComponent />
    <section class="py-5 container" id="popular_package">
      <header class="section-header mb-5 mt-3"><h1>Popular Tours</h1></header>
      <div class="row" v-if="loading">
        <div class="col-lg-4 col-md-6 col-xs-12 px-2" v-for="i in 6" :key="i">
          <PackagePreloader />
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-lg-4 col-md-6 col-xs-12 px-2"
          v-for="tour in popular_packages"
          :key="tour.id"
        >
          <TourCard :tour_package="tour" />
        </div>
      </div>
    </section>
    <section>
      <header class="section-header mb-5 mt-3"><h1>Who we are</h1></header>
      <AboutSection />
    </section>
    <section class="mt-4">
      <FooterComponent />
    </section>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
// import HomeHero from "../components/HomeHero.vue";
import HeroComponent from "../components/HeroComponent.vue";
import TourCard from "../components/TourCard.vue";
import FooterComponent from "../components/FooterComponent.vue";
import AboutSection from "../components/AboutSection.vue";
import PackagePreloader from "../components/preloaders/PackagePreloader.vue";
import axios from "axios";
import swal from "sweetalert";
// const runtimeConfig = useRuntimeConfig();
export default {
  // head: {
  //   titleTemplate: "%s - Home - Popular Tours",
  //   meta: [
  //     {
  //       hid: "description",
  //       name: "description",
  //       content:
  //         "The Best Safaris In Tanzania Let Us Take You to a Place You’ve Never Been Before",
  //     },
  //   ],
  // },
  components: {
    NavigationComponent,
    // HomeHero,
    HeroComponent,
    TourCard,
    AboutSection,
    PackagePreloader,
    FooterComponent,
  },
  data: () => ({
    loading: true,
    popular_packages: [],
  }),
  methods: {
    get_popular_packages() {
      axios
        .get("https://api.grizzpicssafari.com/api/" + "get_popular_packages")
        .then((response) => {
          this.popular_packages = response.data;
          this.loading = false;
        })
        .catch((error) => {
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
  },
  created() {
    this.get_popular_packages();
  },
};
</script>

<style scoped>
.body {
  font-family: "Gentium Basic", serif;
}
.section-header h1 {
  font-size: 30px;
  color: #846644;
  text-align: center;
  font-weight: 500;
  position: relative;
  padding-bottom: 15px;
}

.section-header h1:before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-header h1:after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #3f230b;
  bottom: 0;
  left: calc(50% - 20px);
}
</style>
