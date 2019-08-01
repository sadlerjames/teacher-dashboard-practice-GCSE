<template>
  <div>
    <h1 class="text-center">Sign Up</h1>
    <b-form @submit.prevent="onSubmit" class="mx-auto" style="width: 32%;">
      <b-form-group id="email-group" label="Email Address:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter your email address"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password-group" type="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>
      {{ message }}
      <b-button type="submit" variant="primary">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
import auth from "../auth";

export default {
  name: "app",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      message: ""
    };
  },
  methods: {
    onSubmit() {
      auth.create(this.form.email, this.form.password, (data) => {
        if (data === true) {
          this.$router.push("/");
        } else {
          this.message = "There was an error in signing you up, please try again!";
        }
      });
    }
  }
};
</script>
