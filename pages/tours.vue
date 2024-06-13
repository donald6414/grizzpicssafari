<template>
  <div class="body">
    <NavigationComponent />
    <section class="py-5 container">
      <header class="section-header mb-5 mt-5"><h1>Our Tours</h1></header>
      <!-- <div class="row" v-if="loading">
        <div class="col-lg-12 col-xs-12">
          <div class="row col-md-12">
            <div class="col-md-4"></div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6 col-xs-12 px-2" v-for="i in 6" :key="i">
                  <PackagePreloader />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="text-center mb-3 d-grid" id="filter_button">
        <button
          type="button"
          class="btn btn-primary filter_button"
          @click="filtersOption"
        >
          Filters
        </button>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-xs-12 wrapper filters filters-active-mobile"
          id="filters"
        >
          <div class="row fileterMobileHeader">
            <div class="col-md-6 mobile_filter_header">
              <span class="float-left" style="color: #3f230b">
                Filters Option
              </span>
              <span
                class="float-right fa fa-times"
                @click="cancelFiltersOption"
                data-dismiss="filters"
                style="right: 0; color: #3f230b"
              ></span>
            </div>
          </div>
          <div class="filterContents">
            <div class="card quote_card">
              <div class="card-title title mt-3">
                <strong>
                  <h1 class="our-color">Tour Levels</h1>
                </strong>
              </div>
              <div class="card-body">
                <template v-if="filter_loading">
                  <div>
                    <SpinnerComponent />
                  </div>
                </template>
                <template v-else>
                  <div
                    class="form-check ms-2 mt-1"
                    v-for="(tour_level, index) in tour_levels"
                    :key="tour_level.id"
                  >
                    <input
                      @change="tour_level_changed(tour_level)"
                      :id="'tour_level' + index"
                      type="checkbox"
                      class="form-check-input"
                    />
                    <label :for="'tour_level' + index" class="form-check-label">
                      {{ tour_level.title }}
                    </label>
                  </div>
                </template>
              </div>
            </div>

            <div class="card quote_card mt-3">
              <div class="card-title title mt-3">
                <strong>
                  <h1 class="our-color">Tour Focus</h1>
                </strong>
              </div>
              <div class="card-body">
                <template v-if="filter_loading">
                  <div>
                    <SpinnerComponent />
                  </div>
                </template>
                <template v-else>
                  <div
                    class="form-check ms-2 mt-1"
                    v-for="(tour_focus, index) in tour_foci"
                    :key="tour_focus.id"
                  >
                    <input
                      @change="tour_focus_changed(tour_focus)"
                      :id="'tour_focus' + index"
                      type="checkbox"
                      class="form-check-input"
                    />
                    <label :for="'tour_focus' + index" class="form-check-label">
                      {{ tour_focus.title }}
                    </label>
                  </div>
                </template>
              </div>
            </div>
            <div class="card quote_card mt-3">
              <div class="card-title title mt-3">
                <strong>
                  <h1 class="our-color">Tour Activities</h1>
                </strong>
              </div>
              <div class="card-body">
                <template v-if="filter_loading">
                  <div>
                    <SpinnerComponent />
                  </div>
                </template>
                <template v-else>
                  <div
                    class="form-check ms-2 mt-1"
                    v-for="(tour_activity, index) in tour_activities"
                    :key="tour_activity.id"
                  >
                    <input
                      @change="tour_activity_changed(tour_activity)"
                      :id="'tour_activity' + index"
                      type="checkbox"
                      class="form-check-input"
                    />
                    <label
                      :for="'tour_activity' + index"
                      class="form-check-label"
                    >
                      {{ tour_activity.title }}
                    </label>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-9 col-xs-12">
          <div class="row gx-0">
            <div class="col-md-6 col-xs-12 px-2">
              <TourCard />
            </div>
            <div class="col-md-6 col-xs-12 px-2">
              <TourCard />
            </div>
          </div>
        </div> -->
        <div class="col-lg-9 col-xs-12">
          <div class="row">
            <template v-if="loading">
              <div class="col-md-6 col-xs-12 px-2" v-for="i in 6" :key="i">
                <PackagePreloader />
              </div>
            </template>
            <template v-else>
              <div
                class="col-md-6 col-xs-12 px-2"
                v-for="tour in tour_packages.data"
                :key="tour.id"
              >
                <TourCard :tour_package="tour" />
              </div>
            </template>
          </div>
          <div class="text-center py-4">
            <!-- <pagination
              align="center"
              :data="tour_packages"
              @pagination-change-page="get_packages"
              :pageLinkClass="'page-item'"
            ></pagination> -->
            <button
              class="btn btn-brown"
              @click="previousPage"
              :disabled="tour_packages.current_page === 1"
            >
              Previous
            </button>
            <span class="px-4">
              <strong>
                {{ tour_packages.current_page }}
              </strong>
            </span>
            <button
              class="btn btn-brown"
              @click="nextPage"
              :disabled="tour_packages.current_page === tour_packages.last_page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <FooterComponent />
    </section>
    <!-- Mobile view filters -->
    <!-- <section id="filters">
      <div class="wrapper">
        <div class="filter_close">Filter Option</div>
      </div>
    </section> -->
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
import TourCard from "../components/TourCard.vue";
import PackagePreloader from "../components/preloaders/PackagePreloader.vue";
import SpinnerComponent from "../components/preloaders/SpinnerComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
// import pagination from "laravel-vue-pagination";
import axios from "axios";
import swal from "sweetalert";
export default {
  components: {
    NavigationComponent,
    TourCard,
    PackagePreloader,
    // pagination,
    FooterComponent,
    SpinnerComponent,
  },
  data: () => ({
    filter_loading: true,
    loading: true,
    tour_packages: [],
    filters: {
      activities: [],
      level: [],
      foci: [],
    },
    tour_levels: [],
    tour_foci: [],
    tour_activities: [],
  }),
  methods: {
    get_packages(page = 1) {
      axios
        .get("https://api.grizzpicssafari.com/api/" + "packages?page=" + page)
        .then((response) => {
          this.tour_packages = response.data;
          this.loading = false;
        })
        .catch((error) => {
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
    get_filter_info() {
      axios
        .get("https://api.grizzpicssafari.com/api/get_filter_info")
        .then((response) => {
          this.tour_levels = response.data[0];
          this.tour_foci = response.data[1];
          this.tour_activities = response.data[2];
          this.filter_loading = false;
        })
        .catch((error) => {
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
    tour_level_changed(level) {
      if (this.filters.level.includes(level.id)) {
        let removed_level = this.filters.level.indexOf(level.id);
        this.filters.level.splice(removed_level, 1);
      } else {
        this.filters.level.push(level.id);
      }
      this.filter_packages();
    },
    tour_focus_changed(focus) {
      if (this.filters.foci.includes(focus.id)) {
        let removed_focus = this.filters.foci.indexOf(focus.id);
        this.filters.foci.splice(removed_focus, 1);
      } else {
        this.filters.foci.push(focus.id);
      }
      this.filter_packages();
    },
    tour_activity_changed(activity) {
      if (this.filters.activities.includes(activity.id)) {
        let removed_activity = this.filters.activities.indexOf(focus.id);
        this.filters.activities.splice(removed_activity, 1);
      } else {
        this.filters.activities.push(activity.id);
      }
      this.filter_packages();
    },
    filter_packages() {
      this.loading = true;
      axios
        .get("https://api.grizzpicssafari.com/api/filter_packages", {
          params: this.filters,
        })
        .then((response) => {
          this.tour_packages = response.data;
          this.loading = false;
        })
        .catch((error) => {
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
    previousPage() {
      this.loading = true;
      this.get_packages(this.tour_packages.current_page - 1);
      // this.$emit("page-change", this.currentPage - 1);
    },
    nextPage() {
      this.loading = true;
      this.get_packages(this.tour_packages.current_page + 1);
      // this.$emit("page-change", this.currentPage + 1);
    },
    filtersOption() {
      var filterOption = document.getElementById("filters");
      if (!filterOption.classList.contains("mobile_view")) {
        filterOption.classList.add("mobile_view");
      } else {
        // filterOption.style.display = "none";
        filterOption.classList.remove("mobile_view");
      }
    },
    cancelFiltersOption() {
      var filterOption = document.getElementById("filters");
      if (filterOption.classList.contains("mobile_view")) {
        filterOption.classList.remove("mobile_view");
      }
    },
  },
  created() {
    this.get_filter_info();
    this.get_packages();
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
.title {
  /* margin-left: -1.25rem;
  margin-right: -1.25rem; */
  padding: 0 1.25rem 0.9375rem;
  border-bottom: 0.0625rem solid #d9d9d9;
  position: relative;
}

.title strong {
  padding-top: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
}
.title strong h1 {
  line-height: 2rem;
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.03125rem;
}
.card {
  border-radius: 0;
}

.btn-brown {
  background: #3f230b;
  color: #fff;
}

.form-check {
  margin-bottom: 0;
  min-height: auto;
}

.form-check-input {
  position: relative;
  width: 1.125rem;
  height: 1.125rem;
  background-color: #fff;
  border: 0.125rem solid #3f230b;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.3em;
  vertical-align: top;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  border: 1px solid #3f230b;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* -webkit-print-color-adjust: exact; */
  /* color-adjust: exact; */
  transition: background-color 0.15s ease-in-out,
    background-position 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.form-check-input[type="checkbox"]:checked {
  background-color: #3f230b;
}
.form-check-input[type="checkbox"]:focus {
  border-color: #3f230b;
}

.form-check-input[type="checkbox"] {
  border-radius: 0.125rem;
}
.form-check .form-check-input {
  margin-left: -1.79rem;
}
.form-check-input[type="checkbox"] {
  border-radius: 0.25em;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}
.filter_button {
  display: none;
}
.fileterMobileHeader {
  display: none;
}
@media screen and (max-device-width: 640px) {
  .filters {
    display: none;
  }

  .filter_button {
    display: block;
  }

  .filterContents {
    margin-top: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .card {
    border: 0px;
  }
  .title {
    border-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }

  /* #filters {
    display: none;
  } */
  .mobile_view {
    display: block;
    background-color: #fff;
    position: fixed;
    height: 100%;
    width: 100%;
  }

  .filter_close {
    background-color: #e2e1e1;
    padding: 0.625rem 1.25rem;
    position: absolute;
    width: 100%;
    top: 0 !important;
    left: 0;
    box-sizing: border-box;
    font-size: 1.25rem;
    z-index: 200;
    box-shadow: 0px px 2px rgba(0, 0, 0, 0.18);
  }

  .filters-active-mobile {
    background: rgb(255, 255, 255);
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 10000;
    overflow: scroll;
    top: 0px;
    margin-top: 0px;
  }
  .wrapper {
    width: 100vw;
    height: 100vh;
  }
  .fileterMobileHeader {
    top: 0;
    width: 100%;
    position: absolute;
    display: block;
    background-color: #ddd;
    box-shadow: 3px 3px 6px black;
  }
  .mobile_filter_header {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #3f230b;
  --bs-btn-border-color: #3f230b;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #846644;
  --bs-btn-hover-border-color: #846644;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #846644;
  --bs-btn-active-border-color: #846644;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #3f230b;
  --bs-btn-disabled-border-color: #3f230b;
}
.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: #3f230b;
  border-color: #3f230b;
}
.our-color {
  color: #3f230b;
}
/* .wrapper {
  width: 100%;
  height: 100vh;
} */
/* .mobile_filter_header {
  display: none;
} */
</style>
