<template>
  <div class="body">
    <nav
      class="navbar navbar-expand-lg navbar-dark px-0 px-lg-5 px-md-3 px-sm-2 py-1 w-100 fixed-top text-white fw-bold"
    >
      <div class="container">
        <nuxt-link
          to="/"
          class="navbar-brand"
          title="Grizzpics Trek & Safari`s"
        >
          <img
            src="../assets/logo/grizzpicsLogo2.jpg"
            height="60"
            width="60"
            alt="Grizzpics Trek & Safari`s"
          />
        </nuxt-link>

        <button
          id="toggleButton"
          class="navbar-toggler text-danger collapsed"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="mobileView"
        >
          <svg viewBox="0 0 448 512" width="20">
            <path
              fill="#f93154"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>

        <div id="navbarNav" class="collapse navbar-collapse">
          <ul
            class="navbar-nav ms-auto d-flex justify-content-center align-items-center text-center"
          >
            <li class="nav-item text-uppercase p-2" title="Home">
              <nuxt-link
                to="/"
                class="nav-link"
                :class="$route.path == '/' ? 'active' : ''"
              >
                Home
              </nuxt-link>
            </li>
            <!-- <li class="nav-item text-uppercase p-2" title="About us">
              <nuxt-link
                to="/about"
                class="nav-link"
                :class="$route.path == '/about' ? 'active' : ''"
              >
                About us
              </nuxt-link>
            </li>
            <li class="nav-item text-uppercase p-2" title="Services">
              <nuxt-link
                to="/services"
                class="nav-link"
                :class="$route.path == '/services' ? 'active' : ''"
              >
                Services
              </nuxt-link>
            </li> -->
            <li class="nav-item text-uppercase p-2" title="Our Tours">
              <nuxt-link
                to="/tours"
                class="nav-link"
                :class="$route.path == '/tours' ? 'active' : ''"
              >
                Our Tours
              </nuxt-link>
            </li>
            <li class="nav-item text-uppercase p-2" title="Contact us">
              <nuxt-link
                to="/contacts"
                class="nav-link"
                :class="$route.path == '/contacts' ? 'active' : ''"
              >
                Contact us
              </nuxt-link>
            </li>
            <!-- <li class="nav-item text-uppercase p-2 d-flex align-items-center">
                        <div id="google_translate_element"></div>
                    </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route() {
      // This will close the collapse if any part of the route changes
      // including query, params, hash, name, or path
      var element = document.getElementById("navbarNav");
      element.classList.remove("show");
    },
  },
  methods: {
    mobileView() {
      let button = document.getElementById("toggleButton").classList.value;
      let navigation = document.getElementById("navbarNav").classList.value;
      if (button.includes("collapsed") && !navigation.includes("show")) {
        document.getElementById("navbarNav").classList.add("show");
        document.getElementById("toggleButton").classList.remove("collapsed");
      } else {
        document.getElementById("navbarNav").classList.remove("show");
        document.getElementById("toggleButton").classList.add("collapsed");
      }
    },
  },
  created() {
    // console.log(this.$route.path);
  },
};
</script>

<style scoped>
.navbar {
  /* background: rgba(15, 26, 46, 0.938); */
  background: #3f230b;
}
.nav-item {
  /* font-family: "Montserrat", sans-serif; */
  font-size: 13px;
}

@media (max-width: 1200px) {
  /* .navbar.navbar-expand-lg {
    padding-left: 10px !important;
    padding-right: 10px !important;
  } */
}

/* @media (max-width: 400px) {
  .navbar-brand img {
    height: 40px;
  }
} */
.ms-auto {
  margin-left: auto !important;
}

.body {
  font-family: "Gentium Basic", serif;
}
</style>
