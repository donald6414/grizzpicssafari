<template>
  <div class="body">
    <NavigationComponent />
    <section class="py-5 container">
      <header class="section-header mb-5 mt-5"><h1>Contact us</h1></header>
      <div class="card p-4 p-md-5 p-lg-5 mx-auto">
        <div class="card-body">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id=""
              v-model="message.name"
              class="form-control"
            />
            <div
              v-if="errors.name"
              v-html="errors.name[0]"
              style="color: red"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id=""
              v-model="message.email"
              class="form-control"
            />
            <div
              v-if="errors.email"
              v-html="errors.email[0]"
              style="color: red"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="text"
              id=""
              v-model="message.phone"
              class="form-control"
            />
            <div
              v-if="errors.phone"
              v-html="errors.phone[0]"
              style="color: red"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" v-model="message.message"></textarea>
            <div
              v-if="errors.message"
              v-html="errors.message[0]"
              style="color: red"
            />
          </div>
          <div class="form-group mt-4">
            <button class="btn btn-brown" @click="contact_message">
              <div class="spinner-border" role="status" v-if="loading"></div>
              <div v-else>Submit</div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-4">
      <FooterComponent />
    </section>
  </div>
</template>

<script>
import NavigationComponent from "../components/NavigationComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import axios from "axios";
import swal from "sweetalert";
export default {
  components: {
    NavigationComponent,
    FooterComponent,
  },
  data: () => ({
    loading: false,
    errors: [],
    message: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  }),
  methods: {
    contact_message() {
      this.loading = true;
      axios
        .post(
          "https://api.grizzpicssafari.com/api/" + "contact_message",
          this.message,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Credentials": true,
            },
          }
        )
        .then((response) => {
          if (response.data[0] == 200) {
            swal(
              "Thank you!",
              "We have received your message, we will reach out to you soon!",
              "success"
            );
            this.loading = false;
            this.message.name = "";
            this.message.email = "";
            this.message.phone = "";
            this.message.message = "";
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.loading = false;
          swal("Oops...!", "Something went wrong, please try again!", "error");
          return error;
        });
    },
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

.card {
  border-radius: 0;
}

.btn-brown {
  background: #3f230b;
  color: #fff;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #3f230b;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #846644;
}
</style>
