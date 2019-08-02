<template>
  <div>
    <Nav></Nav>
    <h1 class="text-center">Welcome to Tree Roads Teacher Portal</h1>
    <p class="text-center">Here on this portal you will be able to:</p>
    <ul class="text-center">
      <li>Search for Students</li>
      <li>Create students</li>
      <li>Generate Reports for students</li>
    </ul>
    
  </div>
</template>

<script>
import Nav from "../components/nav";
export default {
  name: "app",
  components: { Nav }
};
</script>
