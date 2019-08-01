<template>
  <div id="main">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand to="/">Dashboard Template</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/signup">Sign Up</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>{{ name }}</em>
            </template>
            <b-dropdown-item href="/logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import auth from "../auth";
import cookies from 'js-cookie'

let cookie = cookies.get("user-m");

export default {
  name: "Nav",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    getName: function() {
      auth.getAuthData(cookie, data => {
        let email = data.data.auth.r.email;
        this.name = email;
      });
    }
  },
  beforeMount() {
    this.getName();
  }
};
</script>
