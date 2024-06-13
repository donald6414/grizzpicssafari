<template>
  <div class="mt-4">
    <div class="footer">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-3">
            <img
              src="../assets/logo/grizzpicsLogo2.jpg"
              class="w-100 h-auto"
              alt="Grizzpics Trek & Safari`s"
            />
          </div>
          <div class="col-md-3">
            <div class="footer-header">
              <h1>Quick Links</h1>
            </div>
            <div class="footer-content">
              <ul>
                <li class="pb-3">
                  <nuxt-link to="/"> Home </nuxt-link>
                </li>
                <li class="pb-3">
                  <nuxt-link to="/tours"> Our Tours </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contacts"> Contacts </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-header">
              <h1>Who we are</h1>
            </div>
            <div class="footer-content">
              <p style="color: #fff">
                We are a Tours and Travel Company based in Tanzania organizing
                Safaris, with tours ranging from budget, mid-range and Luxury
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="footer-header">
              <h1>GrizzpicsSafari</h1>
            </div>
            <div class="footer-content">
              <ul>
                <li>
                  <a href="tel:+255687794694">
                    <i class="fa fa-phone" aria-hidden="true"></i
                    ><span style="margin-left: 10px">+255 687 794 694</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:grizzpicssafaris@gmail.com">
                    <i class="fa fa-envelope" aria-hidden="true"></i
                    ><span style="margin-left: 10px"
                      >grizzpicssafaris@gmail.com</span
                    >
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right py-1 bg-dark">
      <div class="container">
        <p class="text-center text-light mt-3">
          © 2023 Grizzpics Treks & Safari's
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #3f230b;
}

.footer-header h1 {
  color: #fff;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}
.footer-content ul li a {
  text-decoration: none;
  color: #fff;
}
</style>
