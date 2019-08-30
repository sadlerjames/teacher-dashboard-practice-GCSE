<template>
  <div>
    <Nav></Nav>
    <h1 class="text-center">Welcome to Tree Roads Teacher Portal</h1>
    <h1>All students</h1>
    <b-table
      id="all-students"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      striped
      hover
      small
      :fields="fields"
    ></b-table>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="all-students"
    ></b-pagination>
  </div>
</template>

<script>
import Nav from "../components/nav";
import auth from "../auth";
export default {
  name: "app",
  components: { Nav },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: {
        surname: {
          label: "Last Name",
          sortable: true
        },
        forename: {
          label: "First Name",
          sortable: false
        },
        schoolEmail: {
          label: "Email",
          sortable: false
        },
        dob: {
          label: "Date of Birth",
          sortable: false
        },
        tutorGroup: {
          label: "Tutor Group",
          sortable: true
        }
      },
      items: []
    };
  },
  methods: {
    getStudents: function() {
      auth.getStudents(data => {
        let students = data.data.students;
        this.items = students;
      });
    }
  },
  beforeMount() {
    this.getStudents();
  }
};
</script>
