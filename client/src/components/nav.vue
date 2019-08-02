<template>
  <div id="main">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Tree Road School Teacher Portal</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/create">Create a Student</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search for a student"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
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
import cookies from "js-cookie";

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
