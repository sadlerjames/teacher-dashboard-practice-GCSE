<template>
  <div>
    <Nav></Nav>
    <div id="studentprofile" v-if="noerror" class="mx-auto" style="width: 75%;">
      <h1 class="text-center">{{ forename }} {{ surname }}</h1>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-card title="Personal Details" style="max-width: 25rem;" class="mb-2">
              <div id="non-personal-edit" v-if="nonpersonaledit">
                <p>Forename: {{ forename }}</p>
                <p>Surname: {{ surname }}</p>
                <p>DOB: {{ dob }}</p>
                <p>Gender: {{ gender }}</p>
                <p>{{ errorPersonalMessage }}</p>
                <b-button
                  variant="danger"
                  v-on:click="personaledit = true, nonpersonaledit = false"
                >Edit</b-button>
              </div>

              <div id="personal-edit" v-if="personaledit">
                <b-form @submit="onPersonalSubmit" @reset="onPersonalReset">
                  <b-form-group id="input-group-1" label="Forename:" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="personalForm.forename"
                      type="text"
                      required
                      placeholder="Enter Forename"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Surname:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="personalForm.surname"
                      type="text"
                      required
                      placeholder="Enter Surname"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="DOB:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="personalForm.dob"
                      type="date"
                      required
                      placeholder="Enter DOB"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4" label="Gender:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="personalForm.gender"
                      type="text"
                      required
                      placeholder="Enter gender"
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Update</b-button>
                  <b-button type="reset" variant="danger">Cancel</b-button>
                </b-form>
              </div>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="School Details" style="max-width: 25rem;" class="mb-2">
              <div id="non-school-edit" v-if="nonschooledit">
                <p>School Email: {{ schoolEmail }}</p>
                <p>Tutor Group: {{ tutorGroup }}</p>
                <p>ID: {{ id }}</p>
                <p>{{ errorSchoolMessage }}</p>
                <b-button
                  variant="danger"
                  v-on:click="schooledit = true, nonschooledit = false"
                >Edit</b-button>
              </div>

              <div id="school-edit" v-if="schooledit">
                <b-form @submit="onSchoolSubmit" @reset="onSchoolReset">
                  <p>You can only change the tutor group!</p>
                  <b-form-group id="input-group-1" label="Tutor Group:" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="schoolForm.tutorGroup"
                      type="text"
                      required
                      placeholder="Enter New Tutor Group"
                    ></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Update</b-button>
                  <b-button type="reset" variant="danger">Cancel</b-button>
                </b-form>
              </div>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card title="Home Details" style="max-width: 25rem;" class="mb-2">
              <div id="non-home-edit" v-if="nonhomeedit">
                <p>Home Address: {{ homeAddress }}</p>
                <p>Home Phone: {{ homePhone }}</p>
                <p>{{ errorHomeMessage }}</p>
                <b-button
                  variant="danger"
                  v-on:click="homeedit = true, nonhomeedit = false"
                >Edit</b-button>
              </div>

              <div id="home-edit" v-if="homeedit">
                <b-form @submit="onHomeSubmit" @reset="onHomeReset">
                  <b-form-group id="input-group-1" label="Home Address:" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="homeForm.homeAddress"
                      type="text"
                      required
                      placeholder="Enter New Home Address"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Home Phone:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="homeForm.homePhone"
                      type="text"
                      required
                      placeholder="Enter New Home Phone Number"
                    ></b-form-input>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Update</b-button>
                  <b-button type="reset" variant="danger">Cancel</b-button>
                </b-form>
              </div>    
            </b-card>
          </b-col>
          <b-col>
            <b-card title="Generate Report" style="max-width: 25rem;" class="mb-2">
              <p>Forename: {{ forename }}</p>
              <p>Surname: {{ surname }}</p>
              <p>DOB: {{ dob }}</p>
              <p>Home Address: {{ homeAddress }}</p>
              <p>Gender: {{ gender }}</p>
              <p>Home Phone: {{ homePhone }}</p>
              <p>Tutor Group: {{ tutorGroup }}</p>
              <p>School Email: {{ schoolEmail }}</p>
              <p>Unique Id: {{ id }}</p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="no-student" v-if="error">
      <h1
        class="text-center"
      >Unfortunatly, {{ $route.params.id }} does not exist. Please enter another student!</h1>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav";
