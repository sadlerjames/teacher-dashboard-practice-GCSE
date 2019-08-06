<template>
  <div>
    <Nav></Nav>
    <h1 class="text-center">Welcome to Tree Roads Teacher Portal</h1>
    <h1>All students</h1>
    <b-table striped hover small :items="items" :fields="fields"></b-table>
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
      // Note 'age' is left out and will not appear in the rendered table
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
