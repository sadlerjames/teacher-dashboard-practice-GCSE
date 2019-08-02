<template>
  <div>
    <Nav></Nav>
    <h1 class="text-center">Create a student</h1>
    <b-form @submit.prevent="onSubmit" class="mx-auto" style="width: 32%;">
      <b-form-group id="forename-group" label="Forename:" label-for="forename">
        <b-form-input
          id="forename"
          v-model="form.forename"
          type="text"
          required
          placeholder="Enter student's Forename"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="Surname-group" type="Surname" label="Surname:" label-for="Surname">
        <b-form-input
          id="Surname"
          v-model="form.surname"
          type="text"
          required
          placeholder="Enter student's Surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="dob-group" type="dob" label="Date of Birth:" label-for="dob">
        <b-form-input
          id="dob"
          v-model="form.dob"
          type="date"
          required
          placeholder="Enter student's Date of Birth"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="address-group" type="address" label="Home Address:" label-for="address">
        <b-form-input
          id="address"
          v-model="form.address"
          type="text"
          required
          placeholder="Enter student's address"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="phone-group" type="phone" label="Home Phone Number:" label-for="phone">
        <b-form-input
          id="phone"
          v-model="form.phone"
          type="number"
          required
          placeholder="Enter student's Home Phone Number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="gender-group" type="gender" label="Gender:" label-for="gender">
        <b-form-input
          id="gender"
          v-model="form.gender"
          type="text"
          required
          placeholder="Enter student's gender"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="tutor-group" type="tutor" label="Tutor Group:" label-for="tutor">
        <b-form-input
          id="tutor"
          v-model="form.tutor"
          type="tutor"
          required
          placeholder="Enter student's tutor"
        ></b-form-input>
      </b-form-group>

      <p>{{ message }}</p>
      <b-button type="submit" variant="primary">Create</b-button>
    </b-form>
  </div>
</template>

<script>
import Nav from "../components/nav";
import student from "../student";
export default {
  name: "app",
  components: { Nav },
  data() {
    return {
      form: {
        forename: "",
        surname: "",
        dob: "",
        address: "",
        phone: "",
        gender: "",
        tutor: ""
      },
      message: ""
    };
  },
  methods: {
    onSubmit() {
      student.create(this.form.forename, this.form.surname,  this.form.dob, this.form.address, this.form.phone, this.form.gender, this.form.tutor, data => {
        if (data === true) {
          this.message = "Successfully created Student";
        } else {
          this.message = "There was an error in creating the student, please try again!";
        }
      });
    }
  }
};
</script>