import auth from "../auth";
import student from "../student";
export default {
  name: "app",
  components: { Nav },
  data() {
    return {
      surname: "",
      forename: "",
      dob: "",
      homeAddress: "",
      homePhone: "",
      gender: "",
      tutorGroup: "",
      schoolEmail: "",
      grades: "",
      id: "",
      noerror: true,
      error: false,
      nonpersonaledit: true,
      personaledit: false,
      nonschooledit: true,
      schooledit: false,
      nonhomeedit: true,
      homeedit: false,
      personalMessage: "",
      schoolMessage: "",
      homeMessage: "",
      errorPersonalMessage: "",
      errorSchoolMessage: "",
      errorHomeMessage: "",
      personalForm: {
        forename: "",
        surname: "",
        dob: "",
        gender: ""
      },
      schoolForm: {
        tutorGroup: ""
      },
      homeForm: {
        homeAddress: "",
        homePhone: ""
      }
    };
  },
  methods: {
    getStudentData: function() {
      student.getAllData(this.$route.params.id, data => {
        if (data["success"] === true) {
          //store students data in variables
          let dsurname = data.data.data.surname;
          let surname = dsurname.charAt(0).toUpperCase() + dsurname.slice(1);
          let dforename = data.data.data.forename;
          let forename = dforename.charAt(0).toUpperCase() + dforename.slice(1);
          let dob = data.data.data.dob;
          let homeAddress = data.data.data.homeAddress;
          let homePhone = data.data.data.homePhone;
          let gender = data.data.data.gender;
          let tutorGroup = data.data.data.tutorGroup;
          let schoolEmail = data.data.data.schoolEmail;
          let grades = data.data.data.grades;
          let id = data.data.data.id;
          //put the student variables into the data
          this.surname = surname;
          this.forename = forename;
          this.dob = dob;
          this.homeAddress = homeAddress;
          this.homePhone = homePhone;
          this.gender = gender;
          this.tutorGroup = tutorGroup;
          this.schoolEmail = schoolEmail;
          this.grades = grades;
          this.id = id;
          this.personalForm.forename = forename;
          this.personalForm.surname = surname;
          this.personalForm.dob = dob;
          this.personalForm.gender = gender;
        } else {
          this.noerror = false;
          this.error = true;
        }
      });
    },
    onPersonalSubmit: function() {
      student.personalUpdate(
        this.id,
        this.personalForm.forename,
        this.personalForm.surname,
        this.personalForm.dob,
        this.personalForm.gender,
        data => {
          if (data === true) {
            this.personalMessage =
              "Student's details were successfully updated!";
          } else {
            this.errorPersonalMessage =
              "The email/password that you entered was incorrect";
          }
        }
      );
    },
    onPersonalReset: function() {
      this.nonpersonaledit = true;
      this.personaledit = false;
      this.personalForm.forename = this.forename;
      this.personalForm.surname = this.surname;
      this.personalForm.dob = this.dob;
      this.personalForm.gender = this.gender;
    },
    onSchoolSubmit: function() {
      student.schoolUpdate(
        this.id,
        this.schoolForm.tutorGroup,
        data => {
          if (data === true) {
            this.schoolMessage =
              "Student's details were successfully updated!";
          } else {
            this.errorSchoolMessage =
              "Unfortunately, there was an error in updating the students details. Please try again!";
          }
        }
      );
    },
    onSchoolReset: function() {
      this.nonschooledit = true;
      this.schooledit = false;
      this.schoolForm.tutorGroup = this.tutorGroup;
    },

    onHomeSubmit: function() {
      student.homeUpdate(
        this.id,
        this.homeForm.homePhone,
        this.homeForm.homeAddress,
        data => {
          if (data === true) {
            this.homeMessage =
              "Student's details were successfully updated!";
          } else {
            this.errorHomeMessage =
              "Unfortunately, there was an error in updating the students details. Please try again!";
          }
        }
      );
    },
    onHomeReset: function() {
      this.nonhomeedit = true;
      this.homeedit = false;
      this.homeForm.homeAddress = this.homeAddress;
      this.homeForm.homePhone = this.homePhone;
    }
    
  },
  beforeMount: function() {
    this.getStudentData();
  }
};
</script>
